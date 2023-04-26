---
title: Sending unencrypted description during resource creation on Android app
date: 2023-04-26 00:00:00 Z
description: Android App was leaking encrypted descriptions on resources created with it
categories: [incidents]
layout: incidents
slug: sending-unencrypted-description
permalink: /incidents/20230426_sending-unencrypted-description
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Summary
Leak of confidential information detected during UAT phase of the Android app 1.13.1.

*   **CVE:** N/A
*   **Product affected:** API (Pro and CE) and the Android app
*   **Version affected:** 
    *   API version under v3.12.2
    *   Android app under 1.13.2
*   **Version fixed:** 
    *   API v3.12.2
    *   Android app 1.13.2
*   **Affected component:** Resources creation form.
*   **Vulnerability Type:** Information leak
*   **Severity:** N/A

## Problem
The issue has been present since the first version of the passbolt mobile app released to the Google Play Store. When creating a resource from the Android app an unencrypted version of the description was sent to the API along with its encrypted version contained in the secret. However the default content type (password-and-description) should not contain the unencrypted version of the description.

{% include articles/figure.html
    url="/assets/img/help/2023/04/incident26april2023.png"
    legend="1. example of payload sent to the API while a new resource is created"
    width="500px"
%}


On top of that as the API doesn’t not ignore the sent unencrypted description, it stores it in cleartext along the resources metadata in the database.

## Who's impacted
Organizations who have users who created resources that have a non-empty description  from their Android app or directly via the API if this one was misused. Note that only the resources created are impacted, and that the issue is not occurring on the edition process.

## Fix
- MOB-1250 Fix the Android app by not sending the description field to the backend during resource creation
- PB-24315 Add validation of received resource fields on the backend according to the schema
- PB-24315 Run a script to clear the description field in all resources of type encrypted password with encrypted description

## Event Timeline

- 20/04/2023 - Bug identified
- 26/04/2023 - Android app fixed with 1.13.2
- 26/04/2023 - API fixed with v3.12.2


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
    <h5>Last updated: 2023-04-26 13:20:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}