---
title: Install Passbolt CE using debian package
date: 2020-05-25 00:00:00 Z
description: How to install Passbolt CE on Debian 10 (Buster)
card_title: Debian 10 package
card_teaser: Step by step guide to install passbolt on Debian 10
card_position: 1
icon: fa-server
categories: [hosting,install,ce,beta]
sidebar: hosting
layout: default
slug: Debian package
ignore_card: true
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = 'latest' %}
{% assign distributionSlug = 'debian-10' %}
{% assign distributionLabel = 'Debian 10 (Buster)' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include layout/row_end.html %}
