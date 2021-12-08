---
title: Migrate from install scripts to Ubuntu package
date: 2021-02-03 00:00:00 Z
description: Migrate from install scripts to Ubuntu package
categories: [hosting, upgrade, pro]
card_teaser: Migrate from install script to Ubuntu package
card_title: Migrate to Ubuntu package
card_position: 3
sidebar: [hosting, upgrade]
passbolt_version: pro
icon: fa-ubuntu
layout: default
slug: migrate-to-ubuntu
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'ubuntu' %}
{% assign distributionVersion = '20.04' %}
{% assign distributionVersionName = 'focal' %}
{% assign distributionSlug = 'ubuntu' %}
{% assign distributionLabel = 'Ubuntu' %}
{% assign distributionUpgradeGuide = 'https://ubuntu.com/blog/how-to-upgrade-from-ubuntu-18-04-lts-to-20-04-lts-today' %}
{% assign distributionPhpVersion = '7.4' %}
{% assign distributionPackage = 'apt' %}
{% assign webServerUser = 'www-data' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/upgrade/upgrade-to-debian-pkg.md %}
{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}
{% include aside/contribute.html %}

{% include layout/col_end.html %}
{% include layout/row_end.html %}
