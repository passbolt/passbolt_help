---
title: Backing up a passbolt installation (v2)
date: 2018-03-14 00:00:00 Z
description: Backing up a passbolt installation (v2)
category: hosting
sidebar: hosting
layout: default
slug: backup
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Making regular backups is a critical aspect of managing a passbolt instance. Because passbolt stores important
information, it is equally important to have a backup strategy in place.

As a passbolt administrator it is your responsibility to define how often and when to perform backups.
Please automate and customize this process to match the needs and policies of your organization.

Here are some best practices to keep in mind:

* Ensure that the backups are taken at intervals that match your usage
* Take these backups off-site, or to another environment than the live one
* Make sure the backup is encrypted and stored in a safe location
* Practice drills and test the backups to make sure they work

## What to backup?

There are several elements you need to backup:

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

## What about the secret keys of my collaborators?

Every user private key should also be backed up, this is however not something we/you can automate easily for now (passbolt might provide a functionality for this in the future). We believe it is best if this is the responsibility of the end user. There is a dedicated step during the extension setup to that purpose.

As an administrator you should stress the importance of backing up secret keys to other users. For example this warning could be part of the initial information message sent to introduce passbolt to new users.

It is possible that having users back up their own keys may not be realistic or desirable in your case. In this case you can opt in for an alternative strategy such as setting up the account with/for them and taking a backup of the secret keys then. In the worst case scenario you could automate the process by installing a script on your users machine that would make that backup for you.

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
    link="/hosting/backup-v1"
    ask="See previous version"
%}

{% include aside/message.html %}
{% include layout/row_end.html %}
