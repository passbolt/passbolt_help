---
title: Migrate passbolt CE from install scripts to Debian package
date: 2021-11-02 00:00:00 Z
description: Migrate passbolt CE from install scripts to Debian package
categories: [hosting,upgrade,ce]
card_teaser: Migrate from install script to Debian package
card_title: Migrate to Debian package
card_position: 1
sidebar: [hosting, upgrade]
passbolt_version: ce
icon: fa-server
layout: default
slug: migrate-to-debian
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = '11' %}
{% assign distributionVersionName = 'buster' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Debian' %}
{% assign distributionUpgradeGuide = 'https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html' %}
{% assign distributionPhpVersion = '7.3' %}

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
