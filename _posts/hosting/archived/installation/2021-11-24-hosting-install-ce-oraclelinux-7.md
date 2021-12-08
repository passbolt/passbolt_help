---
title: Install Passbolt CE on OracleLinux 7
date: 2021-11-24 00:00:00 Z
description: How to install Passbolt CE on
card_title: OracleLinux 7
card_teaser: Install passbolt CE on OracleLinux
card_position: 10
icon: fa-server
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: oraclelinux-7
archived: true
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign distribution = 'oraclelinux' %}
{% assign distributionVersion = '7' %}
{% assign distributionSlug = 'oraclelinux' %}
{% assign distributionLabel = 'OracleLinux' %}
{% assign distributionPackage = 'yum' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr warning"
    content="This documentation is relative to an old distribution, please consider installing passbolt on the latest OracleLinux"
    link="oraclelinux.html"
    ask="Read install manual"
%}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include layout/row_end.html %}
