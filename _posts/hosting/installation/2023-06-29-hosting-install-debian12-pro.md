---
title: Install Passbolt Pro on Debian 12 (Bookworm)
date: 2023-06-29 00:00:00 Z
description: How to install Passbolt Pro on (Bookworm)
card_title: Debian 12
card_teaser: Step by step guide to install Passbolt Pro on Debian
card_position: 1
icon: fa-debian
categories: [hosting,install,pro,debian]
sidebar: hosting
layout: default
popular: true
slug: Debian
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = '12' %}
{% assign distributionVersionName = 'bookworm' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Debian' %}
{% assign distributionPackage = 'apt' %}
{% assign databaseEngine = 'mariadb' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include aside/contribute.html %}

{% include layout/row_end.html %}
