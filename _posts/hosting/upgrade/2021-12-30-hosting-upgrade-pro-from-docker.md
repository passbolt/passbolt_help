---
title: Upgrade from CE to Pro using docker
card_title: From CE with Docker
card_teaser: Upgrade from CE to Pro using docker
card_position: 6
date: 2022-02-21 00:00:00 Z
description: Upgrade from CE to Passbolt Pro using docker
icon: fa-docker
categories: [hosting,upgrade,pro]
sidebar: hosting
layout: default
slug: upgrade-pro-from-ce-docker
docker_tag: '-pro'
passbolt_version: Pro
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
    content="**Important:** Please take a full [backup](/hosting/backup) of your passbolt before proceeding with the upgrade."
%}

In order to upgrade from CE to PRO, open your `docker-compose.yaml` file and search for the passbolt CE image definition:

```
image: passbolt/passbolt:<IMAGE_TAG>
```

And replace the CE `<IMAGE_TAG>` [with a PRO `<IMAGE_TAG>`](https://hub.docker.com/r/passbolt/passbolt/tags?page=1&name=pro).

In the same location of your docker-compose.yaml file, create a subscription_key.txt file containing your passbolt subscription key, and add a new volume definition in your docker-compose.yaml file:

```
version: '3.7'
services:
  db:
    ...
  passbolt:
    ...
    volumes:
      ...
      - ./subscription_key.txt:/etc/passbolt/subscription_key.txt:ro
```

Then relaunch your docker containers:

```
$ docker-compose up -d
```

By doing this:

* a new passbolt docker image will be pulled and a new container created
* your passbolt database schema will be updated

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}