---
title: Update for docker container
date: 2021-12-30 00:00:00 Z
description: How to update passbolt docker container
card_teaser: Guide for instances using docker container.
card_title: Update for Docker
card_position: 3
icon: fa-docker
categories: [hosting, update]
sidebar: hosting
layout: default
slug: docker
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

It is recommended that users [pull the tags pointing to specific passbolt versions](https://hub.docker.com/r/passbolt/passbolt/tags) when running in environments other than testing. So to update passbolt, you would just need to change the image tag in your docker-compose.yml file:

```
 image: passbolt/passbolt:<IMAGE_TAG>
```

Then relaunch your composer:

```
$ docker-compose up -d
```


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
