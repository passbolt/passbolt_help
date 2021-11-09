---
title: Migrate an existing Passbolt CE to a new Docker
date: 2021-09-29 00:00:00 Z
description: Migrate an existing Passbolt CE to a new Docker
categories: [hosting,upgrade,ce]
card_teaser: Migrate an existing Passbolt CE to a new Docker 
card_title: Migrate to new Docker
card_position: 9
sidebar: [hosting, upgrade]
passbolt_version: ce
icon: fa-server
layout: default
new: true
slug: migrate-existing-ce-to-docker
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/upgrade/upgrade-existing-to-new-docker.md %}
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
