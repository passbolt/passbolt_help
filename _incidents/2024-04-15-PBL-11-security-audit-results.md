---
title: PBL-11 Security audit results
date: 2024-04-15 00:00:00 Z
description: PBL-11 Security audit results
categories: [incidents]
layout: incidents
slug: PBL-11 Security audit results
permalink: /incidents/20240415_PBL-11-security-audit-results
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction

In the lead-up to the stable release of the Passbolt UWP Windows application, the Cure53 team dedicated two days to a focused audit on the application's native layer. This review revealed a total of five findings—four security vulnerabilities and one general weakness—which were all solved prior to the v1.0 release.

Quotes from the conclusion of the report: “Upon completion of this security audit, Cure53 gained a strong impression of the security premise employed by the Passbolt team. The quality of the codebase was generally impressive, while the architecture and frameworks employed generally installed resilient design paradigms.”

In addition to the detailed findings of this audit, the security incident section also houses separate reports that examine the browser extensions. Interestingly, some of the code of the extension is also used in the Desktop application, and will give more details on other components of this application.

All the issues have been fixed or mitigations have been implemented as of 11th April 2024.

You can read more about the security audit by [reading the full report](/assets/files/PBL-11-report.pdf).

A big thank you from the Passbolt team to Cure53 for their collaborative spirit and expertise shared during this project.

## Vulnerabilities summary

<table class="table-parameters">
  <thead>
    <tr>
      <th>ID</th>
      <th>Issue name</th>
      <th>Severity</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PBL-11-001</td>
      <td>Insecure Regex pattern allows canNavigate bypass</td>
      <td>Medium</td>
      <td>Mitigated in v1.0</td>
    </tr>
    <tr>
      <td>PBL-11-002</td>
      <td>PasswordVault can be accessed by Desktop apps</td>
      <td>Low</td>
      <td>Mitigated in v1.0</td>
    </tr>
    <tr>
      <td>PBL-11-003</td>
      <td>JS execution by modifying LocalFolder Resources</td>
      <td>Low</td>
      <td>Mitigated in v1.0</td>
    </tr>
    <tr>
      <td>PBL-11-004</td>
      <td>Insecure CSP Configuration in renderers</td>
      <td>Low</td>
      <td>Mitigated in v1.0</td>
    </tr>
    <tr>
      <td>PBL-11-005</td>
      <td>Arbitrary requestId used as topic in background</td>
      <td>Medium</td>
      <td>Mitigated in v1.0</td>
    </tr>
  </tbody>
</table>

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include layout/col_end.html %}
{% include layout/row_end.html %}