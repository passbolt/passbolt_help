---
title: Install Passbolt Pro on Debian
date: 2018-11-13 00:00:00 Z
description: How to install Passbolt Pro on
card_title: Debian
card_teaser: Step by step guide to install passbolt Pro on Debian
card_position: 1
icon: fa-server
categories: [hosting,install,pro,debian]
sidebar: hosting
layout: default
slug: Debian
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = 'latest' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Debian' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/contribute.html %}

{% include layout/row_end.html %}
