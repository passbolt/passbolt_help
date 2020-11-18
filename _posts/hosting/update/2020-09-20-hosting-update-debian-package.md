---
title: Update passbolt on debian systems
date: 2020-09-20 00:00:00 Z
description: How to update passbolt v2 on your server on debian systems.
card_teaser: Update on debian systems using debian package
card_title: Debian update guide
icon: fa-server
categories: [hosting, update]
sidebar: hosting
layout: default
slug: debian_package
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

# Updating passbolt
## 0. Take down your site

It is generally a good idea to stop running the site prior to the upgrade. This is to avoid having side effects
such as active users corrupting the data in the middle of an upgrade.

```bash
$ sudo systemctl stop nginx
```
## 1. Update apt lists

```bash
$ sudo apt-get update
```

## 2. Backup your database

It is recommended to always perform a backup of your passbolt installation. Please check the [backup](/hosting/backup) article


## 3. Upgrade your system

This command will trigger an upgrade on your whole debian system:

```bash
$ sudo apt-get upgrade
```

## 4. Clear the cache

Finally make sure you clear the application cache, to make sure any changes in the database structure are
reflected in model cache files:

```bash
$ sudo -H -u www-data bash -c "/usr/share/php/passbolt/bin/cake cache clear_all"
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
    content="Your installation is not based on a debian package?"
    link="/hosting/upgrade/ce/migrate-to-debian.html"
    ask="Migrate passbolt to debian package"
    link="/hosting/upgrade"
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
