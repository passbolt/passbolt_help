---
title: Using pro virtual machine appliance
card_title: Virtual machine
card_teaser: Use passbolt Pro virtual appliance
card_position: 2
date: 2018-04-09 00:00:00 Z
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

## Description

Passbolt Pro provides a virtual appliance in OVA format. Users can import this appliance on their private virtualization platform and start enjoying Passbolt Pro.
The VM includes the following software:
- Debian 9.4
- Nginx
- Php-fpm
- Mariadb
- Passbolt Pro preinstalled
- certbot
- haveged to fill the entropy pool faster
- Scripts to easy managing SSL setup of the VM

## Getting Passbolt Pro VM

Download the ova and the SHA512SUM.txt:

- [Passbolt Pro VM]()
- [SHA512SUM.txt]()

Import the ova file using virtualbox, vmware or any other platform that supports OVA files.

Once imported into users should be able to boot the VM and just point to the VM ip address with their web browser to initiate the passbolt install process.
However it is encouraged that users log in the VM and start the SSL setup proces.

```bash
VM login credentials:
username: passbolt
password: admin
```

## SSL setup process:

Passbolt Pro provides a set of ssl scripts to easily setup SSL. This scripts are located in:
```bash
/home/passbolt/passbolt_ssl_setup/passbolt_pro_debian_ssl_installer.sh
```

Executing the following command the script will guide you through the SSL setup:
```bash
$ sudo /home/passbolt/passbolt_ssl_setup/passbolt_pro_debian_ssl_installer.sh
```
