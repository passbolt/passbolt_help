---
title: Install passbolt API from source
card_title: From source code
card_teaser: Guide to install passbolt CE from the source code.
card_position: 100
date: 2018-11-13 00:00:00 Z
description: How to install passbolt CE on your server from the source.
icon: fa-git
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: from-source
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction
This tutorial is distribution agnostic. It details the installation steps at a high level, without
taking into account the specifics related to each and every linux distribution.

{% include messages/warning.html
    content="**Please note:** This is not the recommended way to install passbolt. You will find guides to install passbolt on your distribution [here](/hosting/install). 
    You should only attempt this if you are advanced in terms of server configuration"
%}

## System requirements

{% include hosting/v4-sources-requirements.md %}

## Installation steps

### 1. Create a web server matching the system requirements.

Spin up a new fresh server with your favorite distribution, install a database server
and a webserver with a TLS certificate. If you are using apache as web server make sure you
have mod_rewrite module enabled.

Find out your web server user. Some commands need to be run as the same user running the web server. Generally on Debian
systems it will be `www-data` but on other distributions like Centos it could be for example `nginx` or `http`.
For the rest of this tutorial we will assume that the user named `www-data`.

{% include messages/warning.html
    content="We highly recommend that you install https on your server. You can get a free SSL certificate with the let's encrypt initiative."
    link="https://letsencrypt.org/"
    ask="let's encrypt!"
%}

### 2. Database configuration
#### Create an empty database

Connect to your mysql server and create new database. Make sure it is in the utf8mb4 char set to
support non latin characters and emojis. 👏

```shell
/var/www$ mysql -u[user] -p[password]
mysql> CREATE DATABASE passbolt CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### Create a non-root user with according privilege

The database user should not be root, create a non-root user that have privileges on the passbolt database that has been created.

```shell
mysql> CREATE USER 'your_user'@'localhost' IDENTIFIED BY 'your_password';
mysql> GRANT ALL PRIVILEGES ON passbolt.* TO 'your_user'@'localhost';
mysql> FLUSH PRIVILEGES;
mysql> exit;
```

### 3. Clone the repository

Cloning the code using git will allow you to keep the source under version control and facilitate
subsequent updates.

```shell
/var/www$ git clone https://github.com/passbolt/passbolt_api.git
/var/www$ mv passbolt_api passbolt
```

### 4. Generate an OpenPGP key

Passbolt API uses an OpenPGP key for the server in order to authenticate and sign the outgoing JSON requests.
For improved compatibility we recommend that you use the same GnuPG version for generating the keys and for the
php module.

**WARNING:** Some of the following commands such as the GnuPG parts need to be run as www-data. In order to do that, we recommend using

```shell
$ sudo su -s /bin/bash -c "run the command here" www-data
```

{% include hosting/install/warning-gpg-key-generation.html %}

After creating the key make sure you note down the fingerprint, it will be requested later in the install process.
You can get the server key fingerprint as follow:

```shell
$ gpg --list-keys --fingerprint | grep -i -B 2 'email@domain.tld'
```

Copy the public and private keys to the passbolt config location:

```shell
$ gpg --armor --export-secret-keys email@domain.tld > /var/www/passbolt/config/gpg/serverkey_private.asc
$ gpg --armor --export email@domain.tld > /var/www/passbolt/config/gpg/serverkey.asc
```

### 5. Initialize the gpg keyring

You no longer need to be connected as www-data from now. In order for passbolt authentication to work your server key needs to be in the keyring used by the web server.

```shell
$ sudo su -s /bin/bash -c "gpg --list-keys" www-data
pub   4096R/573EE67E 2015-10-26 [expires: 2019-10-26]
      Key fingerprint = 2FC8 9458 33C5 1946 E937  F9FE D47B 0811 573E E67E
