---
title: Backing up a passbolt installation (v1)
date: 2017-06-15 00:00:00 Z
card_teaser: Backing up a from source passbolt installation
card_title: From source (v1)
icon: fa-download
categories: [hosting,backup]
sidebar: hosting
layout: default
slug: backup-v1
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}
{% include hosting/backup/backup_intro.md %}

#### 1. The database

This can be easily scripted using [mysqldump](https://mariadb.com/kb/en/mariadb/mysqldump/) for example:
```bash
mysqldump -u[user] -p[pass] db > /path/to/backup.sql
```
#### 2. The avatars

The images in `app/webroot/img/public` also need to be backed up, otherwise profile images will be lost.

#### 3. The server public and private keys
```bash
gpg --export-secret-key -a "passbolt user" > private.key
```
#### 4. The application configuration

The files located in `app/Config` such as core.php, app.php, email.php, database.php. It is optional, but it can save you some time if you need to rebuild a new instance.

{% include hosting/backup/backup_collaborators_keys.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr warning"
    content="This article is for passbolt v1, make sure you check the newest version of this article if you are using a more recent version."
    link="/hosting/backup"
    ask="See latest version"
%}

{% include aside/message.html
    class="tldr notice"
    content="Do you have a question about backups? Do you want to share your experience and best practices?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Get in touch!"
    button="primary"
%}
{% include aside/message.html %}
{% include layout/row_end.html %}
