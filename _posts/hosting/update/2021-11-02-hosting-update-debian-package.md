---
title: Update passbolt on Debian
date: 2021-11-02 00:00:00 Z
description: How to update your server on Debian.
card_teaser: Guide for instances installed using Debian package.
card_title: Update for Debian
card_position: 1
icon: fa-server
categories: [hosting, update]
sidebar: hosting
layout: default
slug: debian_package
popular: true
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Prerequisites

For this tutorial, you will need:
- A minimal Debian server.
- Passbolt Debian package installed.

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

This commands will trigger an upgrade on your whole debian system:

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
    content="Your installation is not based on a debian package?"
    link="/hosting/upgrade/ce/migrate-to-debian.html"
    ask="Migrate passbolt to debian package"
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
