---
title: Update passbolt on Centos 7 (installation script)
date: 2021-10-19 00:00:00 Z
description: How to update passbolt on your server.
categories: [hosting, update]
slug: install-scripts
permalink: /:categories/:slug.html
archived: true
---

{% include messages/warning.html
    content="**Important:** This page has been depreciated, CentOS is not supported anymore."
%}
{% include hosting/install/packages/debian/install-debian-package.md %}


{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
    content="**Important:** This is no longer a recommended installation method. You may want to consider [migrating](/hosting/upgrade/pro/migrate-to-centos) to the package."
%}

## Pre-requisites

For this tutorial, you will need:
- A minimal CentOS 7 server.
- Passbolt installed with the CentOS install script.

## Updating passbolt
### 1. Take down your site

It is generally a good idea to stop running the site prior to the upgrade. This is to avoid having side effects
such as active users corrupting the data in the middle of an upgrade. For example if you are using `nginx` as a
webserver:
```bash
$ sudo systemctl stop nginx
```

If you feel a bit more fancy, you can change your web server configuration to point to an "under maintenance" page.
It is a good practice to announce such maintenance window to your users in advance, so that they can also
plan for the update, for example by downloading some key passwords they may need.

### 2. Backup your instance

First things first, as this is a sensitive operation a backup of the instance must be performed to prevent any data loss.
You can follow our [backup process](/hosting/backup).

### 3. Get the latest code version

Pull the latest version directly from master:
```bash
$ cd /var/www/passbolt
$ sudo -H -u nginx bash -c "git pull origin master"
```

### 4. Update the dependencies

Some libraries are not packaged with the software but need to be updated using composer, based on
what is recommended in the composer.lock. This file is provided by passbolt.

Passbolt requires composer v2, check the version you have already installed:

```bash
$ sudo -H -u nginx bash -c "composer.phar --version"
> Composer version 2.0.9 2021-01-27 16:09:27
```

To get the latest version of composer, you can check the
[composer installation instructions](https://getcomposer.org/download/).

Update the dependencies:

```bash
$ sudo -H -u nginx bash -c "php -d allow_url_fopen=on composer.phar install --no-dev -n -o"
```

### 5. Migrate your data

A new version can come with a data structure change. You can run the migration scripts as follow:
```bash
$ sudo -H -u nginx bash -c "./bin/cake passbolt migrate"
```

### 6. Clear the cache

Finally make sure you clear the application cache, to make sure any changes in the database structure are
reflected in model cache files:
```bash
$ sudo -H -u nginx bash -c "./bin/cake cache clear_all"
```

### 7. Take your site back up

Almost done:
```bash
$ sudo systemctl start nginx
```

{% include hosting/update/in-case-of-issues.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr"
    content="Have you installed passbolt from source instead?"
    link="/hosting/update/source"
    ask="Update passbolt on from source installation"
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
