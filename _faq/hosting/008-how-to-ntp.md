---
title: How to set up NTP
slug: set-up-ntp
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2022-12-05 00:00:00 Z
---

## Table of contents:

- [Table of contents:](#table-of-contents)
- [Introduction](#introduction)
- [Ubuntu](#ubuntu)
- [Debian](#debian)
- [RedHat](#redhat)
- [OpenSUSE](#opensuse)
- [Oracle Linux](#oracle-linux)
- [Fedora](#fedora)

## Introduction
This page is intended to give you the resources to set up NTP(or suitable equivalent) on the main distrobutions that we support. NTP is important for two main reasons with Passbolt. The first is in regards to GPG authentication. The other area where this becomes important is if you have MFA enabled as if the server and user device time get out of sync the codes will not work.

## Ubuntu
[Official Ubuntu Documentation](https://ubuntu.com/server/docs/network-ntp)

Ubuntu uses `chrony` for time synchronization. This package is not installed by default so you'll need to install it.

You can check that your server doesn't have this enabled by running the following:
```
timedatectl status
```
The output should look something like the following:
```
               Local time: Tue 2022-12-06 09:26:53 UTC
           Universal time: Tue 2022-12-06 09:26:53 UTC
                 RTC time: Tue 2022-12-06 09:26:52
                Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: no
              NTP service: inactive
          RTC in local TZ: no
```

The two most important lines here being:
```
System clock synchronized: no
              NTP service: inactive
```

To install `chrony` you'll need to run this command:
```
sudo apt install chrony
```

You can configure which time servers you want to use by editing `/etc/chrony/chrony.conf`

After you are done editing this file run the following to restart `chrony`
```
sudo systemctl restart chrony.service
```

To ensure this is running correctly you can once again run:
```
timedatectl status
```
Your output should now be something like:
```
               Local time: Tue 2022-12-06 09:30:40 UTC
           Universal time: Tue 2022-12-06 09:30:40 UTC
                 RTC time: Tue 2022-12-06 09:30:40
                Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
```
The important lines are:
```
System clock synchronized: yes
              NTP service: active
```
If only one of these has changed try running `timedatectl status` after another minute or two to give it time to be fully correct.
Once those are both correct, congratulations you've gotten NTP correctly set up!


## Debian
[Official Debian Documentation](https://wiki.debian.org/NTP)

A fresh Debian installation should already be properly configured for this. You can confirm this by running:
```
timedatectl status
```
The output should be something like this:
```
               Local time: Tue 2022-12-06 14:30:52 UTC
           Universal time: Tue 2022-12-06 14:30:52 UTC
                 RTC time: Tue 2022-12-06 14:30:53
                Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
```
The important lines are:
```
System clock synchronized: yes
              NTP service: active
```

## RedHat
[Official RedHat Documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/ch-configuring_ntp_using_ntpd)


## OpenSUSE
[Official OpenSUSE Documentation](https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-ntp.html)


## Oracle Linux
[Official Oracle Documentation](https://docs.oracle.com/cd/E26996_01/E18548/html/manager_ntpconfig.html)


## Fedora
[Official Fedora Documentation](https://docs.fedoraproject.org/en-US/fedora/latest/system-administrators-guide/servers/Configuring_NTP_Using_ntpd/)
