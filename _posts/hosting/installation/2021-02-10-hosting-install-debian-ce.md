---
title: Install Passbolt CE on Debian 10
date: 2021-02-10 00:00:00 Z
description: How to install Passbolt CE on
card_title: Debian 10
card_teaser: Step by step guide to install passbolt CE on Debian
card_position: 1
icon: fa-server
categories: [hosting,install,ce,debian]
sidebar: hosting
layout: default
slug: Debian
popular: true
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = '10' %}
{% assign distributionVersionName = 'buster' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Debian' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include layout/row_end.html %}
