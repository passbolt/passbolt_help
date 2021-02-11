---
title: Backing up a passbolt installation
date: 2018-03-14 00:00:00 Z
card_teaser: Backing up a from source passbolt installation
card_title: From source 
icon: fa-download
description: Backing up a from source passbolt installation
categories: [hosting,backup]
sidebar: hosting
layout: default
slug: from_source
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

The images in `webroot/img/public` also need to be backed up, otherwise profile images will be lost.

#### 3. The server public and private keys

You can copy the server OpenPGP key in `config/gpg` or export it directly from GnuPG.

To export it using GnuPG you can use the email attached to your keys to identify them or use the fingerprint.
In order to find the fingerprint if you do not know the email attached to your keys:

```bash
sudo -H -u www-data /bin/bash -c "gpg --list-keys"
```

If you know the email attached to your keys you can use it to export your keys as follows:

```bash
sudo -H -u www-data /bin/bash -c "gpg --export-secret-keys <identifier> > /var/www/passbolt/config/gpg/private.asc" www-data
sudo -H -u www-data /bin/bash -c "gpg --export <identifier> > /var/www/passbolt/config/gpg/public.asc" www-data
```
Where <identifier> can be the key fingerprint or the email associated with the key you want to export.

##### Note

Be sure to **remove the expiration time** before importing the keys at backup restore. While restoring the backup, the imported keys cannot have an expiry date.


#### 4. The application configuration

The file located in `config/passbolt.php`. It is optional, but it can save you some time if you need to rebuild a new instance.

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

{% include aside/message.html
    class="tldr"
    content="Are you still using passbolt v1? Check out the previous version of this article."
    link="/hosting/backup/backup-v1"
    ask="See previous version"
%}

{% include aside/message.html %}
{% include layout/row_end.html %}
