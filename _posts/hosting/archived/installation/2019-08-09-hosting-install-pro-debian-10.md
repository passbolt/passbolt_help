---
title: Install Passbolt Pro on Debian 10 (Buster)
date: 2021-11-22 00:00:00 Z
description: How to install Passbolt Pro on Debian 10 (Buster)
card_title: Debian 10 guide
card_teaser: Step by step guide to install passbolt on Debian 10
card_position: 2
icon: fa-server
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: Debian 10 (Buster)
archived: true
permalink: hosting/install/pro/debian-10-buster.html
---

{% assign product = 'pro' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = 'latest' %}
{% assign distributionVersionName = 'buster' %}
{% assign distributionSlug = 'debian-10' %}
{% assign distributionLabel = 'Debian 10 (Buster)' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr warning"
    content="This documentation is relative to an old distribution, please consider installing passbolt on the latest Debian"
    link="debian/debian.html"
    ask="Read install manual"
%}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
