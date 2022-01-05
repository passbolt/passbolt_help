---
title: Nginx Web Root Configuration Issue
date: 2018-05-09 00:00:00 Z
description: Nginx Web Root Configuration Issue
categories: [incidents]
layout: incidents
slug: 2018-05-09 Nginx Web Root Configuration Issue
permalink: /incidents/20180509_nginx_webroot_configuration
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Summary

The Nginx configuration file shipped with Passbolt Pro Edition (Docker container, Virtual Machine image, 
Installation script) and the Docker container of Passbolt Community Edition exposes files outside the 
application web root directory, creating a confidentiality issue for multiple directories and non php files.

Passbolt users using Nginx configuration file provided by passbolt are requested to review and update their 
configuration accordingly. The file location depends on the baseline system but most likely it is located in:

    /etc/nginx/conf.d/default.conf
    /etc/nginx/conf.d/passbolt_ssl.conf

Replace:

    root /var/www/passbolt;

By:

    root /var/www/passbolt/webroot;

The new default configuration file can be found on 
github: [https://github.com/passbolt/passbolt_docker/blob/master/conf/passbolt.conf](https://github.com/passbolt/passbolt_docker/blob/master/conf/passbolt.conf)

*   **CVE:** N/A.
*   **Product affected:** Passbolt Docker CE / PRO prior v2.5. Passbolt Pro VM and installation scripts.
*   **Version affected:** v2.0.4 and below
*   **Version fixed:** v2.0.5.
*   **Affected component:** Nginx configuration.
*   **Vulnerability Type:** Configuration Vulnerability.
*   **Severity:** High (CVSS 7.5).

### Attack vector / exploitation

An attacker could access information stored in non php files such as tmp, logs or config by guessing the url of that 
file. An attacker could gain valuable information from the logs and cache files if they manage to guess their urls.

## Other information

### How did you find out about it?

This configuration mistake failed to be seen during the initial review but was caught during a routine check of our 
configuration files.

### I am using apache am I affected?

No this only affect servers using nginx.

### Do I need to change my server keys?

Most likely no. The server key is used for the server verification step which impact is limited: it will mostly help 
in the case your server domain name is seized. If this is not a serious threat for you, you do not need to take action.

Changing your server key currently is not practical, it would require all your users to perform an account recovery 
which is obviously not desirable. In the future we will provide a system for you to push a new key directly to your 
user.

### Event timeline

*   2018-05-08 23:00 CET: Vulnerability details found during a routine check as part of v2.0.5 release.
*   2018-05-08 09:00 PM CET: We deploy a new configuration file on CE/PRO VM, Docker containers.
*   2018-05-09 19:00 PM CET: We publish this notice and update the release notes with this report

{% include date/updated.html %}
{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

<div class="tldr message success">
    <h4>Current status:</h4>
    1. Get a fix/patch prepared<br/>
    2. Release new version.<br/>
    3. Prepare a report about the issue.<br/>
    <strong>4. Feature the problem in the release.</strong>
    <h5>Last updated: 2018-05-09 12:00 PM CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}
