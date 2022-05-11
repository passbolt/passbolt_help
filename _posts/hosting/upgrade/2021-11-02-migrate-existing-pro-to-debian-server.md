---
title: Migrate an existing Passbolt PRO to a new Debian server 
date: 2021-11-02 00:00:00 Z
description: Migrate an existing Passbolt PRO to a new Debian server
categories: [hosting,upgrade,pro]
card_teaser: Migrate an existing Passbolt PRO to a new Debian server 
card_title: Migrate to new Debian server
card_position: 8
sidebar: [hosting, upgrade]
passbolt_version: pro
icon: fa-debian
layout: default
slug: migrate-existing-pro-to-debian-server
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = '11' %}
{% assign distributionVersionName = 'buster' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Debian' %}
{% assign distributionUpgradeGuide = 'https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html' %}
{% assign distributionPackage = 'apt' %}
{% assign webServerUser = 'www-data' %}
{% assign databaseEngine = 'mariadb' %}

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
