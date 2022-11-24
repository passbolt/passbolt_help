---
title: Manual HTTPS configuration on Helm
date: 2021-12-16 00:00:00 Z
card_title: Helm manual HTTPS configuration
card_teaser: Configure HTTPS with user provided certificates
description: Configure HTTPS with user provided certificates on Helm
icon: fa-helm
card_position: 4
categories: [configure,https,pro,helm]
sidebar: configure
layout: default
slug: manual
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include configure/configure-helm-https-manual.md %}

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
