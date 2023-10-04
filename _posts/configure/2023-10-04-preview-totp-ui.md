---
title: How to preview a TOTP 
date: 2018-11-15 00:00:00 Z
card_title: How to preview a TOTP on the Web UI
card_teaser: How to preview a TOTP on the web interface
description: 
icon: fa-eye
categories: [configure, totp]
sidebar: configure
layout: default
slug: time-based-one-time-password-ui
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Since version 4.3.0, Passbolt supports creation of TOTP (Time-based One Time Password) via [Mobile](/configure/totp/time-based-one-time-password-mobile.html). However, it is still possible to preview those TOTP from the Web UI

{% include articles/figure.html
url="/assets/img/help/2023/10/totp_web_preview.png"
legend="Web UI - Preview TOTP"
width="850px"
%}

There is two types of TOTP:
- Standalone
  - That is the **Passbolt Community TOTP** resource, this is not linked to any passwords.
- Linked to an existing password
  - The resource **Passbolt** was existing before the creation of the TOTP and has been linked to it.

From the Web UI, you are able to preview any TOTP shown in the column "TOTP"

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/community.html %}

{% include layout/row_end.html %}