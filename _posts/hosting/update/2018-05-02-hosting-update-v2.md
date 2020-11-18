---
title: Update passbolt server component (v2)
date: 2020-06-25 00:00:00 Z
description: How to update passbolt v2 on your server.
card_teaser: Update passbolt instances installed with install scripts
card_title: Update passbolt v2 install scripts
categories: [hosting, update]
icon: fa-server
sidebar: hosting
layout: default
slug: install_scripts
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

```bash
$ sudo -H -u www-data bash -c "./bin/cake passbolt healthcheck"
```

This command for example, will run the healthcheck command as `www-data` data user.
It is a good idea to start with running a healthcheck prior to updating, to make sure everything is in order.

## Make sure the permissions are right for your current user

{% include messages/warning.html
    content="Do not run the commands as root when updating passbolt. It can render your installation unusable."
%}

Running commands as root can make your installation unusable until the permissions are repaired.
We recommend you use another user for this purpose. The `whoami` command will let you know which user you are logged
in as. In our case below, it is the user `passbolt`.
```bash
$ whoami
passbolt
```

You need to make sure that this user have access to the passbolt directory.
The easiest way to do this would be to add such user to the `www-data` and `sudo` groups,
so for example for a `passbolt` user, you could execute as root:

```bash
$ sudo usermod -a -G www-data passbolt
$ sudo usermod -a -G sudo passbolt
```

You can check if the user is included in the group (you may need to logout / login again for the permissions to be
applied):
```bash
$ groups passbolt
passbolt : passbolt www-data sudo
```

Make sure the passbolt directory is owned by the passbolt user and accessible to the www-data group.
You can set the permissions as follow:

```bash
$ sudo chown -R passbolt:www-data .
$ sudo chmod -R o-rwx .
$ sudo find . -type d -print0 | xargs -0 sudo chmod g-w
$ sudo find . -type f -print0 | xargs -0 sudo chmod g-wx
$ sudo chmod g+x ./bin/cake
$ sudo find ./tmp -type d -print0 | xargs -0 sudo chmod 770
$ sudo find ./tmp -type f -print0 | xargs -0 sudo chmod 660
$ sudo find ./logs -type d -print0 | xargs -0 sudo chmod 770
$ sudo find ./logs -type f -print0 | xargs -0 sudo chmod 660
$ sudo find ./webroot/img/public -type d -print0 | xargs -0 sudo chmod 770
$ sudo find ./webroot/img/public -type f -print0 | xargs -0 sudo chmod 660
```

Check that the permissions are set as expected.
```bash
$ ls -la .
drwxr-x--- 2 passbolt www-data  .
drwx------ 6 root root          ..
drwxr-x--- 6 passbolt www-data  config
```

Make sure the passbolt directory doesn't contain any changes. If you have altered the passbolt code, stash your changes
before executing the following command.
```bash
$ git checkout HEAD .
```

## Check if git and composer are present on your system

By default you should have both composer and git installed:
```bash
$ which git
/usr/bin/git
```

You should also already have composer installed.
```bash
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
```bash
$ sudo systemctl stop nginx
```

If you feel a bit more fancy, you can change your web server configuration to point to an "under maintenance" page.
It is a good practice to announce such maintenance window to your users in advance, so that they can also
plan for the update, for example by downloading some key passwords they may need.

## 1. Get the latest code version

You can also pull the latest version directly from master:
```bash
$ git pull origin master
```

To pull a specific version you can do:
```bash
$ git fetch origin tags/v2.13.0
$ git checkout tags/v2.13.0
```

On installations based on install scripts or in the VM appliance you are in a shallow clone state so to change
the branch you will need to:

```bash
$ git remote set-branches origin "*"
$ git fetch origin tags/v2.13.0
$ git checkout tags/v2.13.0
```

## 2. update the dependencies

Some libraries are not packaged with the software but need to be updated using composer, based on
what is recommended in the composer.lock. This file is provided by passbolt.

```bash
$ php -d allow_url_fopen=on /usr/bin/composer.phar install --no-dev -n -o
```

## 3. Run the migration script

You can run the database migration scripts as follow:
```bash
$ sudo -H -u www-data bash -c "./bin/cake passbolt migrate --backup"
```

As you can see with the command above you can optional ask the application to create a database backup.
This is useful in case you run into any issues with the new version and need to revert to an old but working one.

This backup will be placed in `./tmp/cache/database/backup/backup_timestamp.sql`.

## 4. Clear the cache

Finally make sure you clear the application cache, to make sure any changes in the database structure are
reflected in model cache files:
```bash
$ sudo -H -u www-data bash -c "./bin/cake cache clear_all"
```

## 5. Take your site back up

Almost done:
```bash
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
