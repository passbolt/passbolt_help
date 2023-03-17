---
title: Install Passbolt CE on openSUSE Leap 15
date: 2022-02-07 00:00:00 Z
description: How to install Passbolt CE on
card_title: openSUSE Leap 15
card_teaser: Install passbolt CE on openSUSE
card_position: 10
icon: fa-opensuse
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: opensuse
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
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

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include layout/row_end.html %}