uid   Passbolt Server Test Key <no-reply@passbolt.com>
```

### 6. Install the dependencies

The project dependencies such as the plugin to manage the images, emails, etc. are not included anymore
in the code on the official repository. Fret not, composer will manage this for us.

```shell
/var/www/passbolt$ composer install --no-dev
```

Depending on your setup it is possible that your composer command is named `composer` and not `composer.phar`.

If for some reason the command above fails because you don't have composer installed,
you can check the [composer installation instructions](https://getcomposer.org/download/).

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

**WARNING:** The OpenPGP key fingerprint has to be written with no spaces and the application full base url should match the ssl configuration.

You can also set your configuration using environment variables.
Check `config/default.php` to get the names of the environment variables.

### 8. Run the install script

Make sure you run the installation script as the web server user:

```shell
$ sudo su -s /bin/bash -c "./bin/cake passbolt install" www-data
```

Optionally you can also run the health check to see if everything is fine.

```shell
$ sudo su -s /bin/bash -c "./bin/cake passbolt healthcheck" www-data
```

### 9. Configure Nginx

#### Configure Nginx for serving HTTPS

Depending on your needs there are two different options to setup nginx and SSL :

- [Auto (Using Let's Encrypt)](/configure/https/ce/debian/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/ce/debian/manual.html)

Be sure to write down the full path to your cert/key combo, it will be needed later in the Nginx configuration process.

Please, notice that for security matters we highly recommend to setup SSL to serve passbolt.

#### Configure Nginx to serve passbolt

For Nginx to serve passbolt, you will need to set up a server block file :

```shell
$ nano /etc/nginx/sites-enabled/passbolt.conf
```

You can use this default configuration sample (do not forget to replace PLACEHOLDERS with your values):
- **SERVER_NAME** with your localhost/virtualhost address 
- **CERTIFICATE_PATH** with the path where cert.pem is located
- **KEY_PATH** with the path where key.pem is located
- **PHP_VERSION** with the PHP version you are using 

```shell
server {
  listen [::]:443 ssl http2;
  listen 443 ssl http2;

  server_name SERVER_NAME;

  client_body_buffer_size     100K;
  client_header_buffer_size   1k;
  client_max_body_size        5M;
  client_body_timeout   10;
  client_header_timeout 10;
  keepalive_timeout     5 5;
  send_timeout          10;

  ssl_certificate     CERTIFICATE_PATH;
  ssl_certificate_key KEY_PATH;
  ssl_session_timeout 1d;
  ssl_session_cache shared:MozSSL:10m;  # about 40000 sessions
  ssl_session_tickets off;
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_prefer_server_ciphers off;
  root /var/www/passbolt/webroot;
  index index.php;
  location / {
    try_files $uri $uri/ /index.php?$args;
  }
  location ~ \.php$ {
    try_files                $uri =404;
    include                  fastcgi_params;
    fastcgi_pass             unix:/run/php/PHP_VERSION-fpm.sock;
    fastcgi_index            index.php;
    fastcgi_intercept_errors on;
    fastcgi_split_path_info  ^(.+\.php)(.+)$;
    fastcgi_param            SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_param            SERVER_NAME $http_host;
    fastcgi_param PHP_VALUE  "upload_max_filesize=5M \n post_max_size=5M";
  }
}
```

Then, reload the Nginx process so that it takes your new configuration into account :

```
$ sudo systemctl reload nginx
```


### 10. Setup the emails

**WARNING:** If you are running Passbolt 3.8.0 or higher version, you are able to configure your email server through the UI, any changes made will override the *config/passbolt.php*

#### You are running Passbolt CE < 3.8.0 ?
For passbolt to be able to send emails, you must first configure properly the “EmailTransport” section in the
`config/passbolt.php` file to match your provider smtp details.

Emails are placed in a queue that needs to be processed by the following shell.
```bash
$ ./bin/cake EmailQueue.sender
```

In order to have your emails sent automatically, you can add a cron call to the script so the emails
will be sent every minute. Run the following command to edit the crontab for the www-data user:
```bash
$ crontab -u www-data -e
```

You can add a cron call to the script so the emails will be sent every minute.
Add the following line to you crontab:
```bash
 * * * * * /var/www/passbolt/bin/cron >> /var/log/passbolt.log
```

If the log file does not yet exist, you can create it with the following command:
```bash
$ touch /var/log/passbolt.log && chown www-data:www-data /var/log/passbolt.log
```

And you are done!


### Troubleshooting

Here are some frequently asked questions related to passbolt installation:
{% include faq/list-by-tag.html tag='troubleshoot' %}

Feel free to ask for help on the [community forum](https://community.passbolt.com/c/installation-issues).

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}


{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include aside/ce-install-pro-cta.html %}

{% include layout/row_end.html %}
