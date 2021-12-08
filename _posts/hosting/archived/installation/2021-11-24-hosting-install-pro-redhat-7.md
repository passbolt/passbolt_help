---
title: Install Passbolt PRO on Red Hat 7
date: 2021-11-24 00:00:00 Z
description: How to install Passbolt PRO on
card_title: Red Hat 7
card_teaser: Install passbolt PRO on Red Hat
card_position: 10
icon: fa-server
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: redhat-7
archived: true
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'redhat' %}
{% assign distributionVersion = '7' %}
{% assign distributionSlug = 'redhat' %}
{% assign distributionLabel = 'Red Hat' %}
{% assign distributionPackage = 'yum' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr warning"
    content="This documentation is relative to an old distribution, please consider installing passbolt on the latest Red Hat"
    link="redhat.html"
    ask="Read install manual"
%}

{% include aside/pro-support.html %}

{% include aside/contribute.html %}

{% include layout/row_end.html %}
