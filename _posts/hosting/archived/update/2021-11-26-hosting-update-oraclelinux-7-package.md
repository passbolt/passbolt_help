---
title: Update passbolt on OracleLinux 7
date: 2021-11-26 00:00:00 Z
description: How to update your server on OracleLinux 7.
card_teaser: Guide for instances installed using OracleLinux package.
card_title: Update for OracleLinux 7
card_position: 10
icon: fa-server
categories: [hosting, update]
sidebar: hosting
layout: default
slug: oraclelinux-7
archived: true
permalink: /:categories/:slug.html
---

{% assign distribution = 'oraclelinux' %}
{% assign distributionLabel = 'OracleLinux' %}
{% assign distributionVersion = '7' %}
{% assign distributionPackage = 'dnf' %}
{% assign webServerUser = 'nginx' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
    content="**Important:** This page has been depreciated, see the [Oracle Linux](oraclelinux) update page for instructions."
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
