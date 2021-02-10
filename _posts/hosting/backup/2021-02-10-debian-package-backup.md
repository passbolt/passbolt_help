---
title: Debian package
date: 2021-02-10 00:00:00 Z
description: Debian package passbolt install backup
categories: [hosting,backup]
sidebar: hosting
layout: default
slug: debian
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include hosting/backup/backup_intro.md %}

#### 1. The database

A simple script using [mysqldump](https://mariadb.com/kb/en/mariadb/mysqldump/)
would work. For instance:

```bash
mysqldump -u[user] -p[pass] db > /path/to/backup.sql
```

#### 2. The configuration files

Passbolt debian package stores all configuration files under `/etc/passbolt/*`

This includes:
  - Gpg serverkeys under `/etc/passbolt/gpg/*`
  - Configuration files such as passbolt.php `/etc/passbolt/passbolt.php`

Back this files up with the following example:

```bash
tar cvfz passbolt-config.tar.gz /etc/passbolt
```

#### 2. The avatars

Back up `/usr/share/php/passbolt/webroot/img/avatar` to avoid losing
the profile images.

```bash
tar cvfz passbolt-avatar.tar.gz /usr/share/php/passbolt/webroot/img/avatar
```

{% include hosting/backup/backup_collaborators_keys.md %}

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
