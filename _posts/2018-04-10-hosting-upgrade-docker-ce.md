---
title: Upgrade Passbolt docker from v1
card_title: Upgrade docker
card_teaser: Upgrade docker from v1
icon: fa-server
date: 2018-04-10 00:00:00 Z
description: How to upgrade passbolt to version 2 on docker installations
categories: [hosting,upgrade,ce]
sidebar: hosting
layout: default
slug: upgrade-docker-ce

permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

This tutorial covers the case where you want to upgrade your current docker installation of passbolt CE v1.x into passbolt CE v2.x.

{% include warning.html
    content="**Important:** Please take a full [backup](/hosting/backup-v1) of your passbolt before proceeding with the upgrade. Backup should include passbolt files as well as the database."
%}

## Upgrade from v1.6.10-debian

Passbolt v2 introduces several changes that are important to keep in mind when upgrading:

#### Changes: Environment variables

The set of environment variables have changed and users should take some time to get familiar with the new ones. For example in case of the database env variables:

```bash
DB_USER is now DATASOURCES_DEFAULT_USERNAME
DB_HOST is now DATASOURCES_DEFAULT_HOST
```
There is a more detailed list in passbolt_docker [README](https://github.com/passbolt/passbolt_docker/blob/master/README.md) file.

#### Changes: Configuration files

No more core.php, email.php or database.php.
Any user that does not want to use environment variables must configure passbolt using:
```
/var/www/passbolt/config/passbolt.php
```
Passbolt will look for for configuration values in `passbolt.php`. Wether `passbolt.php` does not exist or the configuration section is not defined on it, passbolt will then look for configuration details in default.php which relies on environment variables/default values.
Gpg config directory has changed slightly its path from:

```bash
/var/www/passbolt/app/Config/gpg/ to /var/www/passbolt/config/gpg
```

Gpg default server key file names also changed:

```bash
serverkey.private.asc to serverkey_private.asc
```

#### Changes: www user

Passbolt container is now running under the www-data user

#### Changes: images directory

Path to the images directory is different:

```bash
/var/www/passbolt/app/webroot/img/public/images to /var/www/passbolt/webroot/img/public/images
```

Users must also rename ProfileAvatar to Avatar directory inside public/images in order to see images in passbolt v2

#### Changes: supervisor

In order to manage the running process in passbolt container we introduced supervisord. Users are now able to restart passbolt container processes using:

```bash
$ docker exec passbolt supervisorctl restart <php-fpm|nginx|cron>
```

Now that we have a better overview of the changes let's start with the upgrading process!

### Backup mysql database

First of all is encouraged to backup all the relevant data that is:
- Database
- Images
- Server public and private keys

You might want to check the detailed [backup list for v1](/hosting/backup-v1)

There are multiple ways to backup your database following there is an example using the passbolt container:
```bash
$ docker exec passbolt mysqldump -h <db_host> \
                                 -u passbolt \
                                 -pP4ssb0lt \
                                 passbolt > dump.sql
```

This will output a dump.sql file on the host machine.

### Backup images directory

If you are mounting the images directory using a bind mount just copy the host image directory in a safe location.
If you are using docker volumes to persist your images directory, or not persisting the images directory at all, you can execute the following to copy your images to the host machine.

```bash
$ docker cp passbolt:/var/www/app/webroot/img/public public_images_backup
```
This will output a public_images_directory with the images stored in the passbolt container.

### Backup gpg keys

As with the previous section you can proceed exactly the same with the gpg keys:

```bash
$ docker cp passbolt:/var/www/app/Config/gpg/ gpg_keys_backup
```

This will output a gpg_keys_backup directory with the contents of the gpg configuration folder of passbolt.

## Upgrade using latest v1 version (1.6.10)

Passbolt v2 will run the database migrations if needed when starting up. Users just need to provide the gpg keys, configuration files/env variables and images.
Following some examples:

### Using host bind mounts

Users that use host bind mounts from host machine into docker file must adjust paths of the mounted files:

In the following snippet:
- passbolt_images_dir: path to a host directory that contains passbolt images Avatar directory.
- gpg_host_dir: path to a host directory that contains serverkey.asc and serverkey_private.asc

```bash
$ docker run --name passbolt --net passbolt_network \
             --mount type=bind, \
               source=<passbolt_images_dir>,\
               target=/var/www/passbolt/webroot/img \
             --mount type=bind, \
               source=<gpg_host_dir>, \
               target=/var/www/passbolt/config/gpg \
             -e DATASOURCES_DEFAULT_HOST=mysql \
             -e DATASOURCES_DEFAULT_PASSWORD=<mysql_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mysql_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mysql_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:2.0.0-debian
```

### Using docker volumes

Users that use docker volumes should adjust their volumes paths.

```bash
$ docker run --name passbolt --net passbolt_network \
             --mount source=<passbolt_images_volume>,\
               target=/var/www/passbolt/webroot/img \
             --mount source=<gpg_keys_volume>, \
               target=/var/www/passbolt/config/gpg \
             -e DATASOURCES_DEFAULT_HOST=mysql \
             -e DATASOURCES_DEFAULT_PASSWORD=<mysql_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mysql_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mysql_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:2.0.0-debian
```

{% include updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when installing passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}

{% include aside/docker.html %}

{% include aside/message.html
    class="tldr"
    content="Something is not accurate in this documentation? You can contribute by opening an issue or making pull requests!"
    link="https://www.github.com/passbolt/passbolt_help"
    ask="View on github"
%}

{% include aside/message.html
    class="tldr notice"
    content="We highly recommend that you install https on your server. You can get a free SSL certificate with the let's encrypt initiative."
    link="https://letsencrypt.org/"
    ask="let's encrypt!"
%}

{% include layout/row_end.html %}
