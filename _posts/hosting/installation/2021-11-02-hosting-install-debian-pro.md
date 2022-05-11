---
title: Install Passbolt Pro on Debian 11 (Bullseye)
date: 2021-11-24 00:00:00 Z
description: How to install Passbolt Pro on (Bullseye)
card_title: Debian 11
card_teaser: Step by step guide to install passbolt Pro on Debian
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
{% assign distributionVersion = '11' %}
{% assign distributionVersionName = 'buster' %}
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
