---
title: Install scripts
card_title: Install scripts
card_teaser: Install passbolt using the install scripts
date: 2017-03-20 00:00:00 Z
description: Install passbolt using the install scripts
icon: fa-server
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: docker
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## System requirements

* Docker CE

## Optional system requirements

* MySQL >= 5.0 if you plan not to host mysql on a docker container.
* docker-compose if you plan to use a docker-compose.yml file to run passbolt container.
* rng-tools/haveged for faster filling of container entropy pool. These tools come handy in cases where GnuPG complains about no entropy is available to perform some operation (generate keys, encrypt, sign...) inside the docker container. [Important considerations](https://security.stackexchange.com/questions/39992/is-it-safe-to-use-rng-tools-on-a-virtual-machine)

## Getting passbolt container

Passbolt PRO containers follow the following tagging:

```bash
<version_number>-<build_number>-pro-debian
```

Since nobody is perfect we also use _latest-pro_ tag. It is recommended that users pull the tags pointing to specific Passbolt PRO versions.

Get Passbolt PRO 2.0.0 docker container:
```bash
$ docker pull passbolt/passbolt:2.0.0-pro-debian
```

## Using passbolt container

Passbolt PRO requires a database backend to store the information. In this section we will be using a MySQL database packaged as a docker container.

### Manually run passbolt container and mysql container

It is recommended to create a user defined network to ease the container name resolution.

Using a user defined network will provide a method to access containers using their names instead ip addresses:
```bash
$ docker network create passbolt_network
```

First run the mysql container:
```bash
$ docker run -d --name mysql --net passbolt_network \
             -e MYSQL_ROOT_PASSWORD=<root_password> \
             -e MYSQL_DATABASE=<mysql_database> \
             -e MYSQL_USER=<mysql_user> \
             -e MYSQL_PASSWORD=<mysql_password> \
             mysql
```

Now we can run the passbolt container:
```bash
$ docker run --name passbolt --net passbolt_network \
             -v <path_to_your_subscription_license>:/var/www/passbolt/config/license \
             -e DATASOURCES_DEFAULT_HOST=mysql \
             -e DATASOURCES_DEFAULT_PASSWORD=<mysql_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mysql_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mysql_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:2.0.0-pro-debian
```

Note: strings between '<' and '>' are variables that the users should fill with their data.

### Manually creating first admin user

Once the passbolt container is up and running use this command to generate the first admin user:
```bash
$ docker exec passbolt su -m -c "/var/www/passbolt/bin/cake \
                                passbolt register_user \
                                -u <your@email.com> \
                                -f <yourname> \
                                -l <surname> \
                                -r admin" -s /bin/sh www-data
```

It will output a link similar to the below one that can be pasted on the browser to finalize user registration:
```bash
https://mydomain.com/setup/install/1eafab88-a17d-4ad8-97af-77a97f5ff552/f097be64-3703-41e2-8ea2-d59cbe1c15bc
```

### Using docker-compose

From the docker-compose official docs: 'Compose is a tool for defining and running multi-container Docker applications'

Passbolt provides a [docker-compose-pro.yaml](https://github.com/passbolt/passbolt_docker/blob/develop/docker-compose-pro.yml) file. That users can download and use with docker-compose.
The easiest way to use passbolt provided docker-compose-pro.yaml is to:
```bash
$ git clone https://github.com/passbolt/passbolt_docker
$ cp your_subscription_license_file passbolt_docker/license
$ cd passbolt_docker
```

At this point some users might want to customize passbolt environment variables and change the fullBaseUrl for instance. Environment variables are defined in the following files:
* env/mysql.env
* env/passbolt.env

Once the files fit your needs it is time to:
```bash
$ docker-compose -f docker-compose-pro.yaml up
```

{% include updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/docker.html %}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when installing passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}

{% include layout/row_end.html %}
