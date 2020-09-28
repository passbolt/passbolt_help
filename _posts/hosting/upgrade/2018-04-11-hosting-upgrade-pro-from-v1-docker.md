---
title: Upgrade from CE v1 to Pro using docker
card_title: From v1 (docker)
card_teaser: Upgrade from CE v1 to Pro using docker
date: 2018-04-09 00:00:00 Z
description: Upgrade from CE v1.x to Passbolt Pro using docker
icon: fa-server
categories: [hosting,upgrade,pro]
sidebar: hosting
layout: default
slug: upgrade-pro-from-ce-v1-docker
docker_tag: '-pro'
passbolt_version: Pro
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

This tutorial covers the case where you want to upgrade from your passbolt CE v1.x into Passbolt Pro when using docker.

{% include messages/warning.html
    content="**Important:** Please take a full [backup](/hosting/backup-v1) of your passbolt before proceeding with the upgrade. Backup should include passbolt files as well as the database."
%}

The upgrading process is very similar to the one listed in the [ce section](/hosting/upgrade/ce/upgrade-docker-ce.html). The main difference is that Passbolt Pro requires a subscription key to
work.

{% include hosting/docker/docker-changes-section.md %}
{% include hosting/docker/docker-backup-section.md %}
{% include hosting/docker/docker-getting-containers.md %}
{% include hosting/docker/docker-upgrade-section.md %}
