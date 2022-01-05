---
title: Extension v3 release issues
date: 2021-02-10 00:00:00 Z
description: Issues with v3 release of webextension
categories: [incidents]
layout: incidents
slug: 2021-02-10 Extension v3 release issues 
permalink: /incidents/20210210_v3_webextension_issues
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Webextension V3 Release Issues

### What happened?

On Wednesday 27th of January 2021, the team started the rollout of the V3 webextension using the auto update 
functionalities provided by the Chrome and Firefox web store. This version included a major overhaul of the data
validation logic, including a more strict validation of data coming from the server. Users with databases data that 
were breaking relational constraints, experienced issues rendering the software partially or completely unusable.

### Why was this happening?

Typically, some older instances with data coming from v1 contained some data integrity issues that were not addressed 
by v2 migrations. Users that also manually edited data in the database, were also affected. Much of these issues 
could be solved running the “data cleanup” script provided with the Passbolt API.

Additionally, some users are using self-made public keys that use RSA-sign only keys to encrypt the data, an unsecure 
scheme that has been made incompatible with the latest version of OpenPGP.js 
(ref. [#1148](https://github.com/openpgpjs/openpgpjs/pull/1148)). As a temporary solution, the application will 
support these keys, as it was historically supported, until a long term solution is defined to help users rotate their 
keys and identify the weak keys.

All the issues reported by the community have been fixed by relaxing the validation rules or adding some preprocessing 
to sanitize the data coming from the server.

### What are we doing to prevent this from happening again?

We are improving our test data set to be used during the pre-release acceptance test round, to include corrupted and 
invalid data, to make sure the application remains usable even when some or all of the data is corrupted or invalid.

We will be adding additional data integrity checks and self-repair mechanisms as part of the server logic.

### Event timeline

#### 27th of January:

*   08:30 CET: Web extension v3 published on webstore
*   10:00 CET: Some users are reporting issues on forum as automatic rollout is in progress
*   11:30 CET: v3.0.1 hotfix published on webstore fixing avatar and tag issues
*   13:00 CET: A general post on the community forum is created providing workarounds
*   13:00 CET: A general github issue is created providing workaround
*   13:30 CET: v3.0.2 hotfix published on webstore fixing favorites issues
*   17:30 CET: v3.0.3 hotfix published on webstore fixing gpgkeys issues

#### 3rd of February:

*   13:30 CET: v3.0.4 hotfix published on webstore fixing group user and opengpg.js issues
*   17:30 CET: v3.0.5 hotfix published on webstore fixing session keep alive issues

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
    <h5>Last updated: 2021-02-10 11:00:00 CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}
