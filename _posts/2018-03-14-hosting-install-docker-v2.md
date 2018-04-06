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
docker_tag: ''
passbolt_version: ''
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/docker-system-requirements.md %}
{% include hosting/docker-getting-containers.md %}
{% include hosting/docker-usage.md %}
{% include hosting/docker-first-user-creation.md %}

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

## Persisting data in passbolt container

There are several locations that might be interesting for the users to persist data between container restarts:
* Images directory: /var/www/passbolt/webroot/img
* Gnupg serverkeys directory: /var/www/passbolt/config/gpg
* SSL certificate files: /etc/ssl/certs/certiticate.crt /etc/ssl/certs/certificate.key

This files and directories can be persisted in the docker volume using [docker volumes](https://docs.docker.com/storage/volumes/) or using [bind mounts](https://docs.docker.com/storage/bind-mounts/#start-a-container-with-a-bind-mount)

### Examples

An example for persisting the images directory could be to create a docker volume:
```bash
$ docker volume create passbolt_images
```

And run passbolt container with this volume:
```bash
$ docker run --name passbolt --net passbolt_network \
             --mount source=passbolt_images,\
             target=/var/www/passbolt/webroot/img \
             -e DATASOURCES_DEFAULT_HOST=mysql \
             -e DATASOURCES_DEFAULT_PASSWORD=<mysql_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mysql_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mysql_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:2.0.0-debian
```

Bind volumes are usually useful when, for instance, the SSL certificates or GnuPG keys have been already created in the host machine:
```bash
$ docker run --name passbolt --net passbolt_network \
             --mount type=bind,\
             source=<host_path_to_gnupg_keys_dir>,\
             target=/var/www/passbolt/config/gpg \
             -e DATASOURCES_DEFAULT_HOST=mysql \
             -e DATASOURCES_DEFAULT_PASSWORD=<mysql_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mysql_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mysql_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:2.0.0-debian
```

An example of the above using docker-compose can be found [here](https://github.com/passbolt/passbolt_docker/blob/develop/docker-compose.yml) where bind mounts and volumes are used.

NOTE: If you dont provide any GnuPG severkey or SSL certificate passbolt container will create a self signed SSL certificate and a GnuPG server key pair.


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
