---
title: Migrate an existing Passbolt CE to a new Fedora server 
date: 2021-11-26 00:00:00 Z
description: Migrate an existing Passbolt CE to a new Fedora server
categories: [hosting,upgrade,ce]
card_teaser: Migrate an existing Passbolt CE to a new Fedora server 
card_title: Migrate to new Fedora server
card_position: 9
sidebar: [hosting, upgrade]
passbolt_version: ce
icon: fa-fedora
layout: default
slug: migrate-existing-ce-to-fedora-server
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign distribution = 'fedora' %}
{% assign distributionVersion = '37' %}
{% assign distributionVersionName = 'focal' %}
{% assign distributionSlug = 'fedora' %}
{% assign distributionLabel = 'Fedora' %}
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
