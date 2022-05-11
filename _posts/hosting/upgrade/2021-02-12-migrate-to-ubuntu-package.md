---
title: Migrate passbolt CE from install scripts to Ubuntu package
date: 2021-02-12 00:00:00 Z
description: Migrate passbolt CE from install scripts to Ubuntu package
categories: [hosting,upgrade,ce]
card_teaser: Migrate from install script to Ubuntu package
card_title: Migrate to Ubuntu package
card_position: 2
sidebar: [hosting, upgrade]
passbolt_version: ce
icon: fa-ubuntu
layout: default
slug: migrate-to-ubuntu
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign distribution = 'ubuntu' %}
{% assign distributionVersion = '20.04' %}
{% assign distributionVersionName = 'focal' %}
{% assign distributionSlug = 'ubuntu' %}
{% assign distributionLabel = 'Ubuntu' %}
{% assign distributionUpgradeGuide = 'https://ubuntu.com/blog/how-to-upgrade-from-ubuntu-18-04-lts-to-20-04-lts-today' %}
{% assign distributionPhpVersion = '7.4' %}
{% assign distributionPackage = 'apt' %}
{% assign webServerUser = 'www-data' %}
{% assign databaseEngine = 'mysql' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/upgrade/upgrade-to-debian-pkg.md %}
{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when updating passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}

{% include aside/message.html %}
{% include aside/contribute.html %}
{% include layout/row_end.html %}
