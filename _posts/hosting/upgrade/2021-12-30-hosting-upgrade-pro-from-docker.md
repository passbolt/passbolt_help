---
title: Upgrade from CE to Pro using docker
card_title: From CE with Docker
card_teaser: Upgrade from CE to Pro using docker
card_position: 6
date: 2021-12-30 00:00:00 Z
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

In order to upgrade from CE to Pro users just need to download the pro container and mount their corresponding subscription key.

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}