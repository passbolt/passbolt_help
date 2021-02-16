---
title: Using Passbolt pro virtual machine appliance
card_title: Virtual machine
card_teaser: Step by step guide to install passbolt Pro virtual appliance.
card_position: 5
date: 2021-02-02 00:00:00 Z
description: Start using passbolt pro virtual machine
icon: fa-server
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: vm
docker_tag: '-pro'
passbolt_version: Pro
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Passbolt Pro provides a virtual appliance in OVA format. Users can import this appliance on their private virtualization platform and start enjoying Passbolt Pro.
The VM includes the following software:
- Debian 10
- Nginx
- Php-fpm
- Mariadb
- Passbolt Pro preinstalled
- certbot
- haveged to fill the entropy pool faster

## 1. Getting started with Passbolt Pro VM

### 1.1 Download

Download the ova and the SHA512SUM.txt:

- [Passbolt Pro VM](https://www.passbolt.com/pro/download/vm/debian/latest)
- [SHA512SUM.txt](https://www.passbolt.com/pro/download/vm/debian/latest-checksum)

Import the ova file using virtualbox, vmware (ESXi >= 6.0) or any other platform that supports import OVA files.

Once imported into users should be able to boot the VM and just point to the VM ip address with their web browser to initiate the passbolt install process.


### 1.2 Credentials

The appliance performs some actions on the first boot:
- Creates ssh host keys
- Enables ssh
- Creates a set of random mariadb credentials for the mariadb server installed on the appliance
- Creates an empty database where passbolt can be installed.

For the first login the appliance comes with the following ssh default credentials:

```bash
VM login credentials:
username: passbolt
password: admin
```

The `passbolt` user is part of `sudo` group. There is no root password, so you cannot
login in as root. You can however create a shell as root with the default user:
```
sudo -s
```

### 1.3. HTTPS setup process:

Passbolt Pro VM uses passbolt debian package.  Depending on your needs there are two different options to setup nginx and SSL using the debian package:

- [Auto (Using Let's Encrypt)](/configure/https/{{ product }}/debian/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/{{ product }}/debian/manual.html)

{% include hosting/install/wizard/server.md databaseSection="hosting/install/wizard/database.md" %}

{% include hosting/install/wizard/admin.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
