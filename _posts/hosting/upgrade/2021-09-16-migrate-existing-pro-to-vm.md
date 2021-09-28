---
title: Migrate an existing Passbolt PRO to Virtual Machine
date: 2021-09-16 00:00:00 Z
description: Migrate an existing Passbolt PRO to Virtual Machine
categories: [hosting,upgrade,pro]
card_teaser: Migrate an existing Passbolt PRO to Virtual Machine 
card_title: Migrate to new Virtual Machine
card_position: 9
sidebar: [hosting, upgrade]
passbolt_version: pro
icon: fa-server
layout: default
slug: migrate-existing-pro-to-virtual-machine
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = '10' %}
{% assign distributionVersionName = 'buster' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Debian' %}
{% assign distributionUpgradeGuide = 'https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/upgrade/upgrade-existing-to-new-vm.md %}
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
