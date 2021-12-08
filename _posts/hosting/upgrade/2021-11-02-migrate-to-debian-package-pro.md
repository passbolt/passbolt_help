---
title: Migrate from install scripts to Debian package
date: 2021-11-02 00:00:00 Z
description: Migrate from install scripts to Debian package
categories: [hosting, upgrade, pro]
card_teaser: Migrate from install script to Debian package
card_title: Migrate to Debian package
card_position: 2
sidebar: [hosting, upgrade]
passbolt_version: pro
icon: fa-debian
layout: default
slug: migrate-to-debian
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = '11' %}
{% assign distributionVersionName = 'buster' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Debian' %}
{% assign distributionUpgradeGuide = 'https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html' %}
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
