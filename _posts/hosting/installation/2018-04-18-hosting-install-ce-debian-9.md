---
title: Install Passbolt CE on Debian 9 (Stretch)
date: 2018-11-13 00:00:00 Z
description: How to install Passbolt CE on Debian 9 (Stretch)
card_title: Debian
card_teaser: Step by step guide to install passbolt CE on Debian 9
card_position: 1
icon: fa-server
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: Debian 9 (Stretch)
ignore_card: true
permalink: hosting/install/ce/debian-9-stretch.html
---

{% assign product = 'ce' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = '9' %}
{% assign distributionSlug = 'debian-9' %}
{% assign distributionLabel = 'Debian 9 (Stretch)' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/install.md column="7" %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr warning"
    content="Please note: This article is for an old version of debian, please consider upgrading."
    link="https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html"
    ask="How to upgrade debian"
%}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include aside/contribute.html %}

{% include aside/ce-install-pro-cta.html %}

{% include aside/message.html %}
{% include layout/row_end.html %}
