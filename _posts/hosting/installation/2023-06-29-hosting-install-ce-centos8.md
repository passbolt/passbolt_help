---
title: Install Passbolt CE on CentOS 8
date: 2023-06-29 00:00:00 Z
description: How to install Passbolt CE on CentOS 8
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: centos
permalink: /:categories/:slug.html
archived: true
---

{% assign product = 'ce' %}
{% assign distribution = 'centos' %}
{% assign distributionVersion = '8' %}
{% assign distributionSlug = 'centos' %}
{% assign distributionLabel = 'CentOS' %}
{% assign distributionPackage = 'yum' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
    content="**Important:** This page has been depreciated, CentOS is not supported anymore."
%}

{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include layout/row_end.html %}
