---
title: Update passbolt on CentOS
date: 2021-11-26 00:00:00 Z
description: How to update your server on CentOS.
card_teaser: Guide for instances installed using CentOS package.
card_title: Update for CentOS
card_position: 10
icon: fa-centos
categories: [hosting, update]
sidebar: hosting
layout: default
slug: centos
permalink: /:categories/:slug.html
---

{% assign distribution = 'centos' %}
{% assign distributionLabel = 'CentOS' %}
{% assign distributionPackage = 'dnf' %}
{% assign webServerUser = 'nginx' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/update/package-update.md %}

{% include hosting/update/in-case-of-issues.md %}

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
{% include layout/row_end.html %}
