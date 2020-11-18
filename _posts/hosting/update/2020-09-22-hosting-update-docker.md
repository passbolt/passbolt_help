---
title: Update passbolt docker container
date: 2020-09-20 00:00:00 Z
description: How to update passbolt docker container
card_teaser: Update passbolt on docker installations
card_title: Update passbolt docker
icon: fa-server
categories: [hosting, update]
sidebar: hosting
layout: default
slug: docker
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Every passbolt release comes with a container release. Passbolt containers have a image tag that contains
the passbolt version so updating them is as easy as changing the image tag.

Of course depending on your container scheduler, or docker-compose you might need to restart the stack or perform
some extra steps that are out of the scope of this help site.

As a example if you are running passbolt docker using the docker-compose files provided [here](https://github.com/passbolt/passbolt_docker/blob/master/docker-compose.yml)
you would just need to change the following line:

```
 image: passbolt/passbolt:<IMAGE_TAG>-debian
```

Where <IMAGE_TAG> is the passbolt version that you want to use, for example `2.13.5` and relaunch your composer:

```
$ docker-compose up -d
```

Voilà


{% include date/updated.html %}

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
