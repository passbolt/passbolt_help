---
title: Install Passbolt CE on Debian 10 (Buster)
date: 2018-11-13 00:00:00 Z
description: How to install Passbolt CE on Debian 10 (Buster)
card_title: Debian 10 guide
card_teaser: Step by step guide to install passbolt on Debian 10
card_position: 1
icon: fa-server
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: Debian 10 (Buster)
ignore_card: true
permalink: hosting/install/ce/debian-10-buster.html
---

{% assign product = 'ce' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = 'latest' %}
{% assign distributionSlug = 'debian-10' %}
{% assign distributionLabel = 'Debian 10 (Buster)' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/install.md column="7" %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr warning"
    content="This is an old method to install passbolt, please considering using the debian package"
    link="debian/debian.html"
    ask="Install passbolt with debian package"
%}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include aside/ce-install-pro-cta.html %}

{% include layout/row_end.html %}
