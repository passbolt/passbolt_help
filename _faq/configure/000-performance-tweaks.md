---
title: Some potential performance tweaks
slug: performance-tweaks
layout: faq
category: configure
permalink: /faq/configure/:slug
---

## Table of contents:

- [Table of contents:](#table-of-contents)
- [Introduction](#introduction)
- [Database](#database)
- [PHP FPM](#php-fpm)
- [Nginx](#nginx)

## Introduction
At Passbolt, we are constantly striving to enhance performance, introduce new functionality, and refine existing features. 

The default settings that come with Passbolt are suitable for the majority of our users. However, if you have a significant number of users or groups who have access to hundreds or thousands of secrets, the defaults may not meet your performance expectations. 

To address this, we have created this guide to help you optimize Passbolt's performance. 

If you prefer not to make these adjustments, please let us know which areas of Passbolt are slowing down for you, and we will consider incorporating improvements in future releases.

## Database
{% include messages/warning.html
    content="**Important:** This assumes you are running your database on the same host as your Passbolt installation"
%}

One database improvement that can be made is to skip the reverse DNS lookup in MySQL/MariaDB. To do this you will need to:

Ensure the passbolt user in the database is allowed to connect via `127.0.0.1` and not just `localhost`:
```
[mysql]> GRANT USAGE ON *.* TO `passboltadmin`@`127.0.0.1` IDENTIFIED BY PASSWORD `<insert password hash here>`;
[mysql]> GRANT ALL PRIVILEGES ON `passboltdb`.* TO `passboltadmin`@`127.0.0.1`;
[mysql]> FLUSH PRIVILEGES;
```

You can find the password hash by running:
```
[mysql]> use mysql;
[mysql]> select user, host, password from user where user = ‘passboltadmin’;
```

Both above samples assume user is named `passboltadmin` and the database is named `passboltdb`, actual values may be different depending on what was chosen during installation.

Edit your mysql configuration file, search for `[mysqld]` block and add:
```
# Skip reverse DNS lookup
skip-name-resolve
```

Then restart mysql:
```
systemctl restart mysql
```
You will then need to adjust your Passbolt configuration to point to `127.0.0.1` instead of `localhost` if it is set to `localhost`

## PHP FPM
There are two values which you can change to increase the resources that PHP is able to use. These are `memory_limit` and `pm.max_children`

You can adjust `memory_limit` by editing the `/etc/php/X.X/fpm/php.ini` file where X.X is your PHP version. 

You can adjust `pm.max_children` by editing the `/etc/php/X.X/fpm/pool.d/www.conf` file where X.X is your PHP version.

{% include messages/warning.html
content="Since you edited the php configuration, you will need to restart php-fpm to apply those changes. It's important to run **sudo systemctl restart phpX.X-fpm** where X.X is your PHP version"
%}


## Nginx
For Nginx our recommendation is less about making it more performant, but rather increasing a timeout so that your users don't experience as many errors if they are regularly running into time outs. You can do this by editing the value for `keepalive_timeout` in your Nginx config file.