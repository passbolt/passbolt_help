---
title: Install passbolt from scratch on Debian 9 (Stretch)
date: 2018-04-09 00:00:00 Z
description: How to install Passbolt CE on your server from the source code.
card_title: Debian 9 tutorial
card_teaser: Step by step guide to install passbolt on Debian 9 
card_position: 2
icon: fa-server
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: from-source
permalink: hosting/install/ce/debian-9-stretch.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## System requirements

Spin up a new fresh server with Debian 9 (Stretch). Make sure that it is up-to-date.

## Installation steps

### 1. Base packages
{% include hosting/install/tutorials/debian/install_base_packages.md %}

### 2. Database installation
{% include hosting/install/tutorials/install_mariadb.md
    package_manager="apt-get"
%}

### 3. Webserver installation (apache2)
Next we will want to install the apache webserver that will serve our php application.

```shell
$ apt-get install apache2 -y
```

Passbolt needs the mod_rewrite module to function properly.

```shell
$ a2enmod rewrite
```

We can see if this worked by opening up the web browser and going to the url: http://localhost (or whatever hostname / ip used by your machine). 
By default apache stores the web pages in /var/www/html so we can see and edit the default html page in this directory if needed.

### 4. PHP installation
Now let’s install php 7 and its dependencies. By default the command line interface (php5-cli) and the apache mod for php (libapache2-mod-php5) will be also installed as dependencies. We will need them later on.

```shell
$ apt-get install php7.0 php7.0-cli php7.0-common libapache2-mod-php7.0 php7.0-json php7.0-readline php7.0-mysqlnd libonig4 libqdbm14 -y
```

Passbolt needs some extra dependencies to run properly:

```shell
$ apt-get install php7.0-gd php7.0-intl php7.0-simplexml php7.0-curl php7.0-dom php7.0-mbstring -y
```

Passbolt needs GnuPG and it corresponding php module to run.

```shell
$ apt-get install libgpgme11-dev php7.0-gnupg -y
```

You will need to restart your apache server for the changes to take place.

```shell
$ systemctl restart apache2
```

### 5. Virtual host config
For apache to work with passbolt we need to edit the virtual host configuration file to add the passbolt folder and rewrite rules.

```shell
$ nano /etc/apache2/sites-enabled/000-default.conf
```

This is what a minimal configuration without ssl looks like (we'll get to the ssl part later). Of course you will need to replace your administrator email address (ServerAdmin setting) and server name (ServerName setting).

```
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName passbolt.dev

    DocumentRoot /var/www/passbolt

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <Directory /var/www/passbolt>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```
### 6. Domain name setup
{% include hosting/install/tutorials/configure_local_domain.md
    editor="nano"
%}

### 7. Download passbolt
{% include hosting/install/tutorials/download_source_code.md %}

### 8. Generate an OpenPGP key
{% include hosting/install/tutorials/generate_pgp_key.md 
    package_manager="apt-get"
    webserver_user="www-data"
%}

### 9. Initialize the webserver gpg keyring
{% include hosting/install/tutorials/initialize_keyring.md 
    distribution_name="debian 9"
    webserver_user="www-data"
    home_directory="/var/www"
    force_ownership=1
%}

### 9. Set passbolt file permissions
{% include hosting/install/tutorials/configure_file_permissions.md 
    webserver_user="www-data"
    webserver_name="apache"
%}

### 10. Install the dependencies
{% include hosting/install/tutorials/install_passbolt_dependencies.md %}


### 11. Create a passbolt configuration file
{% include hosting/install/tutorials/create_passbolt_configuration_file.md 
    editor_name="nano"
%}

### 12. Run the install script
{% include hosting/install/tutorials/install_passbolt.md %}

### 13. It's running
{% include hosting/install/tutorials/conclusion_step_1.md %}

## Going further

### 1. Setup the emails
{% include hosting/install/tutorials/configure_emails.md 
    webserver_user="www-data" 
%}

### 2. Configure https
{% include hosting/install/tutorials/ssl/configure_ssl.md 
    webserver_user="www-data" 
    webserver_name="apache"
    editor_name="nano"
    %}

## That's it
Do let us know if you run into problems following this tutorial on the [https://community.passbolt.com/c/installation-issues](support forum).

Thank you for trying out Passbolt CE!

### Troubleshooting

Here are some frequently asked questions related to passbolt installation:
{% include faq/list-by-tag.html tag='troubleshoot' %}

Feel free to ask for help on the [community forum](https://community.passbolt.com/c/installation-issues).

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

{% include aside/message.html
    class="tldr"
    content="Something is not accurate in this documentation? You can contribute by opening an issue or making pull requests!"
    link="https://www.github.com/passbolt/passbolt_help"
    ask="View on github"
%}

{% include aside/ce-install-pro-cta.html %}

{% include layout/row_end.html %}
