---
title: Auto configure HTTPS with Let's Encrypt on Digital Ocean
date: 2022-03-29 00:00:00 Z
card_title: Digital Ocean auto configure HTTPS
card_teaser: Auto configure HTTPS with Let's Encrypt on Digital Ocean
description: Auto configure HTTPS with Let's Encrypt on Digital Ocean
icon: fa-digitalocean
card_position: 10
categories: [configure,https,ce,digital-ocean]
sidebar: configure
layout: default
slug: auto
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign lets_encrypt_requirement = 'yes' %}
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include configure/configure-debian-package-nginx-https-auto.md %}

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
