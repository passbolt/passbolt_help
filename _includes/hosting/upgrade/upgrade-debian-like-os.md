## Prerequisites

For this tutorial, you will need:
- A {{ distributionLabel }} {{ distributionVersionOld }} server.
- Passbolt Debian package installed.
- Ensure you have sufficient space for the upgrade.

This manual has for aim to help you upgrade your distribution, but it does not replace 
[the official {{ distributionLabel }} guide]({{distributionUpgradeGuide}}), please refer to it if you have any doubt.

## 1. Take down your site

It is generally a good idea to stop running the site prior to the upgrade. This is to avoid having side effects
such as active users corrupting the data in the middle of an upgrade.

```bash
$ sudo systemctl stop nginx
```

## 2. Backup your instance

First things first, as this is a sensitive operation a backup of the instance must be performed to prevent any data loss. 
You can follow our [backup process](/hosting/backup).

## 3. Prepare repositories

### 3.1. Upgrade the OS and other third party repositories

Prior to upgrading the system, ensure the OS as well as the third party repositories ar now targeting
{{ distributionLabel }} {{ distributionVersion }}. This can be easily done with sed:

```
sudo sed -i 's/buster/bullseye/g' /etc/apt/sources.list
sudo sed -i 's/buster/bullseye/g' /etc/apt/sources.list.d/*.list
```

Take care of the debian security repository !! The format has changed and the correct one is now, edit the file 
*/etc/apt/sources.list* and update the security repositories as following:

```
deb https://security.debian.org/debian-security bullseye-security main
deb-src https://security.debian.org/debian-security bullseye-security main
```

### 3.2. Remove the old passbolt repository source

With {{ distributionLabel }} {{ distributionVersion }} apt-key is now deprecated and with this change let's migrate to 
the new source-file format (DEB822).

Remove the old passbolt source-file:

```
sudo rm /etc/apt/sources.list.d/passbolt.list
```

Remove the passbolt GnuPG key from apt-key:

```
sudo apt-key del 0xDE8B853FC155581D
```

### 3.3. Retrieve and store the passbolt GnuPG repository key

Retrieve passbolt repository package official GnuPG key from *hkps://keys.mailvelope.com*, *hkps://pgp.mit.edu* or *hkps://keys.gnupg.net*:

```
gpg --keyserver hkps://keys.mailvelope.com --receive-keys 0xDE8B853FC155581D 
```

Check that the GPG fingerprint matches `3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D`:

```
gpg --list-key --with-fingerprint 0xDE8B853FC155581D
```

It must return:

```
pub   rsa2048 2020-05-18 [SC] [expires: 2022-05-18]
      3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D
uid           [ unknown] Passbolt SA package signing key <contact@passbolt.com>
sub   rsa2048 2020-05-18 [E] [expires: 2022-05-18]
```

Stock the passbolt GnuPG key on disk for later use:

```
gpg --export 0xDE8B853FC155581D | sudo tee \
  /usr/share/keyrings/passbolt-repository.gpg >/dev/null
```

### 3.4. Add the new passbolt repository source

Create a new repository source-file following the format DEB822 for passbolt.

```
cat << EOF | sudo tee /etc/apt/sources.list.d/passbolt.sources > /dev/null
Types: deb
URIs: https://download.passbolt.com/{{ product }}/{{ distribution }}
Suites: {{ distributionVersionName }}
Components: stable
Signed-By: /usr/share/keyrings/passbolt-repository.gpg
EOF
```

## 4. Upgrade your system

Update the apt indexes :

```
sudo apt update
```

You can now upgrade your system :

```
# Upgrade first
sudo apt upgrade

# Then perform the dist-upgrade
sudo apt dist-upgrade
```

## 5. Update passbolt nginx configuration

As php-fpm has been upgraded from 7.3 to 7.4, nginx configuration has to be updated accordingly.

It can easily be done with sed :

```
sudo sed -i 's/php7.3-fpm/php-fpm/g' /etc/nginx/sites-enabled/nginx-passbolt.conf
```

Check if you have no configuration issue :

```
sudo nginx -t
```

It should return:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

You can now safely reload the nginx web server:

```
sudo systemctl reload nginx.service
```

## 6. Reboot your server

With {{ distributionLabel }} {{ distributionVersion }} comes a new Linux kernel, you must reboot your server.

## 7. Clean useless packages

Once the server rebooted on the new kernel, you can now remove useless packages:

```
sudo apt autoremove --purge
sudo apt autoclean
```

## 8. Troubleshooting

### MariaDB went missing

It is possible your MariaDB instance has been uninstalled. You can install it back:

```
sudo apt install default-mysql-server
```
