---
title: Migrate an existing Passbolt CE to a new Ubuntu server 
date: 2021-09-16 00:00:00 Z
description: Migrate an existing Passbolt CE to a new Ubuntu server
categories: [hosting,upgrade,ce]
card_teaser: Migrate an existing Passbolt CE to a new Ubuntu server 
card_title: Migrate to new Ubuntu server
card_position: 9
sidebar: [hosting, upgrade]
passbolt_version: ce
icon: fa-ubuntu
layout: default
slug: migrate-existing-ce-to-ubuntu-server
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% assign distribution = 'ubuntu' %}
{% assign distributionVersion = '20.04' %}
{% assign distributionVersionName = 'focal' %}
{% assign distributionSlug = 'ubuntu' %}
{% assign distributionLabel = 'Ubuntu' %}
{% assign distributionPackage = 'apt' %}
{% assign webServerUser = 'www-data' %}
{% assign databaseEngine = 'mysql' %}

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
