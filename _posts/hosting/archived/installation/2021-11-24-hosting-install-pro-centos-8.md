---
title: Install Passbolt PRO on CentOS 8
date: 2021-11-24 00:00:00 Z
description: How to install Passbolt PRO on
card_title: CentOS 8
card_teaser: Install passbolt PRO on CentOS
card_position: 10
icon: fa-centos
categories: [hosting,install,pro]
sidebar: hosting
layout: default
archived: true
slug: centos-8
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'centos' %}
{% assign distributionVersion = '8' %}
{% assign distributionSlug = 'centos' %}
{% assign distributionLabel = 'CentOS' %}
{% assign distributionPackage = 'dnf' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
    content="**Warning:** CentOS 8 is not one of our supported distributions. Please see our [install page](/hosting/install) to see which distributions we support."
%}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include aside/contribute.html %}

{% include layout/row_end.html %}
