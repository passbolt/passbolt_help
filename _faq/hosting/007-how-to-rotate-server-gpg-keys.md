---
title: How to rotate server GPG keys
slug: how-to-rotate-server-gpg-keys
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2022-01-21 00:00:00 Z
---

## Docker installation

It is quite simple with docker to rotate your passbolt server GPG keys. Connect yourself inside the passbolt container and delete the keys:

```
rm /etc/passbolt/gpg/serverkey.asc
rm /etc/passbolt/gpg/serverkey_private.asc
```

Destroy then recreate passbolt container and new GPG server keys will be generated.

```bash
docker-compose up -d --force-recreate
```

## Other installations

Create a temporary GPG home folder:

```
mkdir /tmp/gpg-temp
```

Generate new GPG keys:

```
gpg --homedir /tmp/gpg-temp --batch --no-tty --gen-key <<EOF
    Key-Type: default
    Key-Length: ${PASSBOLT_KEY_LENGTH:-2048}
    Subkey-Type: default
    Subkey-Length: ${PASSBOLT_SUBKEY_LENGTH:-2048}
    Name-Real: ${PASSBOLT_KEY_NAME:-Passbolt default user}
    Name-Email: ${PASSBOLT_KEY_EMAIL:-passbolt@yourdomain.com}
    Expire-Date: ${PASSBOLT_KEY_EXPIRATION:-0}
    %no-protection
    %commit
EOF
```

Replace the current GPG server keys with the new ones:

```
gpg --homedir /tmp/gpg-temp --armor --export ${PASSBOLT_KEY_EMAIL:-passbolt@yourdomain.com} | sudo tee /etc/passbolt/gpg/serverkey.asc > /dev/null
gpg --homedir /tmp/gpg-temp --armor --export-secret-key ${PASSBOLT_KEY_EMAIL:-passbolt@yourdomain.com} | sudo tee /etc/passbolt/gpg/serverkey_private.asc > /dev/null
```

Ensure new GPG keys owner and group are correct. Replace **www-data** with **nginx** if you are using RPM-based Linux distribution.

```
sudo chown www-data:www-data /etc/passbolt/gpg/serverkey_private.asc
sudo chown www-data:www-data /etc/passbolt/gpg/serverkey.asc
```

Get new GPG keys fingerprint from public key:

```
sudo gpg --show-keys /etc/passbolt/gpg/serverkey.asc | grep -Ev "^(pub|sub|uid|$)" | tr -d ' '
```

Ensure the fingerprint from private key is the same:

```
sudo gpg --show-keys /etc/passbolt/gpg/serverkey_private.asc | grep -Ev "^(pub|sub|uid|$|sec|ssb)" | tr -d ' '
```

CentOS 7 gpg command is quite old and has no **--show-keys** parameter. Use these commands instead:

```
# public key fingerprint
sudo cat /etc/passbolt/gpg/serverkey.asc | gpg --with-fingerprint - | grep -Ev "^(pub|sub|uid|$)" | tr -d ' ' | sed 's/Keyfingerprint=//'
# private key fingerprint
sudo cat /etc/passbolt/gpg/serverkey_private.asc | gpg --with-fingerprint - | grep -Ev "^(pub|sub|uid|$|sec|ssb)" | tr -d ' ' | sed 's/Keyfingerprint=//'
```

Open **/etc/passbolt/passbolt.php** configuration file and replace old fingerprint with the new one in the **passbolt** section:

```
    'passbolt' => [
        // GPG Configuration.
        // The keyring must to be owned and accessible by the webserver user.
        // Example: www-data user on Debian
        'gpg' => [
            // Main server key.
            'serverKey' => [
                // Server private key fingerprint.
                'fingerprint' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                'public' => CONFIG . DS . 'gpg' . DS . 'serverkey.asc',
                'private' => CONFIG . DS . 'gpg' . DS . 'serverkey_private.asc',
            ],
        ],

```

Launch a healthcheck command to get passbolt GNUPGHOME folder (usually /var/lib/passbolt/.gnupg but can be different if you installed passbolt from sources):

```
 sudo -H -u www-data bash -c "/usr/share/php/passbolt/bin/cake passbolt healthcheck --gpg" | grep GNUPGHOME
```

Delete the current GNUPGHOME folder, it will be automatically recreated.

```
sudo rm -rf /var/lib/passbolt/.gnupg
```

On next connection through web interface, you will get a warning that the server key has been changed:

{% include
    articles/figure.html
    url="/assets/img/help/2022/01/gpg-server-key-changed.png"
    legend="Server key has changed" width="586px"
%}

You can now delete the temporary GPG home folder:

```
rm -rf /tmp/gpg-temp
```
