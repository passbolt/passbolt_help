---
title: Upgrade Passbolt from community edition v2 to Pro on Debian
card_title: From CE v2 (debian)
card_teaser: Upgrade from community edition v2 to Pro
date: 2021-02-10 00:00:00 Z
description: Upgrade from CE v2 to Pro
icon: fa-server
categories: [hosting,upgrade,pro]
sidebar: hosting
layout: default
slug: upgrade-pro-from-ce-debian
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}


### 1. Backup passbolt

Follow the backup process [here](/hosting/backup/debian).


### 2. Upload your subscription key

You should copy your subscription key to `/etc/passbolt/license` and ensure
the permissions are correct.

```bash
sudo chown root:www-data /etc/passbolt/license
sudo cmod 640 /etc/passbolt/license
```

### 3. Uninstall passbolt-ce-server

```bash
sudo apt-get remove passbolt-ce-server
```

### 4. Add new repository for passbolt-pro-server on apt

```bash
echo  "deb https://download.passbolt.com/pro/debian buster stable" | \
sudo tee /etc/apt/sources.list.d/passbolt-pro.list
```

### 5. Update your repository to make passbolt-pro available for installation

```bash
sudo apt-get update
```

### 6. Install passbolt-pro-server 

{% include messages/warning.html
    content="**Important:** As you have passbolt already configured you should reply 'No' to the mysql configuration question and 'No' to the nginx configuration question. We don't need to configure anything. "
%}

```bash
sudo apt-get install passbolt-pro-server
```

### 7. Run the database migrations

```bash
sudo -H -u www-data /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt migrate"
```

### 8. Clear the cache

```bash
sudo -H -u www-data bash -c "/usr/share/php/passbolt/bin/cake cache clear_all"
```

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
