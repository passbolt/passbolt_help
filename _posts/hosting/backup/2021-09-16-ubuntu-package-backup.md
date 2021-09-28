---
title: Ubuntu package
date: 2021-09-16 00:00:00 Z
card_teaser: Backing up an ubuntu package passbolt installation
card_title: Ubuntu package
icon: fa-download
card_position: 3
categories: [hosting,backup]
sidebar: hosting
layout: default
slug: ubuntu
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'ubuntu' %}
{% assign distributionVersion = '20.04' %}
{% assign distributionVersionName = 'focal' %}
{% assign distributionSlug = 'ubuntu' %}
{% assign distributionLabel = 'Ubuntu' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/backup/backup_package_full_page.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr notice"
    content="Do you have a question about backups? Do you want to share your experience and best practices?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Get in touch!"
    button="primary"
%}


{% include aside/message.html %}
{% include layout/row_end.html %}
