---
title: Upgrade to Passbolt Pro
card_title: Upgrade to Passbolt Pro
card_teaser: Upgrade to Passbolt Pro
date: 2018-04-09 00:00:00 Z
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

## System requirements
- Apache or Nginx
- HTTPS
- PHP >= 7.0.0
- Mysql >= 5.5.59
- Composer
- GnuPG for PHP: for key verification and authentication.
- PHP extensions (that may or may not come by default): 
  - Cakephp default requirements: Intl, mbstring, simplexml
  - Image manipulation: gd or imagick
  - Database: Mysqlnd, pdo, pdo_mysql
  - Some general default: xsl, phar, posix, xml, zlib, ctype, curl, json.
- & more depending on your configuration (for example if you want to use memcache for sessions).

## Upgrade Passbolt CE to Passbolt Pro

There are two ways you can upgrade your Passbolt Community Edition (CE) to Passbolt Pro.

### 1. Upgrade on the same server
If the server running Passbolt CE matches the requirements listed above, you can upgrade to Passbolt Pro on the same server.
If it doesn't match, you can also upgrade your distribution packages. The main missing dependency is usually PHP7. (In Debian, using dotdeb replacements work like a charm).

- <a href="/hosting/upgrade/pro/upgrade-pro-from-ce-v1-same-server">Upgrade CE v1.x to Pro on the same server</a>
- <a href="/hosting/upgrade/pro/upgrade-pro-from-ce-v2">Upgrade CE v2.x to Pro</a>

### 2. Upgrade on a new server
If the server running Passbolt CE doesn't and cannot match the requirements listed above, you will need a new server to upgrade to Passbolt Pro.

This documentation is coming soon.


{% include updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
