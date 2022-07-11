---
title: Update passbolt on Ubuntu
date: 2021-11-26 00:00:00 Z
description: How to update your server on Ubuntu.
card_teaser: Guide for instances installed using Ubuntu package.
card_title: Update for Ubuntu
card_position: 2
icon: fa-ubuntu
categories: [hosting, update]
sidebar: hosting
layout: default
slug: ubuntu_package
permalink: /:categories/:slug.html
---

{% assign distribution = 'ubuntu' %}
{% assign distributionLabel = 'Ubuntu' %}
{% assign distributionPackage = 'apt' %}
{% assign webServerUser = 'www-data' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/update/package-update.md %}

{% include hosting/update/in-case-of-issues.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
class="tldr"
content="Your installation is not based on a Ubuntu package?"
link="/hosting/upgrade/ce/migrate-to-ubuntu.html"
ask="Migrate passbolt to Ubuntu package"
%}

{% include aside/message.html
class="tldr notice"
content="Are you experiencing issues when updating passbolt?"
link="https://community.passbolt.com/c/installation-issues"
ask="Ask the community!"
button="primary"
%}
{% include aside/message.html %}
{% include layout/row_end.html %}
