---
title: Generate an Organization Recovery Key manually
date: 2021-12-23 00:00:00 Z
card_teaser: How to generate an Organization Recovery Key (ORK)
card_title: Generate account recovery key
description: How to manually generate an Organization Recovery Key (ORK)
icon: fa-key
categories: [configure]
sidebar: configure
layout: default
slug: generate-organization-recovery-key
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include configure/generate-organization-recovery-key.md %}

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
