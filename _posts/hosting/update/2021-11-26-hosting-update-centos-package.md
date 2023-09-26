---
title: Update passbolt on CentOS
date: 2021-11-26 00:00:00 Z
description: How to update your server on CentOS.
card_teaser: Guide for instances installed using CentOS package.
card_title: Update for CentOS
card_position: 10
icon: fa-centos
categories: [hosting, update]
slug: centos
sidebar: hosting
layout: default
permalink: /:categories/:slug.html
---

{% assign distribution = 'centos' %}
{% assign distributionLabel = 'CentOS' %}
{% assign distributionPackage = 'yum' %}
{% assign webServerUser = 'nginx' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}
{% include messages/warning.html
    content="**Important:** You may want to consider a different distribution. CentOS 7 is expected to be end of life on 30 June 2024 so you will need to migrate to a different distribution before then."
%}
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
