---
title: Upgrade from CE v1.x to Pro on same server
date: 2017-03-20 00:00:00 Z
description: Upgrade from CE v1.x to Passbolt Pro
icon: fa-server
ignore_card: true
categories: [hosting,upgrade,pro]
sidebar: hosting
layout: default
slug: upgrade-ce-v1-to-pro-same-server
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

This tutorial covers the case where you want to upgrade your current instance of passbolt CE v1.x into Passbolt Pro on the same server.

If you want to use a new server, [follow this link](/hosting/upgrade/pro/upgrade-ce-v1-to-pro-new-server).

{% include warning.html
    content="**Important:** Please take a full backup of your Passbolt CE before proceeding with the upgrade. Backup should include passbolt files as well as the database."
%}

## System requirements
{% include hosting/v2-requirements.md %}

## Upgrade to Passbolt Pro
In the following examples we assume you are running passbolt CE v1 using apache in the `/var/www/passbolt`
directory. You will need to replace these values with your local environment settings.

### 1. Make sure you have the latest v1.x version

If you do not have the latest version, please follow the regular [v1 udpate process](/hosting/update).
We’ll also assume you have a web server that match the system requirements.

```shell
/var/www/passbolt$ cat app/Config/version.php  | grep number
'number' => '1.6.9'
```

### 2. Take your site offline

There are multiple ways of doing that, the simplest is sending a notice by email to your users
and stopping your webserver. The better approach would be to create a temporary html file and 
redirect your passbolt user there, for example:

```shell
/var/www$ mkdir wip
/var/www$ touch wip/index.html
/var/www$ echo '<html><head><title>Maintenance in progress</title></head><body><h1>Maintenance in progress</h1></body></html>' >> wip/index.html
/var/www$ nano /etc/apache2/sites-enabled/001-default.conf

<IfModule mod_ssl.c>
        <VirtualHost _default_:443>
                ServerAdmin webmaster@localhost
                ServerName www.passbolt.test
                DocumentRoot /var/www/wip

                ErrorLog ${APACHE_LOG_DIR}/error.log
                CustomLog ${APACHE_LOG_DIR}/access.log combined

                SSLEngine on
                SSLCertificateFile /etc/apache2/ssl/passbolt.crt
                SSLCertificateKeyFile /etc/apache2/ssl/passbolt.key

        <Directory /var/www/wip>
            Options FollowSymLinks
            AllowOverride All
            Require all granted
        </Directory>

        </VirtualHost>
</IfModule>
/var/www$ service apache2 restart
```

### 3. Make a database backup

Make sure you have a database backup so that you can revert if something goes wrong.

```shell
/var/www$ mysqldump -u[user] -p[pass] db > /path/to/passbolt-backup.sql
```

### 4. Download Passbolt Pro
Open a shell with the same user as your web server user. (usually, www-data for apache, nginx for nginx)

```shell
/var/www$ su -s /bin/bash www-data
```

Replace Passbolt CE by Passbolt Pro.

```shell
/var/www$ mv ./passbolt ./passbolt_ce_v1
/var/www$ git clone https://bitbucket.org/passbolt_pro/passbolt_pro_api.git ./passbolt
```

### 5. Install the dependencies
```shell
/var/www$ cd ./passbolt
/var/www/passbolt$ composer install
```

### 6. Copy the avatar folder from CE and rename it
```shell
/var/www/passbolt$ cp -R ../passbolt_ce_v1/app/webroot/img/public/* ./webroot/img/public/.
/var/www/passbolt$ mv ./webroot/img/public/images/ProfileAvatar ./webroot/img/public/images/Avatar
```

### 7. Configure Passbolt Pro
To configure Passbolt Pro, the easiest way is to use the in-built configuration wizard.
Just point your browser to your passbolt url. 

You will be greeted by a welcome screen. Click on the Configure with wizard option and follow the instructions.

{% include figure.html
    url="/assets/img/help/2018/04/passbolt-welcome-page.png"
    legend="passbolt welcome page before configuration"
    width="586px"
%}

{% include warning.html
    content="**Note:** Enter the same configuration details as the the ones that were used for your Passbolt CE. 
    This includes your database, smtp details, as well as your server GPG key that you'll need to import (**Do not generate a new one**)."
%}

{% include figure.html
    url="/assets/img/help/2018/04/wizard-key-import.png"
    legend="Wizard - import key screen"
    width="586px"
%}

### 8. Your server is now ready to run passbolt

Once you have followed all the steps of the wizard, Passbolt Pro is ready to run. You will be redirected
automatically to the login page where you can log in.

### 9. Final step: modify the cron job to send emails

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

{% include updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
