---
title: Migrate an existing Passbolt PRO to a new CentOS server 
date: 2021-11-26 00:00:00 Z
description: Migrate an existing Passbolt PRO to new CentOS server
categories: [hosting,upgrade,pro]
slug: migrate-existing-pro-to-centos-server
permalink: /:categories/:slug.html
archived: true
---

{% include messages/warning.html
    content="**Important:** This page has been depreciated, CentOS is not supported anymore."
%}
{% include hosting/install/packages/debian/install-debian-package.md %}


{% assign product = 'pro' %}
{% assign distribution = 'centos' %}
{% assign distributionVersion = '7' %}
{% assign distributionVersionName = 'focal' %}
{% assign distributionSlug = 'centos' %}
{% assign distributionLabel = 'CentOS' %}
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
