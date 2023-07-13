---
title: PBL-08 Security audit results
date: 2023-07-10 00:00:00 Z
description: PBL-08 Security audit results
categories: [incidents]
layout: incidents
slug: PBL-08 Security audit results
permalink: /incidents/20230710_PBL-08-security-audit-results
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction

As part of the security audit of Single Sign On feature, Cure53 team, found 8 issues that have been solved progressively
by order of importance with v3.11 to v4.1. This week-long audit involved several security researchers with a main focus on 
all the changes related to the implementation of the SSO on the API and client side (browser extension and styleguide). 
Additionally, this audit included a general review of the implementations of the best practices.

Quoting the conclusion of the report: 
"One can confirm that the focus applications have proven robust against the multitude of attack scenarios 
instigated from a server and client-side perspective. The ten-day allocation for this examination yielded a 
total of eight findings, which is a praiseworthy result for the Passbolt team. The volume and severity markers 
attached to the findings is moderate for a scope of this magnitude. The absence of any major issues - with no 
Critical-assigned vulnerability in particular - underlines the Passbolt complex’s security strength. Even so, 
the identified flaws represent a golden opportunity to integrate additional safeguard measures."

All the issues have been fixed or a mitigation has been implemented as of 10th July 2023.

You can read more about the security audit by [reading the full report](/assets/files/PBL-08-report.pdf).

Passbolt team would like to express a warm thank you to the security researchers from Cure53 team for their 
valuable contribution to this project.

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
      <td>PBL-08-001</td>
      <td>Browser Extension</td>
      <td>Credentials Leakage via Clickjacking</td>
      <td>High</td>
      <td>Fixed in v3.11.1</td>
    </tr>
    <tr>
      <td>PBL-08-007</td>
      <td>Passbolt API</td>
      <td>SSO-Design prompt=none allows for auth bypass</td>
      <td>Medium</td>
      <td>Fixed v4.1</td>
    </tr>
    <tr>
      <td>PBL-08-002</td>
      <td>Passbolt styleguide</td>
      <td>Passphrase Retained In Memory Post-Logout</td>
      <td>Low</td>
      <td>Fixed v3.11</td>
    </tr>
    <tr>
      <td>PBL-08-003</td>
      <td>Passbolt API</td>
      <td>Lack of proper ACL for users Endpoint</td>
      <td>Low</td>
      <td>Fixed v3.11</td>
    </tr>
    <tr>
      <td>PBL-08-006</td>
      <td>Passbolt API</td>
      <td>2FA Status Information Disclosure Via users Endpoint</td>
      <td>Info</td>
      <td>Fixed v3.11</td>
    </tr>
    <tr>
      <td>PBL-08-004</td>
      <td>Passbolt API</td>
      <td>No rate-limiting for 2FA login code</td>
      <td>Info</td>
      <td>Fixed v4.1</td>
    </tr>
    <tr>
      <td>PBL-08-005</td>
      <td>Passbolt API</td>
      <td>Cross-Origin-related HTTP security headers missing</td>
      <td>Info</td>
      <td>Fixed v4.1</td>
    </tr>
    <tr>
      <td>PBL-08-008</td>
      <td>Passbolt API</td>
      <td>Lack of explicit CSP on extension manifest</td>
      <td>Info</td>
      <td>Fixed v4.1</td>
    </tr>
  </tbody>
</table>

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
    <h5>Last updated: 2023-07-10 08:30:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}
