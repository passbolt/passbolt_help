---
title: Update passbolt on Ubuntu 20.04
date: 2021-02-12 00:00:00 Z
description: How to update your server on Ubuntu.
card_teaser: Guide for instances installed using Ubuntu package.
card_title: Update for Ubuntu 20.04
card_position: 2
icon: fa-server
categories: [hosting, update]
sidebar: hosting
layout: default
slug: ubuntu_package
popular: true
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Prerequisites

For this tutorial, you will need:
- A minimal Ubuntu 20.04 server.
- Passbolt Ubuntu package installed.

## Update passbolt
### 1. Take down your site

It is generally a good idea to stop running the site prior to the upgrade. This is to avoid having side effects
such as active users corrupting the data in the middle of an upgrade.

```bash
$ sudo systemctl stop nginx
```

### 2. Backup your database

It is recommended to always perform a backup of your passbolt installation. Please check the [backup](/hosting/backup) article

### 3. Upgrade your system

This commands will trigger an upgrade on your whole ubuntu system:

```bash
$ sudo apt-get update
$ sudo apt-get upgrade
```

### 4. Clear the cache

Finally make sure you clear the application cache, to make sure any changes in the database structure are
reflected in model cache files:

```bash
$ sudo -H -u www-data bash -c "/usr/share/php/passbolt/bin/cake cache clear_all"
```

### 5. Take your site back up

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
content="Your installation is not based on a Ubuntu package?"
link="/hosting/upgrade/ce/migrate-to-ubuntu.html"
ask="Migrate passbolt to Ubuntu package"
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
