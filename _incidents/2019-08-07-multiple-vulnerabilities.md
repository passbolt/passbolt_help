---
title: Bug bounty results
date: 2019-08-07 00:00:00 Z
description: A debrief about security bug bounty results
categories: [incidents]
layout: incidents
slug: 2019-08-07 Bug bounty results
permalink: /incidents/20190807_multiple_vulnerabilities
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}
# Bug Bounty: multiple vulnerabilities

As part of Passbolt Bug Bounty program, security researcher René Kroka reported several vulnerabilities, one 
affecting the extension and three affecting the API.

## Vulnerability #1: Stored XSS on first/last name during setup

### Summary

<table class="table-parameters">
  <tbody>
    <tr>
      <td><strong>Product affected:</strong></td>
      <td>Passbolt API Community Edition, Pro Edition, Passbolt Cloud</td>
    </tr>
    <tr>
      <td><strong>Version affected:</strong></td>
      <td>v2.10 and below.</td>
    </tr>
    <tr>
      <td><strong>Version fixed:</strong></td>
      <td>v2.11</td>
    </tr>
    <tr>
      <td><strong>Affected component:</strong></td>
      <td>Setup or recovery start page.</td>
    </tr>
    <tr>
      <td><strong>Vulnerability Type: </strong></td>
      <td>
        <a href="https://cwe.mitre.org/data/definitions/79.html">
          Cross-site Scripting (XSS) - Stored (CWE-79)
        </a>
      </td>
    </tr>
    <tr>
      <td><strong>CVSS Score: </strong></td>
      <td>
        <a href="https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator?vector=AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H">
          6.8 (High)
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Description

An administrator can craft a user with a malicious first name and last name, using a payload such as
```
<svg onload="confirm(document.domain)">'); ?></svg>
```

The user will then receive the invitation email and click on the setup link. The setup start page served by the 
server will fire the XSS.

### Impact of issue

An administrator could use this exploit to edit the setup start page for a given user, for example, trick the user 
into installing another extension. Even though the severity of this issue in itself is high, the likelihood is low 
because the exploit will be visible in clear by the user in the email notification, and also requires an action 
from a malicious administrator.

### Fix

Sanitize the firstname and lastname in the page that is used to trigger the extension setup process.

Additionally since v2.11 some default CSP are inserted in the server response headers to prevent inline-scripts or 
3rd party domain scripts on pages served by the passbolt API. This is to cater for the case where the administrator 
has not set them up as part of the web server configuration.

## Vulnerability #2: Stored XSS in tags autocomplete dropdown

### Summary

<table class="table-parameters">
  <tbody>
    <tr>
      <td><strong>Product affected:</strong></td>
      <td>Passbolt API Pro Edition, Passbolt Cloud</td>
    </tr>
    <tr>
      <td><strong>Version affected:</strong></td>
      <td>v2.10 and below.</td>
    </tr>
    <tr>
      <td><strong>Version fixed:</strong></td>
      <td>v2.11</td>
    </tr>
    <tr>
      <td><strong>Affected component:</strong></td>
      <td>Tag form autocomplete.</td>
    </tr>
    <tr>
      <td><strong>Vulnerability Type: </strong></td>
      <td>
        <a href="https://cwe.mitre.org/data/definitions/79.html">
          Cross-site Scripting (XSS) - Stored (CWE-79)
        </a>
      </td>
    </tr>
    <tr>
      <td><strong>CVSS Score: </strong></td>
      <td>
        <a href="https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator?vector=AV:N/AC:L/PR:L/UI:R/S:U/C:H/I:H/A:H">
          8 (High)
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Description

A malicious logged in user can craft a shared tag containing an XSS payload and convert it to unicode in order to 
bypass validation. When another user edits the tag and wants to add other similar tags containing similar words, the 
tag containing the XSS will be suggested in the autocomplete and the XSS will be triggered by mouseover.

### Impact of issue

If no CSP are set on the webserver the malicious user will be able to run JavaScript of their choice in the page, 
for example to affect integrity (delete passwords) or confidentiality (copy encrypted data).

