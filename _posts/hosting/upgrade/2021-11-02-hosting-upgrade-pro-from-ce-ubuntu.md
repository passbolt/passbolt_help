---
title: Upgrade Passbolt from CE to Pro on Ubuntu
card_title: From CE on Ubuntu
card_teaser: Upgrade Passbolt from CE to Pro on Ubuntu
card_position: 5
date: 2021-02-10 00:00:00 Z
description: Upgrade Passbolt from CE to Pro on Ubuntu
icon: fa-ubuntu
categories: [hosting,upgrade,pro]
sidebar: hosting
layout: default
slug: upgrade-pro-from-ce-ubuntu
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'ubuntu' %}
{% assign distributionVersion = '22.04' %}
{% assign distributionVersionName = 'focal' %}
{% assign distributionSlug = 'ubuntu' %}
{% assign distributionLabel = 'Ubuntu' %}
{% assign migrate = 'yes' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Pre-requisites

For this tutorial, you will need:
- A minimal Ubuntu 22.04 server.
- Passbolt CE Ubuntu package installed.

## Upgrading passbolt

### 1. Take down your site

It is generally a good idea to stop running the site prior to the upgrade. This is to avoid having side effects
such as active users corrupting the data in the middle of an upgrade.

```bash
$ sudo systemctl stop nginx
```

### 2. Backup passbolt

First things first, as this is a sensitive operation a backup of the instance must be performed to prevent any data loss.
You can follow our [backup process](/hosting/backup/debian).

### 3. Upload your subscription key

You should copy your subscription key to `/etc/passbolt/subscription_key.txt` and ensure the permissions are correct.

```bash
sudo chown root:www-data /etc/passbolt/subscription_key.txt
sudo chmod 640 /etc/passbolt/subscription_key.txt
```

### 4. Uninstall passbolt CE

Passbolt CE package should be removed prior to installing passbolt Pro.

```bash
sudo apt-get remove passbolt-ce-server
```

### 5. Update passbolt package repository

{% assign upgrade_from_ce_to_pro = 'yes' %}

{% include hosting/install/packages/debian/install-server-components.md %}
### 6. Install passbolt Pro

Now you can install the passbolt Pro package.

```bash
sudo apt-get install passbolt-pro-server
```

As you have already configured passbolt CE, and passbolt Pro relies on the same configuration, you should reply:

- **No** for mysql configuration
- **No** to nginx configuration

### 7. Migrate the data

Once the package installed, run the following command to migrate the data to passbolt Pro:

```bash
sudo -H -u www-data /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt migrate"
```

### 8. Clear the cache

Make sure you clear the application cache, to make sure any changes in the database structure are reflected in 
model cache files:

```bash
sudo -H -u www-data bash -c "/usr/share/php/passbolt/bin/cake cache clear_all"
```

### 9. Ensure you don't have duplicate cron jobs

{% include hosting/upgrade/cronjobs.md %}


### 10. Take your site back up

Finally take passbolt back up:

```bash
sudo systemctl start nginx
```


{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
class="tldr"
content="Your installation is not based on a Ubuntu package?"
link="/hosting/upgrade/ce/migrate-to-ubuntu.html"
ask="Migrate passbolt to Ubuntu package"
%}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
