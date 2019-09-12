---
title: Upgrade Passbolt CE from v1 to v2
card_title: Upgrade from source
card_teaser: Upgrade from a version 1 source installation
icon: fa-server
date: 2018-03-14 00:00:00 Z
description: How to upgrade passbolt to version 2
categories: [hosting,upgrade,ce]
sidebar: hosting
layout: default
slug: upgrade-ce
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

This tutorial covers the case where you want to upgrade your current instance of passbolt CE v1.x into passbolt CE v2.x.

{% include messages/warning.html
    content="**Important:** Please take a full [backup](/hosting/backup-v1) of your passbolt before proceeding with the upgrade. Backup should include passbolt files as well as the database."
%}

## System requirements

{% include hosting/v2-requirements.md %}

## Upgrade with a new server

Considering that the system requirements haved it may make sense for you to upgrade on a fresh server.
If that is what you want to do, copy the v1 [backup](/hosting/backup-v1) files to your new server, import your passbolt
database into your new server and proceed like you were upgrading on the same server, with the process described below.

## Upgrade from the same server

In the following examples we assume you are running passbolt v1 using apache in the `/var/www/passbolt`
directory. You will need to replace these values with your local environment settings.

### 1. Make sure you have the latest v1.x version
{% include hosting/upgrade/ce/v1/check-latest-version-installed.md %}

### 2. Take your site offline
{% include hosting/upgrade/take-your-site-offline.md %}

### 3. Download the v2
{% include hosting/upgrade/pro/v2/download-and-replace-passbolt.md
    repo_url="https://github.com/passbolt/passbolt_api.git"
%}

### 4. Install the dependencies
{% include hosting/install/install-composer-dependencies.md %}

### 5. Copy the avatar folder
{% include hosting/upgrade/ce/v2/copy-avatar-from-v1.md %}

### 6. Copy the server gpg key
{% include hosting/upgrade/ce/v2/copy-server-gpg-from-v1.md %}

### 7. Create a passbolt configuration file

The name and values in the main configuration file have changed. Everything is now located in one file called
`config/passbolt.php`. Do not copy your v1 configuration files, instead you need to create a new one:

```shell
/var/www/passbolt$ cp config/passbolt.default.php config/passbolt.php
/var/www/passbolt$ nano config/passbolt.php
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
/var/www/passbolt$ ./bin/cake passbolt migrate
```

Optionally you can also run the health check to see if everything is fine.

```shell
$ sudo su -s /bin/bash -c "./bin/cake passbolt healthcheck" www-data
```

### 9. Modify the cron job to send emails

Modify the cronjob entry you had added for passbolt CE v1 :
```
* * * * * /var/www/passbolt/app/Console/cake EmailQueue.sender > /var/log/passbolt.log
```

into this one:
```
* * * * * /var/www/passbolt/bin/cake EmailQueue.sender > /var/log/passbolt.log
```

### 10. Get your service back online

Edit your apache or nginx to point to the new directory and bring your service back online.
```shell
$ nano /etc/apache2/sites-enabled/001-default.conf
$ service apache2 restart
```

{% include date/updated.html %}

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
