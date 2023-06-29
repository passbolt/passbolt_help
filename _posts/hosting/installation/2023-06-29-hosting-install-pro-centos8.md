---
title: Install Passbolt PRO on CentOS 8
date: 2023-06-29 00:00:00 Z
description: How to install Passbolt PRO on CentOS 8
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: centos
permalink: /:categories/:slug.html
archived: true
---

{% include messages/warning.html
    content="**Important:** This page has been depreciated, CentOS is not supported anymore."
%}

{% assign product = 'pro' %}
{% assign distribution = 'centos' %}
{% assign distributionVersion = '8' %}
{% assign distributionSlug = 'centos' %}
{% assign distributionLabel = 'CentOS' %}
{% assign distributionPackage = 'yum' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include aside/contribute.html %}

{% include layout/row_end.html %}
