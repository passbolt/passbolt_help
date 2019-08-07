---
title: Upgrade Passbolt from v1 to Pro on the same server
card_title: From v1 (same machine)
card_teaser: Upgrade from v1 to Pro on the same server
date: 2018-04-09 00:00:00 Z
description: Upgrade from Passbolt v1 to Pro on the same server
icon: fa-server
categories: [hosting,upgrade,pro]
sidebar: hosting
layout: default
slug: upgrade-pro-from-ce-v1-same-server
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

This tutorial covers the case where you want to upgrade your current instance of passbolt CE v1.x into Passbolt Pro on 
the same server.

If you want to use a new server, [follow this link](/hosting/upgrade/pro/upgrade-ce-v1-to-pro-new-server).

{% include messages/warning.html
    content="**Important:** Please take a full [backup](/hosting/backup-v1) of your Passbolt CE before proceeding 
    with the upgrade. Backup should include passbolt files as well as the database."
%}

## System requirements
{% include hosting/v2-requirements.md %}

## Upgrade to Passbolt Pro
In the following examples we assume you are running passbolt CE v1 using apache in the `/var/www/passbolt`
directory. You will need to replace these values with your local environment settings.

### 1. Make sure you have the latest v1.x version
{% include hosting/upgrade/ce/v1/check-latest-version-installed.md %}

### 2. Take your site offline
{% include hosting/upgrade/take-your-site-offline.md %}

### 3. Download Passbolt Pro
{% include hosting/upgrade/pro/v2/download-and-replace-passbolt.md 
    repo_url="https://bitbucket.org/passbolt_pro/passbolt_pro_api.git"
%}

### 4. Install the dependencies
{% include hosting/install/install-composer-dependencies.md %}

### 5. Copy the avatar folder
{% include hosting/upgrade/ce/v2/copy-avatar-from-v1.md %}

### 6. Configure Passbolt Pro
{% include hosting/install/pro/v2/install-with-webinstaller.md %}

### 7. Your server is now ready to run passbolt

Once you have followed all the steps of the wizard, Passbolt Pro is ready to run. You will be redirected
automatically to the login page where you can log in.

### 8. Final step: modify the cron job to send emails

Modify the cronjob entry you had added for passbolt CE v1 :
```
* * * * * /var/www/passbolt/app/Console/cake EmailQueue.sender > /var/log/passbolt.log
```

into this one:
```
* * * * * /var/www/passbolt/bin/cake EmailQueue.sender > /var/log/passbolt.log
```

## That's it!

At this stage, Passbolt Pro should be working perfectly.

Any issue? Do contact us on the [Passbolt Pro support](mailto:contact@passbolt.com) with the email provided during your purchase.

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
