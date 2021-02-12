---
title: Install Passbolt CE on Ubuntu 20.04
date: 2021-02-10 00:00:00 Z
description: How to install Passbolt CE on Ubuntu 20.04
card_title: Ubuntu 20.04
card_teaser: Step by step guide to install passbolt CE on Ubuntu 20.04
card_position: 1
icon: fa-server
categories: [hosting,install,ce,ubuntu]
sidebar: hosting
layout: default
slug: ubuntu
popular: true
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign distribution = 'ubuntu' %}
{% assign distributionVersion = '20.04' %}
{% assign distributionVersionName = 'focal' %}
{% assign distributionSlug = 'ubuntu' %}
{% assign distributionLabel = 'Ubuntu' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/community.html %}

{% include aside/contribute.html %}

{% include layout/row_end.html %}


