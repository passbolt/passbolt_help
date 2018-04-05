---
title: Docker passbolt installation
card_title: Docker install
card_teaser: Install passbolt using docker
date: 2017-03-20 00:00:00 Z
description: Install passbolt using docker
icon: fa-server
categories: [hosting,install,ce]
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

Passbolt containers follow the following tagging:

```bash
<version_number>-<build_number>-debian
```

Since nobody is perfect we also use _latest_ and _develop-debian_ tags which points to master and develop branches of [passbolt_docker](https://github.com/passbolt/passbolt_docker) repository.
It is recommended that users pull the tags pointing to specific passbolt versions.

Get passbolt 2.0.0 docker container:
```bash
$ docker pull passbolt/passbolt:2.0.0-debian
```

## Using passbolt container

Passbolt requires a database backend to store the information. In this section we will be using a MySQL database packaged as a docker container.

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
             -e DATASOURCES_DEFAULT_HOST=mysql \
             -e DATASOURCES_DEFAULT_PASSWORD=<mysql_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mysql_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mysql_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:2.0.0-debian
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

Passbolt provides a [docker-compose.yaml](https://github.com/passbolt/passbolt_docker/blob/develop/docker-compose.yml) file. That users can download and use with docker-compose.
The easiest way to use passbolt provided docker-compose.yaml is to:
```bash
$ git clone -b develop https://github.com/passbolt/passbolt_docker
$ cd passbolt_docker
```

At this point some users might want to customize passbolt environment variables and change the fullBaseUrl for instance. Environment variables are defined in the following files:
* env/mysql.env
* env/passbolt.env

Once the files fit your needs it is time to:
```bash
$ docker-compose up
```

### Create first admin user using docker-compose

If you run passbolt using [docker-compose.yaml](https://github.com/passbolt/passbolt_docker/blob/develop/docker-compose.yml) provided by passbolt:

```bash
$ docker-compose exec passbolt su -m -c "/var/www/passbolt/bin/cake \
                                passbolt register_user \
                                -u <your@email.com> \
                                -f <yourname> \
                                -l <surname> \
                                -r admin" -s /bin/sh www-data
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
