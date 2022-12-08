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
- [Docker](#docker)

## Introduction
This page is intended to give you the resources to set up NTP(or suitable equivalent) on the main distrobutions that we support. NTP is important for two main reasons with Passbolt. The first is in regards to GPG authentication. The other area where this becomes important is if you have MFA enabled as if the server and user device time get out of sync the codes will not work.

## Ubuntu
{% include faq/ntp/ubuntu.md %}

## Debian
{% include faq/ntp/debian.md %}

## RedHat
{% include faq/ntp/redhat.md %}

## OpenSUSE
{% include faq/ntp/opensuse.md %}

## Oracle Linux
{% include faq/ntp/oracle.md %}

## Fedora
{% include faq/ntp/fedora.md %}

## Docker
{% include faq/ntp/docker.md %}
