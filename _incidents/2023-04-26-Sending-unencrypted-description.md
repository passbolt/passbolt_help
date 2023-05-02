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
Android app prior 1.13.1. maybe leak of confidential information via by sending unencrypted the content
of the description field, when the resource type "password with encrypted description" is selected.

*   **CVE:** N/A
*   **Product affected:** API (Pro and CE) and the Android app
*   **Versions affected:** 
    *   API version under v3.12.2
    *   Android app under 1.13.2
*   **Version fixed:** 
    *   API v3.12.2
    *   Android app 1.13.2
*   **Affected component:** Resources creation form.
*   **Vulnerability Type:** Information leak
*   **Severity:** Medium

## Problem

When creating a resource from the Android app an unencrypted version of the description was sent to the API 
along with its encrypted version contained in the secret. However the default content type (password-and-description) 
should not contain the unencrypted version of the description.

{% include articles/figure.html
    url="/assets/img/help/2023/04/incident26april2023.png"
    legend="1. example of payload sent to the API while a new resource is created"
    width="500px"
%}

On top of that as the API didn’t ignore the sent unencrypted description, the API stored it in cleartext along 
with the resource's metadata in the database.

### Attack vector / exploitation
As the API stored the unencrypted version of the description in the database and didn't perform a validation of 
the data when retrieving it, the unencrypted description was returned along with the resource's metadata when 
a client requested it via the API.

{% include articles/figure.html
    url="/assets/img/help/2023/04/incident26april2023_exploitation.png"
    legend="2. example of payload retrieved from the API when retrieving a resource"
    width="500px"
%}

An attacker who performed a man-in-the-middle (MitM) attack could see the resource description in cleartext 
in the payload of the resource creation request. 

Additionally, an attacker who gained access to the database could read the description in cleartext from the resources 
table. 

## Who's impacted
Organizations that have users who created resources with a non-empty description from their Android app or 
directly via the API if this one was misused. Note that only the resources created are impacted, and that the 
issue is not occurring during the edit process.

## Root cause
The root cause is a combination of issues involving the Android app as well as the API.

### Android App
The Use Case class for creating a resource for both two initial resource types (encrypted password, encrypted 
password with encrypted description) is reused. At first, only the encrypted password with plain text description 
resource type was supported and then the second one was added on top.

During the implementation of the second resource type, the encrypted description was added into the secret, but it 
had been missed when updating the value of the original description field, so it stayed the same.

### API
The API was not strict while asserting the metadata of the created resources having the type password-and-description, 
therefore letting the unwanted unencrypted description pass the validation and get stored in the database.

# How to fix the issue
Users and administrators are advised to upgrade to the lastest API and Android application version.

## What was done to fix the issue
- MOB-1250 Fix the Android app by not sending the description field to the backend during resource creation
- PB-24315 Add validation of received resource fields on the backend according to the schema
- PB-24315 Run a script to clear the description field in all resources of type encrypted password with encrypted description

## Event Timeline

- 20/04/2023 - Bug identified by Mobile team during UAT
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