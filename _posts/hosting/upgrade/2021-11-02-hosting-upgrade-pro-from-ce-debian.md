---
title: Upgrade Passbolt from CE to Pro on Debian
card_title: From CE on Debian
card_teaser: Upgrade Passbolt from CE to Pro on Debian
card_position: 4
date: 2021-11-02 00:00:00 Z
description: Upgrade Passbolt from CE to Pro on Debian
icon: fa-debian
categories: [hosting,upgrade,pro]
sidebar: hosting
layout: default
slug: upgrade-pro-from-ce-debian
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% assign distribution = 'debian' %}
{% assign distributionVersion = '11' %}
{% assign distributionVersionName = 'buster' %}
{% assign distributionSlug = 'debian' %}
{% assign distributionLabel = 'Debian' %}
{% assign distributionUpgradeGuide = 'https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Pre-requisites

For this tutorial, you will need:
- A minimal Debian server.
- Passbolt CE Debian package installed.

## Upgrading passbolt

### 1. Take down your site

It is generally a good idea to stop running the site prior to the upgrade. This is to avoid having side effects
such as active users corrupting the data in the middle of an upgrade.

```bash
$ sudo systemctl stop nginx
```

### 2. Backup passbolt

First things first, as this is a sensitive operation a backup of the instance must be performed to prevent any data loss.
You can follow our [backup process](/hosting/backup/debian).

### 3. Upload your subscription key

You should copy your subscription key to `/etc/passbolt/license` and ensure the permissions are correct.

```bash
sudo chown root:www-data /etc/passbolt/license
sudo chmod 640 /etc/passbolt/license
```

### 4. Uninstall passbolt CE

Passbolt CE package should be removed prior to installing passbolt Pro.

```bash
sudo apt-get remove passbolt-ce-server
```

### 5. Update passbolt package repository

Add Passbolt package official GnuPG key from keys.mailvelope.com:

```
gpg --keyserver hkps://keys.mailvelope.com --receive-keys 0xDE8B853FC155581D 
```

Or alternatively from hkps://pgp.mit.edu or hkps://keys.gnupg.net.

Check that the GPG fingerprint matches `3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D`

```
gpg --list-key --with-fingerprint 0xDE8B853FC155581D
```

Must return:

```
pub   rsa2048 2020-05-18 [SC] [expires: 2022-05-18]
      3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D
uid           [ unknown] Passbolt SA package signing key <contact@passbolt.com>
sub   rsa2048 2020-05-18 [E] [expires: 2022-05-18]
```

Create GPG package keyring

```
gpg --export 0xDE8B853FC155581D | sudo tee \
  /usr/share/keyrings/passbolt-repository.gpg >/dev/null
```

Add passbolt repository:

```
cat << EOF | sudo tee /etc/apt/sources.list.d/passbolt.sources > /dev/null
Types: deb
URIs: https://download.passbolt.com/{{ product }}/{{ distribution }}
Suites: {{ distributionVersionName }}
Components: stable
Signed-By: /usr/share/keyrings/passbolt-repository.gpg
EOF
```

Update the apt indexes with the new passbolt apt repository:

```
sudo apt-get update
```

### 6. Install passbolt Pro

Now you can install the passbolt Pro package.

```bash
sudo apt-get install passbolt-pro-server
```

As you have already configured passbolt CE, and passbolt Pro relies on the same configuration, you should reply:

- **No** for mysql configuration
- **No** to nginx configuration

### 7. Migrate the data

Once the package installed, run the following command to migrate the data to passbolt Pro:

```bash
sudo -H -u www-data /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt migrate"
```

### 8. Clear the cache

Make sure you clear the application cache, to make sure any changes in the database structure are reflected in
model cache files:

```bash
sudo -H -u www-data bash -c "/usr/share/php/passbolt/bin/cake cache clear_all"
```

### 9. Take your site back up

Finally take passbolt back up:

```bash
sudo systemctl start nginx
```

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
class="tldr"
content="Your installation is not based on a debian package?"
link="/hosting/upgrade/ce/migrate-to-debian.html"
ask="Migrate passbolt to debian package"
%}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
