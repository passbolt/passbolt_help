---
title: Migrate from install scripts to debian package
date: 2020-06-20 00:00:00 Z
description: Migrate from install scripts to debian package
categories: [hosting,upgrade,ce]
card_teaser: Migrate from installation scripts to debian package
card_title: Migrate to debian package
sidebar: [hosting, upgrade]
passbolt_version: ce
icon: fa-server
layout: default
slug: migrate-to-debian
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/upgrade/upgrade-to-debian-pkg.md %}
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
