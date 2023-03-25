---
title: Install Passbolt PRO on openSUSE Leap 15
date: 2021-11-24 00:00:00 Z
description: How to install Passbolt PRO on
card_title: openSUSE Leap 15
card_teaser: Install passbolt PRO on openSUSE
card_position: 10
icon: fa-opensuse
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: opensuse
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'opensuse' %}
{% assign distributionVersion = 'Leap 15' %}
{% assign distributionSlug = 'opensuse' %}
{% assign distributionLabel = 'openSUSE' %}
{% assign distributionPackage = 'zypper' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include aside/contribute.html %}

{% include layout/row_end.html %}
