---
title: Helm install
card_title: Helm
card_teaser: Step by step guide to install passbolt Pro using Helm.
card_position: 3
date: 2022-02-06 00:00:00 Z
description: Install passbolt Pro using Helm
icon: fa-helm
categories: [hosting,install,pro]
sidebar: hosting
layout: default
new: true
slug: helm
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}


{% include hosting/helm/helm-warning.md %}

{% include hosting/helm/helm-system-requirements.md %}
{% include hosting/helm/helm-install-usage.md %}
{% include hosting/helm/helm-first-user-creation.md %}
{% include hosting/helm/helm-going-further.md %}


{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/helm.html %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