### Fix

The autocomplete library responsible for this issue was updated and a pull request to the maintainer will be proposed.

## Vulnerability #3: Tabnabbing when opening URI with menu "Open URI in a new tab"

### Summary

<table class="table-parameters">
  <tbody>
    <tr>
      <td><strong>Product affected:</strong></td>
      <td>Passbolt API Pro Edition, Passbolt Cloud</td>
    </tr>
    <tr>
      <td><strong>Version affected:</strong></td>
      <td>v2.10 and below.</td>
    </tr>
    <tr>
      <td><strong>Version fixed:</strong></td>
      <td>v2.11</td>
    </tr>
    <tr>
      <td><strong>Affected component:</strong></td>
      <td>Password grid URI “open in a new tab” functionality.</td>
    </tr>
    <tr>
      <td><strong>Vulnerability Type: </strong></td>
      <td>
        <a href="https://cwe.mitre.org/data/definitions/657.html">
          Violation of Secure Design Principles (CWE-657)
        </a>
      </td>
    </tr>
    <tr>
      <td><strong>CVSS Score: </strong></td>
      <td>
        <a href="https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator?vector=AV:N/AC:L/PR:L/UI:R/S:U/C:L/I:L/A:L">
          5 (Medium)
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Description

A user could create and share a resource with a malicious URI. When the victim opens with menu "Open URI in a
new tab" function, the malicious page has access to the window.opener object.

### Impact of issue

The newly opened malicious page can for example change the window.opener.location to redirect the user to a 
phishing page, or call a JavaScript function served by the AppJS on the user behalf for example to try to affect the 
integrity of the data.

### Fix

The code that opens a new window via window.open(); now open the tab with the noopener attribute.

## Vulnerability #4: OS Command Injection in CSV file export (Won’t Fix)

### Summary

<table class="table-parameters">
  <tbody>
    <tr>
      <td><strong>Product affected:</strong></td>
      <td>Passbolt Web Extension & Microsoft Excel or similar</td>
    </tr>
    <tr>
      <td><strong>Version affected:</strong></td>
      <td>v2.10 and below.</td>
    </tr>
    <tr>
      <td><strong>Version fixed:</strong></td>
      <td>Won't fix</td>
    </tr>
    <tr>
      <td><strong>Affected component:</strong></td>
      <td>CSV file export.</td>
    </tr>
    <tr>
      <td><strong>Vulnerability Type: </strong></td>
      <td>
        <a href="https://cwe.mitre.org/data/definitions/78.html">
          OS Command Injection (CWE-78)
        </a>
      </td>
    </tr>
    <tr>
      <td><strong>CVSS Score: </strong></td>
      <td>
        <a href="https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator?vector=AV:N/AC:L/PR:L/UI:R/S:U/C:L/I:L/A:L">
          5 (Medium)
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Description

A logged in user can create a malicious resource with for example the following payload:

```
=cmd|' /C notepad'!'A1'
```

When this file is exported as a CSV and opened in Excel (for example) the command will be interpreted.

### Impact of issue

Impact is relatively low as it requires user interactions and a "vulnerable" 3rd party software.

### Fix

We won’t fix this issue. Residual risk must be accepted by the users, i.e. they must trust sufficiently the passwords 
that have been shared with them in order for them to open the file in another software.

### Event timeline

*   2019-07-30: Security researcher notifies passbolt team about the issues.
*   2019-08-01: Security researcher notifies an additional issue.
*   2019-08-01: Passbolt acknowledges the issue and start working on a fix.
*   2019-08-05: Fixes are ready and included as part of v2.11 release UAT.
*   2019-08-07: Passbolt publishes a fix.

{% include date/updated.html %}
{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

<div class="tldr message success">
    <h4>Current status:</h4>
    1. Acknowledge issue with reporter<br/>
    2. Get a fix/patch prepared<br/>
    3. Release new version<br/>
    4. Prepare a report about the issue<br/>
    <strong>5. Feature the problem in the release</strong>
    <h5>Last updated: 2019-08-07 16:00:00 CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}
