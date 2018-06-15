---
title: "Install passbolt API version 1"
date: 2017-03-20 00:00:00 Z
description: How to install passbolt version 1 on your server.
category: hosting
sidebar: hosting
layout: default
slug: install-v1
archived: true
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Passbolt is reported to work on a large variety of operating system configurations. Therefore this help page is a generic guide that should work for most environments.

If you run into any issues with your particular configuration, [please check the forum](https://community.passbolt.com/c/installation-issues). Maybe someone else has had your issue. If not, make a post and the community will try to help you.

## Other community guides

If you are looking for more system specific step by step guides please check out the following resources:

* [Debian 8 "Jessy" with Apache, MariaDB and PHP 5 (by Passbolt)](https://medium.com/passbolt/passbolt-on-debian-8-71-from-scratch-4438dad18908)
* [CentOS 7 with Nginx, MariaDB and PHP7 (by Passbolt)](https://medium.com/passbolt/passbolt-on-centos-7-with-nginx-php7-fpm-mariadb-from-scratch-7b2a9b15f3a4)
* [CentOS 7 with Apache, MariaDB and PHP 7 (by Wobak)](https://wobak.github.io/Installing%20passbolt%20on%20CentOS%207.html)
* [FreeBSD 10.3, Apache, Mysql 5.7, PHP 5.6 (by Patpro)](https://www.patpro.net/blog/index.php/2016/09/22/3037-self-hosted-password-manager-installing-passbolt-on-freebsd/)
* [OpenBSD 6.1, Nginx, MariaDB, PHP 5.6/7.0 (by AuthBSD)](https://www.authbsd.com/blog/?p=60)

## Environment setup and baseline requirements

### Operating system

We recommend you install passbolt on stable Unix-like operating system distributions such as Debian, Centos or FreeBSD. We have not tested passbolt on Windows (please do let us know if you tried).

### Web server requirements

* Apache or Nginx web server with SSL enabled.
* Pretty urls: with mod_rewrite [for apache](http://book.cakephp.org/2.0/en/installation/url-rewriting.html#apache-and-mod-rewrite-and-htaccess), and a site-available configuration [for nginx](http://book.cakephp.org/2.0/en/installation/url-rewriting.html#pretty-urls-on-nginx).

### A word about SSL

By default passbolt is configured to force SSL connections, which means that whoever tries to access your passbolt instance without an https connection will automatically be redirected to https. For this reason, if https is not enabled on your host at the time of the installation, passbolt will not be able to work.

However, if you know what you are doing, and wish to disable https, you can change this setting by editing `/app/Config/app.php` and set the parameter `App.force_ssl` to false. Keep in mind that this setting will make your installation unsecure and should be used for development or testing only.

### PHP requirements

* PHP >= 5.4.
* Either one of these image manipulation libraries (to manipulate avatars):
    * [GD2](http://php.net/manual/en/book.image.php).
    * [Imagick](http://php.net/manual/en/book.imagick.php).
    * [Gmagick](http://php.net/manual/en/book.gmagick.php).
* [GnuPG](http://php.net/manual/en/gnupg.installation.php) for PHP: for key verification and authentication.
* PHP extensions (that may or may not come by default): PDO, intl, openssl, ctype, filter, hash, phar.

#### The following PHP modules are greatly recommended:

* [Memcached](http://php.net/manual/en/memcached.setup.php): to store sessions. If you are using memcached: json, session, pecl-memcached are also required as dependencies.

### Database requirements

{% include messages/warning.html
    content="Currently passbolt only works with Mysql due to the view we use to check permissions. If you want to help us make it work on postgresql, do get in touch!"
%}

* MySQL >= 5.0.

## Generate the GPG server key

The main [authentication method](<?php echo Router::url('/help/tech/auth'); ?>) of passbolt is based on GPG. For this reason, it is required that you generate a GPG server key, and add it to the configuration.

### Generate a new key
```bash
gpg --gen-key
```

Answer the few questions asked by GPG, and **do not enter a passphrase**. Due to limitations of PHP GnuPG, passbolt can not work with a key that has a passphrase.

When key generation is complete, make sure you note down the key fingerprint. It is a 40 char in length string, displayed at the end of the command output. For example:
```bash
pub   4096R/573EE67E 2015-10-26 [expires: 2019-10-26]
      Key fingerprint = 2FC8 9458 33C5 1946 E937  F9FE D47B 0811 573E E67E
uid   Passbolt Server Test Key <no-reply@passbolt.com>
```
### Export the newly created key

Export the public and private key
```bash
gpg --armor --export-secret-keys your_email@domain.com > /var/www/passbolt/app/Config/gpg/private.key
gpg --armor --export your_email@domain.com > /var/www/passbolt/app/Config/gpg/public.key
```
Store both these files in a secure location on the server. They should be accessible by the web server user. In this example, we are storing them in the Config directory of passbolt.

## Get the code

Get the passbolt code from the [github repository](https://github.com/passbolt/passbolt):
```bash
git clone https://github.com/passbolt/passbolt.git
```
## Set the file permissions

Make sure the `app/tmp` and `app/webroot/img/public` are writable by the webserver user (www-data or similar).
```bash
chmod +w -R app/tmp
chmod +w app/webroot/img/public
```
## Configure the php application

The configuration of your passbolt instance is a crucial step to make it work as per your needs and to ensure an optimal level of security. Pay a close attention to the steps described below.

### core.php (core settings)

The CakePHP core configuration file (located in `app/Config/core.php`) is the base configuration file. It contains the settings that determine the application behavior (debug mode, cache, sessions, etc..).

Copy the default core configuration file:
```bash
cp app/Config/core.php.default app/Config/core.php
```
However, you need to modify the cypherseed and salt. Passbolt do not actually use these, but it is part of the standard Cakephp installation to change these values.
```php
Configure::write('Security.salt', 'put your own salt here');
Configure::write('Security.cipherSeed', 'put your own cipher seed here');
```
Also for images that are sent in emails to work, we need to tell cakephp what is the base url. To fix this, uncomment and edit this line in `app/Config/core.php`:
```php
Configure::write('App.fullBaseUrl', 'http://{your domain without slash}');
```
The rest of the default version of core.php is good enough to be used as it is.

### database.php (database connection settings)

The database configuration file (located in `app/Config/database.php`) file contains the database connection settings.

Copy the default database configuration file :
```bash
cp app/Config/database.php.default app/Config/database.php
```

Then edit it. You will need to provide the name of your database, the username and password of the mysql user that passbolt can use to connect. For example:

```php
public $default = array(
    'datasource' => 'Database/Mysql',
    'persistent' => false,
    'host' => 'localhost',
    'login' => 'username',
    'password' => 'password',
    'database' => 'passbolt'
);
```
### app.php (application settings)

The passbolt application configuration (located in `app/Config/app.php`) contains the application settings. Copy the app.php.default configuration file to create one for your instance:
```bash
cp app/Config/app.php.default app/Config/app.php
```

You will need to specify the details of the GPG servery key, e.g. the location of the public and private key and the fingerprint. You also need to make sure that the webserver can access the gpg keyring. You can either add set it manually with `$GNUPGHOME` or in your config as follow:
```php
$config = [
    'GPG' => [
        'env' => [
            'setenv' => true,
            'home' => '/usr/share/httpd/.gnupg'
        ],
        'serverKey' => [
            'fingerprint' => '2FC8945833C51946E937F9FED47B0811573EE67D',
            'public' => APP . 'Config' . DS . 'gpg' . DS . 'public.key',
            'private' => APP . 'Config' . DS . 'gpg' . DS . 'private.key',

        ]
    ]
]
```
The default file is good to be used as it is. However, you might want to look at these interesting options :

* **App.ssl.force** (true or false, default: true): Defines if passbolt should force ssl connections.
* **App.registration.public** (true or false, default: true): Defines if users can self register, or if only the administrator can create new accounts.
* **App.meta.robots.index** (true or false, default: false): Defines if you want search engines to find and index your instance.
* **App.selenium.active** (true or false, default:false): Do not change this to true unless you want to run the [selenium tests](https://github.com/passbolt/passbolt_selenium). It is to be used in development environment only, and setting this option to true will compromise the security of your installation.

### email.php (email settings)

The `app/Config/email.php` configuration file defines your email settings to enable passbolt send emails to the world. Make sure you provide the correct settings. Without this, passbolt will not be able to send notifications email.
```php
public $default = array(
    'transport' => 'Smtp',
    'from' => array('passbolt@yourdomain.com' => 'Passbolt'),
    'host' => 'smtp.yourserver.com',
    'port' => 587,
    'timeout' => 30,
    'username' => 'your@email.com',
    'password' => 'password',
);
```
You only need to modify the default variable, and leave the other sections of this file alone.

## Run the install script

The configuration is all set! We can now install passbolt.

Passbolt can be installed via a command line installation script.
```bash
app/Console/cake install --no-admin
```
In this command, we also mention that we do not want a default administrator. We will create one explicitely at the next step.

**Note :** To avoid any permission issues, mostly with the keyring, it is recommended to execute the PHP cli with the webserver rights. For instance:
```bash
su -s /bin/bash -c "app/Console/cake install --no-admin" www-data
```
### Create the first admin account

An admin user will be able to manage the other users on passbolt. You will need at least one:
```bash
app/Console/cake passbolt register_user -u me@domain.com -f myFirtsname -l myLastname -r admin
```
After the admin user creation, the command line tool will give you a setup link which will also be sent to you by email (if your emails are properly configured). Follow the link given to setup your account.

## Enabling emails

Emails are placed in a queue that needs to be processed by a CakePhp Shell. You can add a cron call to the script so the emails will be sent every minute. Add the following line to you crontab:
```bash
 * * * * * /var/www/passbolt/app/Console/cake EmailQueue.sender > /var/log/passbolt.log
```
And you are done!

# Troubleshooting

The healthcheck is a tool that can help you identify what are the problems with your install. It is accessible from the command line:
```bash
./app/Console/cake passbolt healthcheck
```
When the application is on debug mode (or if you are logged in as an administrator), a simplified dashboard version is also accessible directly in the browser at the url : /healthcheck

{% include articles/figure.html
    url="/assets/img/screenshots/AD_healthcheck.jpg"
    legend="example /healthcheck screen"
%}

You will find below a list of common errors, and how to solve them.

### I get the error GPG Keyring is not available or not writable at install

It is possible that your `$GNUPGHOME` is not set or not available to either the php CLI or Apache users thus causing a segmentation fault.

* Check `app/Config/app.php`. If you don't have ssh access, it can be set at run time with `GPG.env.home` variable.
* Make sure the directory is accessible and writable for the PHP CLI and Apache users.

It is commonly solved by executing this command:
```bash
chown -R www-data:www-data /home/www-data/.gnupg
```
### I get an error saying the GPG Server key defined in the config is not found

If you are running passbolt on FreeBSD make sure the `$PATH` for the www user include `/usr/local/{s,}bin`. Otherwise Apache won't be able to find the gpg modules. Something like this should do:
```bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/local/sbin:/usr/local/bin
```
### I get the error that the GPG key fingerprint is not found in the keyring

It is possible that the keyring location specified by the app.php is not writable for the web application, or that you made a mistake in specifying $GNUPGHOME. You can check if the fingerprint exist in a given keyring for a given user as follow.
```bash
sudo su -s /bin/bash -c "gpg --list-keys --fingerprint --home /home/www-data/.gnupg" www-data | grep -i -B 2 'Passbolt Server'
pub   4096R/573EE67E 2015-10-26 [expires: 2019-10-26]
      Key fingerprint = 2FC8 9458 33C5 1946 E937  F9FE D47B 0811 573E E67E
uid   Passbolt Server Test Key <no-reply@passbolt.com>
```
### At the end of the setup I get an error saying "Invalid request method, should be PUT"

Make sure your webserver config is not rewriting the PUT method to POST. See. [Issue #52](https://github.com/passbolt/passbolt_api/issues/52).

### Passbolt emails are not being sent by GMail

If you have two step verification enabled on your google account you will need to create an App Password. See. [Issue #51](https://github.com/passbolt/passbolt_api/issues/51).

### When trying to login I'm stuck on "loading, please wait"

This can indicate that the fullBaseUrl is not set right in the app/Config/core.php, like the url is correct but not the SSL scheme (e.g. http instead of https). See. [Issue #47](https://github.com/passbolt/passbolt_api/issues/47).

### Last updated

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr warning"
    content="This article is about passbolt v1 and is kept for archival. Please install passbolt version 2 instead."
    link="/hosting/install"
    ask="Install passbolt version 2"
%}


{% include layout/row_end.html %}
