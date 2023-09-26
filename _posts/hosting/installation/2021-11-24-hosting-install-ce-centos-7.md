---
title: Install Passbolt CE on CentOS 7
date: 2021-11-24 00:00:00 Z
description: How to install Passbolt CE on CentOS 7
card_title: CentOS 7
card_teaser: Install passbolt CE on CentOS
card_position: 10
icon: fa-centos
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: centos
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign distribution = 'centos' %}
{% assign distributionVersion = '7' %}
{% assign distributionSlug = 'centos' %}
{% assign distributionLabel = 'CentOS' %}
{% assign distributionPackage = 'yum' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}
{% include messages/warning.html
    content="**Important:** You may want to consider a different distribution. CentOS 7 is expected to be end of life on 30 June 2024 so you will need to migrate to a different distribution before then."
%}
{% include hosting/install/packages/debian/install-debian-package.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include layout/row_end.html %}
