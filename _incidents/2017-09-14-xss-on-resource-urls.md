---
title: XSS on resource URLs
date: 2017-09-14 00:00:00 Z
description: A debrief about the XSS on resource urls.
categories: [incidents]
layout: incidents
slug: 2017-09-14 XSS on resource URLs
permalink: /incidents/20170914_xss_on_resource_urls
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}
## Summary

Passbolt API version 1.6.4 is vulnerable to a XSS in the url field on the password workspace grid and sidebar.

*   **CVE:** [CVE-2017-1000442](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-1000442).
*   **Product affected:** Passbolt API, Passbolt Docker.
*   **Version affected:** v1.6.4 and below.
*   **Version fixed:** v1.6.5
*   **Affected component:** Resource url
*   **Vulnerability Type:** Cross Site Scripting (XSS)

### Impact of issue

Code execution in the passbolt javascript application context. The confidentiality of passwords, passphrase and 
private key is not affected.

### Attack vector / exploitation

A registered passbolt user can create a malicious resource url and share it with one or more victims on the same 
passbolt instance. By clicking on the url of that resource the victim will run the javascript defined by the attacker. 
This can be used by the attacker to modify or delete resources that the victim has access to, therefore creating data 
integrity or availability issues.

### Credits

This issue was found and reported by Sumit Sahoo.

## Other information

### How did this happen?

Initially, the passbolt resource url field implemented pretty strong validation rules allowing only certain url 
schemes such as http or https only. Naturally, with time, our early private alpha testers requested to allow other 
url schemes such as ftp or ssh, so more relaxed rules were introduced prior to the public launch. When the URL was 
later on made clickable the team missed the security implications of that decision.

### Are there other XSS vulnerability present?

Passbolt is supposed to be fairly well protected from XSS triggered by users because we forbid the use of characters 
such as ‘<’ and ‘>’ in the form data input / api. However in this particular case this protection was not enough.

### What are you doing about it?

With the upcoming version 2 we are in the process of relaxing user input even further, so to compensate for that 
extra risk we will review all our use of innerHTML function or similar (such as jQuery.html). We have already 
completed this review in the plugin with version 1.6.5\. We are also looking into adding additional automated XSS 
tests as part of our continuous integration processes.

### Event timeline

*   2017-09-13 22:30:00 CET: Passbolt team received a security vulnerability report from Sumit Sahoo.
*   2017-09-14 07:00:00 CET: early morning we acknowledge the issue, start working on a fix and start looking for similar issues in other part of the code.
*   2017-09-14 14:00:00 CET: We deploy a fix on the demo server
*   2017-09-14 14:00:00 CET: We notify the reporter that a fix has been deployed.
*   2017-09-14 14:30:00 CET: We publish the fix on github, the release notes and this report.

{% include date/updated.html %}
{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

<div class="tldr message success">
    <h4>Current status:</h4>
    1. Try first to reproduce the issue<br>
    2. Acknowledge to the reporter<br>
    3. Get a fix/patch prepared<br>
    4. Release new version.<br>
    5. Prepare a report about the issue.<br>
    <strong>6. Feature the problem in the release.</strong>
    <h5>Last updated: 2017-09-14 16:40:00 CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}
