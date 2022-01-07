---
title: How to generate JWT key pair manually
slug: how-to-generate-jwt-key-pair-manually
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2021-11-23 00:00:00 Z
---

{% include messages/warning.html
    content="<b>Warning:</b> Replace /usr/share/php by /var/www and
            /etc/passbolt by /var/www/passbolt/config if you have installed passbolt from sources."
%}

Ensure `/etc/passbolt/jwt` folder exists and is owned by `root` user and `www-data` group.

```
sudo mkdir -m=750 /etc/passbolt/jwt
```

Create the JWT keys:

```
sudo /usr/share/php/passbolt/bin/cake passbolt create_jwt_keys
```

Ensure rights are correct:

```
sudo chown -R root:www-data /etc/passbolt/jwt
sudo chmod 600 /etc/passbolt/jwt/jwt.key
sudo chmod 640 /etc/passbolt/jwt/jwt.pem
```

Ensure that all is good by executing the healthcheck.

```
sudo su -s /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt healthcheck --jwt" www-data
```

You should see this result:

```
JWT Authentication
[PASS] The JWT Authentication plugin is enabled
[PASS] The /etc/passbolt/jwt/ directory is not writable.
[PASS] A valid JWT key pair was found
```