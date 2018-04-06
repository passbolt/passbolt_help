---
title: Docker install
card_title: Docker install
card_teaser: Install passbolt using Docker
date: 2017-03-20 00:00:00 Z
description: Install passbolt using Docker
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
{% include hosting/docker-compose-usage.md %}
{% include hosting/docker-persisting-data.md %}


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
