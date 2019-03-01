---
title: Upgrade Passbolt docker from v1
card_title: Upgrade using docker
card_teaser: Upgrade from version 1 docker installation
icon: fa-server
date: 2018-04-10 00:00:00 Z
description: How to upgrade passbolt to version 2 on docker installations
categories: [hosting,upgrade,ce]
sidebar: hosting
layout: default
slug: upgrade-docker-ce

permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

This tutorial covers the case where you want to upgrade your current docker installation of passbolt CE v1.x into passbolt CE v2.x.

{% include messages/warning.html
    content="**Important:** Please take a full [backup](/hosting/backup-v1) of your passbolt before proceeding with the upgrade. Backup should include passbolt files as well as the database."
%}


{% include hosting/docker/docker-changes-section.md %}
{% include hosting/docker/docker-backup-section.md %}
{% include hosting/docker/docker-getting-containers.md %}
{% include hosting/docker/docker-upgrade-section.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when installing passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}

{% include aside/docker.html %}

{% include aside/message.html
    class="tldr"
    content="Something is not accurate in this documentation? You can contribute by opening an issue or making pull requests!"
    link="https://www.github.com/passbolt/passbolt_help"
    ask="View on github"
%}

{% include aside/message.html
    class="tldr notice"
    content="We highly recommend that you install https on your server. You can get a free SSL certificate with the let's encrypt initiative."
    link="https://letsencrypt.org/"
    ask="let's encrypt!"
%}

{% include layout/row_end.html %}
