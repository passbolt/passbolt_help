---
title: Install passbolt API from source
card_title: Do it yourself from source code
card_teaser: Complete step by step guide to install passbolt CE from the source code
card_position: 9
date: 2018-11-13 00:00:00 Z
description: How to install passbolt CE on your server from the source.
icon: fa-server
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
    content="**Please note:** This is not the recommended way to install passbolt. You will find guides to install passbolt on your distribution [here](/hosting/install)."
%}

## System requirements

{% include hosting/v2-requirements.md %}

## Installation steps

### 1. Create a web server matching the system requirements.

Spin up a new fresh server with your favorite distribution, install a database server
and a webserver with a TLS certificate. If you are using apache as web server make sure you 
have mod_rewrite module enabled.

{% include messages/warning.html
    content="We highly recommend that you install https on your server. You can get a free SSL certificate with the let's encrypt initiative."
    link="https://letsencrypt.org/"
    ask="let's encrypt!"
%}

### 2. Create an empty database

Connect to your mysql server and create new database. Make sure it is in the utf8mb4 char set to
support non latin characters and emojis. 👏

```shell
/var/www$ mysql -u[user] -p[password]
mysql> CREATE DATABASE passbolt CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
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

{% include hosting/install/warning-gpg-key-generation.html %}

```shell
$ gpg --gen-key
```

After creating the key make sure you note down the fingerprint, it will be requested later in the install process.
You can get the server key fingerprint as follow:

```shell
$ gpg --list-keys --fingerprint | grep -i -B 2 'SERVER_KEY@EMAIL.TEST'
```

Copy the public and private keys to the passbolt config location:

```shell
$ gpg --armor --export-secret-keys SERVER_KEY@EMAIL.TEST > /var/www/passbolt/config/gpg/serverkey_private.asc
$ gpg --armor --export SERVER_KEY@EMAIL.TEST > /var/www/passbolt/config/gpg/serverkey.asc
```

### 5. Initialize the gpg keyring

In order for passbolt authentication to work your server key needs to be in the keyring used by the web server.
It is likely that there is none, so you can create one by interacting with gpg with the web server user

The webserver name depends on your distribution and web server technology of choice, for example Apache user
is called `www-data` on Debian:
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

### 8. Run the install script

Make sure you run the installation script as the web server user:

```shell
$ sudo su -s /bin/bash -c "./bin/cake passbolt install" www-data
```

Optionally you can also run the health check to see if everything is fine.

```shell
$ sudo su -s /bin/bash -c "./bin/cake passbolt healthcheck" www-data
```

### 9. Setup the emails

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

Add the following line to the crontab:
```bash
You can add a cron call to the script so the emails will be sent every minute. 
Add the following line to you crontab:
```bash
 * * * * * /var/www/passbolt/bin/cake EmailQueue.sender >> /var/log/passbolt.log
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
