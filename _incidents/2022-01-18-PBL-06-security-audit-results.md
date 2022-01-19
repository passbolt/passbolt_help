---
title: PBL-06 Security audit results
date: 2022-01-19 00:00:00 Z
description: PBL-06 Security audit results
categories: [incidents]
layout: incidents
slug: PBL-06 Security audit results
permalink: /incidents/220220118_PBL-06-security-audit-results
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction

As part of the security audit of the mobile application, Cure53 team, found 8 issues that have been solved
with v3.5. This audit concerned all the changes related to the implementation of the mobile features for the
API as well as both Android and iOS mobile application. Additionally this audit included a review of the community
project "passbolt go cli".

As mentioned in the previous incident report, that contained an immediate fix for the only "High" ranked issue
the previous version affected was 3.3, where the mobile feature flag was disabled by default. 

All of the issues for the projects managed by passbolt as been fixed or a mitigation implemented as of 19th Jan 2021.

You can read more about the security audit by [reading the full report](/assets/files/PBL-06-report.pdf).

Passbolt team would like to express a warm thank you to the security researchers from Cure53 team for their collaboration on 
this project.

## Vulnerabilities summary 

<table class="table-parameters">
  <thead>
    <tr>
      <th>ID</th>
      <th>Project</th>
      <th>Issue name</th>
      <th>Severity</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PBL-06-001</td>
      <td>Android</td>
      <td>Fingerprint bypass via activity invocation</td>
      <td>Low</td>
      <td>Mitigated (1)</td>
    </tr>
    <tr>
      <td>PBL-06-002</td>
      <td>iOS</td>
      <td>Possible leaks & Phishing via URL scheme hijacking</td>
      <td>Medium</td>
      <td>Fixed in v1.3</td>
    </tr>
    <tr>
      <td>PBL-06-005</td>
      <td>Android</td>
      <td>Account information access via debug messages</td>
      <td>Medium</td>
      <td>Fixed in v1.1</td>
    </tr>
    <tr>
      <td>PBL-06-006</td>
      <td>iOS</td>
      <td>Missing jailbreak detection on iOS</td>
      <td>Medium</td>
      <td>Fixed in v1.3</td>
    </tr>
    <tr>
      <td>PBL-06-007</td>
      <td>Android</td>
      <td>Missing root detection in Android</td>
      <td>Medium</td>
      <td>Fixed in v1.3</td>
    </tr>
    <tr>
      <td>PBL-06-008</td>
      <td>API</td>
      <td>JWT key confusion leads to authentication bypass</td>
      <td>High</td>
      <td>Fixed in v3.3.1</td>
    </tr>
    <tr>
      <td>PBL-06-009</td>
      <td>GO CLI (Community)</td>
      <td>Improper file permissions for configuration file</td>
      <td>High</td>
      <td>Maintainer notified</td>
    </tr>
    <tr>
      <td>PBL-06-008</td>
      <td>API</td>
      <td>Email HTML injection in JWT attack notifications</td>
      <td>High</td>
      <td>Fixed v3.5</td>
    </tr>
  </tbody>
</table>


### (1) Note PBL-06-001 WP1: Fingerprint bypass via activity invocation (LOW)

Here are some additional information for the issue marked as mitigated. From the report:

"The Android app implements a feature whereby the app locks itself when the user switches to another app.
It requires the user to enter the passphrase or the fingerprint in order to continue accessing the authenticated
portion of the application. However, it was found that this feature can be trivially bypassed by invoking the
MainActivity via an ADB command. This finding does not allow the attacker to view the passwords in plain-text and 
it can only be leveraged until the currently allocated JWT token expires (its lifetime from creation is five minutes)."

According to our test it is not possible to run ADB commands using stock androids. We were able to reproduce the
issue on Lineage OS if the user enable "rooted debugging" in the developer option (which requires pin entry).
Currently Android passbolt app will display a notification if the device is considered rooted, which includes this flag.
It is the responsability of the user to either not use a rooted devices or accept the potential issues.

In Q1 2022 the team will refactor the application to prevent that a fingerprint check can be
bypassed by invoking another activity directly.

### Miscellaneous issues

Additionally, the following issues where reported. While they are not considered as vulnerabilities as such
they have been reviewed and will be addressed in the future if they are not already fixed.

- PBL-06-003: Android app hardening recommendations (Fixed)
- PBL-06-004: Android binary hardening recommendations (In review)
- PBL-06-011: Missing ACL checks on TransfersView controller (Fixed v3.5)
- PBL-06-012: URL path traversal via command line flags (Maintainer notified
- PBL-06-013: Improper escaping of resource fields (Maintainer notified)
- PBL-06-014: Server packages with known vulnerabilities (Process already in place)
- PBL-06-015: Missing private key revocation process (In backlog)


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
    <h5>Last updated: 2022-01-19 08:30:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}
