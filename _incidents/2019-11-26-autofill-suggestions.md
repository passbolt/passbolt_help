---
title:
date: 2019-11-26 00:00:00 Z
description:
categories: [incidents]
layout: incidents
slug: 2019-11-26 XSS on resource URLs
permalink: /incidents/20191126_autofill_suggestions
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Bug Bounty: Autofill suggestions logic flaw

As part of Passbolt Bug Bounty program, security researcher René Kroka reported a new vulnerability affecting the 
extension.

A fix has been automatically rolled out as part of the web extension auto update mechanism. If you have disabled 
automatic updates, please update your extension manually.

### Summary
<table class="table-parameters">
<tr>
    <td><strong>Product affected: </strong></td>
    <td>Passbolt browser extension</td>
</tr>
<tr>
    <td><strong>Version affected: </strong></td>
    <td>v2.11.1 and below.</td>
</tr>
<tr>
    <td><strong>Version fixed: </strong></td>
    <td>v2.11.2</td>
</tr>
<tr>
    <td><strong>Affected component: </strong>&nbsp;</td>
    <td>Autofill suggestions</td>
</tr>
<tr>
    <td><strong>Vulnerability Type: </strong></td>
    <td><a href="https://cwe.mitre.org/data/definitions/840.html">
            Business Logic Errors (CWE-840)
        </a>
    </td>
</tr>
<tr>
    <td><strong>CVSS Score: </strong></td>
    <td>
        <a href="https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator?vector=AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N/E:H/RL:O/RC:C">
            6.2 (Medium)
        </a>
    </td>
</tr>
</table>

### Description

An attacker can craft a malicious page and URL so that the user is tricked into using passbolt to autofill 
some credentials on the wrong domain.

Prior to v2.11.2 Passbolt Extension an attacker, for example, could create a page with the following url: 
https://attacker.com/?https://valid-domain.com&https://valid-domain2.com Passbolt would wrongfully suggest the 
valid domain as part of the suggestions of credentials that could be used on the given url.

### Impact of issue

An attacker could use this flaw as part of a larger phishing campaign to capture a given user credential, or 
credentials one domain at a time. To our perspective the impact is limited by the fact that it requires two manual 
user interactions. Moreover passbolt never autofills credentials without a user confirmation.

### Fix

Passbolt since v2.11.2 checks if the domain of the current url tab is matching the domain of the credentials stored in 
passbolt. If a subdomain is defined in the credential stored in passbolt, the suggestion will only be presented for 
that given subdomain (e.g. mail.app.com will not be suggested for calendar.app.com). If no subdomain is defined in 
the credential stored in passbolt all subdomain urls will be matched as valid for suggestions (e.g. app.com will be 
suggested for mail.app.com).

### Event timeline

*   2019-11-17: Security researcher notifies passbolt team about the issue.
*   2019-11-17: Passbolt acknowledges the issue and start working on a fix.
*   2019-11-20: Fix is ready and included as part of v2.11.2 release UAT.
*   2019-11-21: Passbolt publishes a fix.

{% include date/updated.html %}
{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

<div class="tldr message success">
    <h4>Current status:</h4>
    1. Acknowledge issue with reporter<br/>
    2. Get a fix/patch prepared<br/>
    3. Release new version<br/>
    4. Prepare a report about the issue<br/>
    <strong>5. Feature the problem on an incident page</strong>
    <h5>Last updated: 2019-12-06 11:00:00 CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}
