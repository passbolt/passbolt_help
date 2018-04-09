---
title: Upgrade to passbolt API version 2
card_title: Upgrade to passbolt v2
card_teaser: Upgrade Passbolt CE from v1 to v2
icon: fa-server
date: 2018-03-14 00:00:00 Z
description: How to upgrade passbolt to version 2
categories: [hosting,upgrade,ce]
sidebar: hosting
layout: default
slug: upgrade
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## System requirements

{% include hosting/v2-requirements.md %}

## Upgrade with a new server

Considering that the system requirements haved it may make sense for you to upgrade on a fresh server.
If that is what you want to do, you can perform a [backup](/hosting/backup-v1) of your database,
gpg key and avatar first. Then copy the v1 files to your new server, and proceed like you were upgrading on the 
same server, with the process described bellow.

## Upgrade from the same server

In the following examples we assume you are running passbolt v1 using apache in the `/var/www/passbolt`
directory. You will need to replace these values with your local environment settings.

### 1. Make sure you have the latest v1.x version

If you do not have the latest version, please follow the regular [v1 udpate process](/hosting/update).
We’ll also assume you have a web server that match the system requirements.

```shell
/var/www/passbolt$ cat app/Config/version.php  | grep number
'number' => '1.6.9'
```

### 2. Take your site offline

There are multiple ways of doing that, the simplest is sending a notice by email to your users
and stopping your webserver. The better approach would be to create a temporary html file and 
redirect your passbolt user there, for example:

```shell
/var/www$ mkdir wip
/var/www$ touch wip/index.html
/var/www$ echo '<html><head><title>Maintenance in progress</title></head><body><h1>Maintenance in progress</h1></body></html>' >> wip/index.html
/var/www$ nano /etc/apache2/sites-enabled/001-default.conf

<IfModule mod_ssl.c>
        <VirtualHost _default_:443>
                ServerAdmin webmaster@localhost
                ServerName www.passbolt.test
                DocumentRoot /var/www/wip

                ErrorLog ${APACHE_LOG_DIR}/error.log
                CustomLog ${APACHE_LOG_DIR}/access.log combined

                SSLEngine on
                SSLCertificateFile /etc/apache2/ssl/passbolt.crt
                SSLCertificateKeyFile /etc/apache2/ssl/passbolt.key

        <Directory /var/www/wip>
            Options FollowSymLinks
            AllowOverride All
            Require all granted
        </Directory>

        </VirtualHost>
</IfModule>
/var/www$ service apache2 restart
```

### 3. Make a database backup

Make sure you have a database backup so that you can revert if something goes wrong.

```shell
/var/www$ mysqldump -u[user] -p[pass] db > /path/to/passbolt-backup.sql
```

### 4. Create a new directory and copy the v2.

{% capture warning_content %}Note: We will use the development branch for deployment for release candidates. 
When v2 is released the last line can be omitted.
{% endcapture %}
{% include warning.html content=warning_content %}

```shell
/var/www$ mv passbolt passbolt_v1
/var/www$ git clone git@github.com:passbolt/passbolt_api.git
/var/www$ mv passbolt_api passbolt_v2 && cd passbolt_v2
/var/www/passbolt_v2$ git fetch && git checkout develop
```

### 5. Install the dependencies

The project dependencies such as the plugin to manage the images, emails, etc. are not included anymore
in the code on the official repository. Fret not, composer will manage this for us.

```shell
/var/www/passbolt_v2$ composer install
```

### 6. Copy your v1 server gpg key and avatars

The `config` and `webroot` directory has been moved to the root directory. The `ProfileAvatar` directory have been
renamed to `Avatar`. You will need to copy your old files in these new respective places, for example:

```shell
/var/www/passbolt_v2$ cp ../passbolt_v1/app/Config/gpg/* config/gpg/.
/var/www/passbolt_v2$ cp -R ../passbolt_v1/app/webroot/img/public/* webroot/img/public/.
/var/www/passbolt_v2$ mv webroot/img/public/images/ProfileAvatar webroot/img/public/images/Avatar
```

### 7. Create a passbolt configuration file

The name and values in the main configuration file have changed. Everything is now located in one file called
`config/passbolt.php`. Do not copy your v1 configuration files, instead you need to create a new one:

```shell
$ cp config/passbolt.default.php config/passbolt.php
$ nano config/passbolt.php
```

Even if the format has changed the information needed are pretty much the same than v1.
You will need to set at least the following:
- Application full base url
- Database configuration
- Email settings
- Server OpenPGP key fingerprint.

You can also set your configuration using environment variables.
Check `config/default.php` to get the names of the environment variables.

### 8. Run the migration script

The structure of the database changed in version 2. Make sure you run the following script to migrate your 
data to the new format.

```shell
/var/www/passbolt_v2$ ./bin/cake passbolt migrate
```

Optionally you can also run the health check to see if everything is fine.

```shell
$ sudo su -s /bin/bash -c "./bin/cake passbolt healthcheck" www-data
```

### 9. Get your service back online

Edit your apache or nginx to point to the new directory and bring your service back online.
```shell
$ nano /etc/apache2/sites-enabled/001-default.conf
$ service apache2 restart
```

{% include updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when installing passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}

{% include aside/docker.html %}

{% include aside/message.html
    class="tldr"
    content="Something is not accurate in this documentation? You can contribute by opening an issue or making pull requests!"
    link="https://www.github.com/passbolt/passbolt_help"
    ask="View on github"
%}

{% include aside/message.html
    class="tldr notice"
    content="We highly recommend that you install https on your server. You can get a free SSL certificate with the let's encrypt initiative."
    link="https://letsencrypt.org/"
    ask="let's encrypt!"
%}

{% include layout/row_end.html %}
