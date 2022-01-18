---
title: How to configure HTTPS with RPM package
date: 2021-12-16 00:00:00 Z
card_title: How to configure HTTPS with RPM package
card_teaser: Configure HTTPS with RPM package
description: Configure HTTPS with RPM package
icon: fa-redhat
card_position: 5
categories: [configure,https,ce]
sidebar: configure
layout: default
slug: rpm
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include configure/configure-rpm-package-nginx-https-auto.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when installing passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}

{% include layout/row_end.html %}
