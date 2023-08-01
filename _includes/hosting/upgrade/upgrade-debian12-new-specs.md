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
sudo sed -i 's/bullseye/bookworm/g' /etc/apt/sources.list
```

Please, take a moment with: *cat /etc/apt/sources.list* to ensure that there is not any bullseye left on this file. You should expect something like what's shown below.

```bash
# deb cdrom:[Debian GNU/Linux 11.6.0 _Bullseye_ - Official amd64 DVD Binary-1 20221217-10:40]/ bookworm contrib main

#deb cdrom:[Debian GNU/Linux 11.6.0 _Bullseye_ - Official amd64 DVD Binary-1 20221217-10:40]/ bookworm contrib main

deb http://httpredir.debian.org/debian/ bookworm main
deb-src http://httpredir.debian.org/debian/ bookworm main

deb http://security.debian.org/debian-security bookworm-security main contrib
deb-src http://security.debian.org/debian-security bookworm-security main contrib

# bookworm-updates, to get updates before a point release is made;
# see https://www.debian.org/doc/manuals/debian-reference/ch02.en.html#_updates_and_backports
deb http://httpredir.debian.org/debian/ bookworm-updates main contrib
deb-src http://httpredir.debian.org/debian/ bookworm-updates main contrib

```

## 4. Upgrade your system

Update the apt indexes :

```
sudo apt update
```

Upgrade Passbolt PRO :
```
sudo apt --only-upgrade install passbolt-pro-server
```

{% include messages/warning.html
content="You are using Passbolt CE? Run `sudo apt --only-upgrade install passbolt-ce-server`"
%}

You can now upgrade your system :

```
# Upgrade first
sudo apt upgrade

# Then perform the dist-upgrade
sudo apt dist-upgrade
```

### 4.1. Ensure that you are running the correct distributions 

In order to verify the distribution :

```bash
sb_release -a
```

### 4.2. Ensure that you are running the correct PHP 8.2 version

To verify the PHP version :

```bash
php -v
```

## 5. Update passbolt nginx configuration

As php-fpm has been upgraded from 7.4 to 8.2, nginx configuration has to be updated accordingly.

It can easily be done with sed :

```
sudo sed -i 's/php7.4-fpm/php8.2-fpm/g' /etc/nginx/sites-enabled/nginx-passbolt.conf
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

You can now safely restart the nginx web server and php-fpm:

```bash
sudo systemctl restart nginx
sudo systemctl restart php8.2-fpm
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
