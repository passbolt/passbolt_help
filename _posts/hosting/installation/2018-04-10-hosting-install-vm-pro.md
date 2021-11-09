---
title: Using Passbolt pro virtual machine appliance
card_title: Virtual machine
card_teaser: Step by step guide to install passbolt Pro virtual appliance.
card_position: 5
date: 2021-02-02 00:00:00 Z
description: Start using passbolt pro virtual machine
icon: fa-server
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: vm
docker_tag: '-pro'
passbolt_version: Pro
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign migrate = false %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/vm/00-vm-description.md %}

{% include hosting/install/vm/01-vm-setup.md %}

{% include hosting/install/vm/02-vm-configuration.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
