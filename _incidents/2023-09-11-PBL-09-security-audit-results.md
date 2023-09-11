---
title: PBL-09 Security audit results
date: 2023-09-11 00:00:00 Z
description: PBL-09 Security audit results
categories: [incidents]
layout: incidents
slug: PBL-08 Security audit results
permalink: /incidents/20230911_PBL-09-security-audit-results
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction

As part of the security audit of the LDAP feature refactoring, Cure53 team, found two issues that have been resolved 
with v4.1.3. This week-long audit involved several security researchers with a main focus on 
all the changes related to the implementation of the LDAP integration on the API side and the underlying library
that passbolt uses called LdapRecord. 

Quotes from the conclusion of the report: 
"The resulting impact was considered to be relatively minimal and does not significantly expand the attack surface of 
Passbolt itself." "As mentioned previously, LdapRecord is a sound choice for handling LDAP functionalities and its 
integration into Passbolt can only be deemed a resounding success."

Passbolt aims to provide sufficient flexibility to allow administrators to configure their LDAP connector without
the need to modify configuration on file. Both issues relates to the "rogue administrator" risk, e.g. how an 
administrators could use the functionalities in the passbolt administration user interface workspace to extract information 
from an LDAP server. 

These issues are now mitigated by making sure certain keywords are not allowed in custom filters or field 
mapping functionalities such as: `userPassword`, `uniqueUserPassword`, etc. Moreover, a server administrator is now 
able to customize such list in `passbolt.php` to further mitigate this risk.

This mitigation has been implemented as of 4th of August 2023.

You can read more about the security audit by [reading the full report](/assets/files/PBL-09-report.pdf).

Passbolt team would like to express a warm thank you to the security researchers from Cure53 and the developers of
the LdapRecord team for their valuable contribution to this project.

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
      <td>PBL-09-001</td>
      <td>API</td>
      <td>LDAP injection via custom group/user filters</td>
      <td>Low</td>
      <td>Mitigated in v4.1.3</td>
    </tr>
    <tr>
      <td>PBL-08-007</td>
      <td>API</td>
      <td>PBL-09-002 Mitigate arbitrary LDAP data exfiltration via fields_mapping</td>
      <td>Medium</td>
      <td>Mitigated in v4.1.3</td>
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
    <h5>Last updated: 2023-09-11 00:00:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}
