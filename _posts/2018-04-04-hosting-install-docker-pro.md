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
docker_tag: '-pro'
passbolt_version: Pro
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
