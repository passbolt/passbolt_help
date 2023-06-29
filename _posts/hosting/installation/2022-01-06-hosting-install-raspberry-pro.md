---
title: Install Passbolt PRO on Raspberry PI
date: 2022-01-06 00:00:00 Z
description: How to install Passbolt PRO on raspberry PI
card_title: Raspberry PI
card_teaser: Step by step guide to install passbolt PRO on Raspberry PI
card_position: 4
icon: fa-raspberry
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: raspberry
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = '12' %}
{% assign distributionVersionName = 'bookworm' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Raspberry' %}
{% assign distributionPackage = 'apt' %}
{% assign databaseEngine = 'mariadb' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include layout/row_end.html %}
