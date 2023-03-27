---
title: How to configure SSO with Google
date: 2023-01-18 00:00:00 Z
card_title: How to configure SSO with Google
icon: fa-address-book-o
categories: [configure, sso]
sidebar: configure
layout: default
slug: google
permalink: /:categories/:slug.html
redirect_from:
- /configure/sso
---

{% assign product = 'pro' %}
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
content="**Attention**: This feature is currently available only in Passbolt Pro Edition."
%}

Since version 4.0.0, Passbolt Pro Edition supports SSO with Google via Google Cloud Identity. 