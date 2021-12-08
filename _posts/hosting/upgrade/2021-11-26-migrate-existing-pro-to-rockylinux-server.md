---
title: Migrate an existing Passbolt PRO to a new RockyLinux server 
date: 2021-11-26 00:00:00 Z
description: Migrate an existing Passbolt PRO to new RockyLinux server
categories: [hosting,upgrade,pro]
card_teaser: Migrate an existing Passbolt PRO to new RockyLinux server 
card_title: Migrate to new RockyLinux server
card_position: 9
sidebar: [hosting, upgrade]
passbolt_version: pro
icon: fa-rockylinux
layout: default
slug: migrate-existing-pro-to-rockylinux-server
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'rockylinux' %}
{% assign distributionVersion = '8' %}
{% assign distributionVersionName = 'focal' %}
{% assign distributionSlug = 'rockylinux' %}
{% assign distributionLabel = 'RockyLinux' %}
{% assign distributionPackage = 'dnf' %}
{% assign webServerUser = 'nginx' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/upgrade/upgrade-existing-to-new-server.md %}
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
{% include aside/contribute.html %}
{% include layout/row_end.html %}
