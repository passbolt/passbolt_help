---
title: Update passbolt server component (v2)
date: 2020-06-25 00:00:00 Z
description: How to update passbolt v2 on your server.
category: hosting
sidebar: hosting
layout: default
slug: update
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

# Pre-requisites

## Find out where is your passbolt directory

All the commands hereafter should be done from inside your passbolt directory:
```bash
$ cd /var/www/passbolt
```

By default passbolt should be installed under `/var/www/passbolt` but it could be different if you
installed from source manually. We will assume for the rest of this tutorial that it is located 
in `/var/www/passbolt`.

## Find out the name of your webserver user

Some commands need to be run as the same user running the web server. Generally on Debian systems it will be
`www-data` but on other distributions like Centos it could be for example `nginx` or `http`.
For the rest of this tutorial we will assume that the user named `www-data`.

Generally it is not possible to login as this user, so in order to run the command as this user,
you can execute something like this:

```
sudo su -s /bin/bash -c "./bin/cake passbolt healthcheck" www-data
```

This command for example, will run the healthcheck command as `www-data` data user.
It is a good idea to start with running a healthcheck prior to updating, to make sure everything is in order.

## Make sure the permissions are right for your current user

{% include messages/warning.html
    content="Do not run the commands as root when updating passbolt. It can render your installation unusable."
%}

Running commands as root can make your installation unusable until the permissions are repaired.
We recommend you use another user for this purpose. The `whoami` command will let you know which user you are logged
in as. In our case bellow, it is the user `passbolt`.
```
$ whoami
passbolt
```

You need to make sure that this user have access to the passbolt directory. 
The easiest way to do this would be to add such user to the `www-data` and `sudo` groups, 
so for example for a `passbolt` user, you could execute as root:
```
$ su -
$ usermod -a -G www-data passbolt
$ usermod -a -G sudo passbolt
$ exit
```

You can check if the user is included in the group (you may need to logout / login again for the permissions to be
applied):
```
$ groups passbolt
passbolt : passbolt www-data sudo
```

Make sure the passbolt directory is owned by the root user and accessible and writable to the www-data group.
You can set the permissions as follow:
```
$ sudo chown -R root:www-data /var/www/passbolt
$ sudo chmod 770 -R /var/www/passbolt
$ sudo ls -la /var/www/passbolt
drwxrwx--- 2 root www-data  .
drwx------ 6 root root      ..
```

## Check if git and composer are present on your system

By default you should have both composer and git installed:
```
$ which git
/usr/bin/git
```

You should also already have composer installed.
```
$ which composer.phar
/usr/bin/composer.phar
```

Depending on your setup it is possible that your composer command is named `composer` and not `composer.phar`. 

If for some reason the command above fails because you don't have composer installed, 
you can check the [composer installation instructions](https://getcomposer.org/download/).

# Updating passbolt
## 0. Take down your site

It is generally a good idea to stop running the site prior to the upgrade. This is to avoid having side effects
such as active users corrupting the data in the middle of an upgrade. For example if you are using `nginx` as a 
webserver:
```
sudo systemctl stop nginx
```

If you feel a bit more fancy, you can change your web server configuration to point to an "under maintenance" page.
It is a good practice to announce such maintenance window to your users in advance, so that they can also
plan for the update, for example by downloading some key passwords they may need.

## 1. Get the latest code version

You can also pull the latest version directly from master:
```bash
$ git pull origin master
```

You can also pull a specific version:
```bash
$ git fetch
$ git checkout tags/v2.3.0
```

## 2. update the dependencies

Some libraries are not packaged with the software but need to be updated using composer, based on 
what is recommended in the composer.lock. This file is provided by passbolt.

```bash
$ composer.phar install --no-dev -n -o
```

## 3. Run the migration script

You can run the database migration scripts as follow:
```bash
$ sudo su -s /bin/bash -c "./bin/cake passbolt migrate --backup" www-data
```

As you can see with the command above you can optional ask the application to create a database backup.
This is usefull in case you run into any issues with the new version and need to revert to an old but working one.

This backup will be placed in `./tmp/cache/database/backup/backup_timestamp.sql`.

## 4. Clear the cache

Finally make sure you clear the application cache, to make sure any changes in the database structure are
reflected in model cache files:
```bash
$ ./bin/cake cache clear_all
```

## 5. Restrict permissions

Of course, you can restrict the final permissions to add more security. 

For example you can restrict for the `www-data` group to only read and execute scripts (e.g. so that the application
itself can not modify any file). You must however make sure the `tmp` and `avatar` directories remains writable, as
these are needed by the application:
```
$ sudo chmod 750 -R /var/www/passbolt
$ sudo chmod 770 -R /var/www/passbolt/tmp
$ sudo chmod 770 -R /var/www/passbolt/webroot/img/public/Avatar
```

## 6. Take your site back up

Almost done:
```
sudo systemctl start nginx
```

{% include hosting/update/in-case-of-issues.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr"
    content="Are you still using passbolt v1? Check out the previous version of this article."
    link="/hosting/update-v1"
    ask="See previous version"
%}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when updating passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}
{% include aside/message.html %}
{% include layout/row_end.html %}