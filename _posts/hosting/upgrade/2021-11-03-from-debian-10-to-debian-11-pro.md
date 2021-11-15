---
title: Upgrade from Debian 10 to Debian 11
date: 2021-11-03 00:00:00 Z
description: Upgrade your Debian 10 Operating System running Passbolt to Debian 11
categories: [hosting,upgrade,pro]
card_teaser: Upgrade your Debian 10 Operating System running Passbolt to Debian 11
card_title: Debian 11 upgrade
card_position: 10
sidebar: [hosting, upgrade]
passbolt_version: pro
new: true
icon: fa-server
layout: default
slug: from-debian-10-to-debian-11-pro
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'debian' %}
{% assign distributionVersionOld = '10' %}
{% assign distributionVersion = '11' %}
{% assign distributionVersionNameOld = 'buster' %}
{% assign distributionVersionName = 'buster' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Debian' %}
{% assign distributionUpgradeGuide = 'https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/upgrade/upgrade-debian-like-os.md %}
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
