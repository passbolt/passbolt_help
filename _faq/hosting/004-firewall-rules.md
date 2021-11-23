---
title: Firewall rules 
slug: firewall-rules
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2021-11-23 00:00:00 Z
---

You must allow these rules to make Passbolt work in a firewalled environment:

## Inbound rules

| Protocol name | Port number | Transport Layer Protocol | Comment                                              |
| ------------- | ----------- | ------------------------ | ---------------------------------------------------- |
| HTTP          | 80          | TCP                      | Optional, should be used only to redirect to HTTPS   |
| HTTPS         | 443         | TCP                      | To serve Passbolt through HTTPS                      |
{: .table-parameters }

## Outbound rules

| Protocol name | Port number | Transport Layer Protocol | Comment                                                                                                              |
| ------------- | ----------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| SMTP          | usually 587 | TCP                      | To send email notifications, used port depends of your SMTP server configuration, usually 25/TCP, 587/TCP or 465/TCP |
| DNS           | 53          | UDP                      | To be able to resolve SMTP server name, or download.passbolt.com to check for updates                                |
| NTP           | 123         | UDP                      | To make server synchronized to a NTP server. Mandatory to make GPG or MFA/OTP work                                   |
{: .table-parameters }