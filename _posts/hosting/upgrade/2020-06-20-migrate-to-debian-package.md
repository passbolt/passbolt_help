---
title: Migrate from install scripts to debian package
date: 2020-06-20 00:00:00 Z
description: Migrate from install scripts to debian package
categories: [hosting,upgrade,ce]
card_teaser: Migrate from installation scripts to debian package
card_title: Migrate to debian package
sidebar: [hosting, upgrade]
icon: fa-server
layout: default
slug: migrate-to-debian
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

# 1. Backup your instance

First things first, as this is a sensitive operation a backup of the the instance must be performed to prevent any data-loss. You can follow our [backup process](/hosting/backup)

# 2. Upgrade your system

A full system upgrade to debian stable (10) is necessary before installing passbolt debian package.
[Here](https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html) is the official debian guide to upgrade your system with a step by step tutorial.

# 3. Install passbolt debian package

You can follow the instructions to install passbolt debian package [here](/hosting/install/ce/debian/debian.html) for the community edition and [here](/hosting/install/pro/debian/debian.html) for the pro edition.

It is recommended at this point to select:

- **No** for mysql configuration as it is already configured
- **No** to nginx configuration as we will do it at the end

# 4. Copy GPG keys to the new location

```
sudo cp /var/www/passbolt/config/gpg/* /etc/passbolt/gpg/
sudo chown root:www-data /etc/passbolt/gpg/*
sudo chmod g-w /etc/passbolt/gpg
```
# 5. Copy passbolt.php configuration

```
sudo cp /var/www/passbolt/config/passbolt.php /etc/passbolt/passbolt.php
sudo chown root:www-data /etc/passbolt/passbolt.php
sudo chmod g-w /etc/passbolt/passbolt.php
```

# 6. PHP-FPM

Edit `/etc/php/7.3/fpm/pool.d/www.conf` and look for the line that looks like this:

```
listen = 127.0.0.1:9000
```

Change it to look like this:

```
listen = /run/php/php7.3-fpm.sock
```

Due to a bug on the install scripts some installations might need to do an additional substitution on `/etc/php/7.3/fpm/pool.d/www.conf`:

Look for the line containing:

```
listen.group = _WWW_GROUP_
```

And change it to look like:

```
listen.group = www-data
```

# 7. Nginx

Now you can remove all the old nginx configuration files from `/etc/nginx/conf.d/`
```
sudo rm /etc/nginx/conf.d/passbolt.conf
sudo rm /etc/nginx/conf.d/passbolt_ssl.conf
```
Then you can reconfigure the debian package using:
```
sudo dpkg-reconfigure passbolt-ce-server
```
Or, if you are using the pro:
```
sudo dpkg-reconfigure passbolt-pro-server
```

Answer the following way:

- **No** to mysql configuration
- **Yes** to nginx configuration

You can then select the SSL method that suits best your needs.

# 8. Cleanup

After you have checked you can access your new setup with the debian package make a backup of `/var/www/passbolt` and then
you can delete it:

```
rm -rf /var/www/passbolt
```

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}


{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when updating passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}

{% include aside/message.html %}
{% include layout/row_end.html %}
