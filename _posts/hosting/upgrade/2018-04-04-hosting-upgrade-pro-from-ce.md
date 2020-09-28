---
title: Upgrade to Passbolt Pro
card_title: Introduction
card_teaser: Need help to select which upgrade method to use?
date: 2018-04-15 00:00:00 Z
description: Upgrade to Passbolt Pro
icon: fa-server
categories: [hosting,upgrade,pro]
sidebar: hosting
layout: default
slug: upgrade-pro-from-ce
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

There are many ways you can upgrade your version 1 or version 2 Community Edition (CE) to Passbolt Pro.
This page list the options and will point you to the right manual.

### Upgrade from CE v2

- [Upgrade CE v2.x to Pro using source](/hosting/upgrade/pro/upgrade-pro-from-ce-v2)
- [Upgrade CE v2.x to Pro using docker](/hosting/upgrade/pro/upgrade-pro-from-v2-docker)


### Upgrade from v1

#### Using docker
- [Upgrade CE v2.x to Pro using docker](/hosting/upgrade/pro/upgrade-pro-from-v1-docker)


#### Using source
If the server running Passbolt V1 doesn't and cannot match the requirements listed below, you will need a new server 
to upgrade to Passbolt Pro.

- [Upgrade CE v1.x to Pro on the same server](/hosting/upgrade/pro/upgrade-pro-from-ce-v1-same-server)
- [Upgrade CE v1.x to Pro on a new server](/hosting/upgrade/pro/upgrade-pro-from-ce-v1-new-server)

### Can I upgrade on the same server?
If the server running Passbolt v1 matches the requirements listed below, you can upgrade to Passbolt Pro on the same server.
If it does not match, you can also upgrade your distribution packages, or install on a new server.
Generally the major dependency upgrade is PHP7. (In Debian, using dotdeb replacements work like a charm).

#### Requirements
{% include hosting/v2-requirements.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
