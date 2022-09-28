---
title: Spell-jacking on Google Chrome and Microsoft Edge
date: 2022-09-20 00:00:00 Z
description: Spell-jacking on Google Chrome and Microsoft Edge
categories: [incidents]
layout: incidents
slug: Spell-jacking on Google Chrome and Microsoft Edge
permalink: /incidents/20220920_spell-jacking
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Summary

Security researchers from otto-js published a report about a [spell-jacking security flaw](https://www.otto-js.com/news/article/spell-jacking-enhanced-spellcheck-features-send-pii-even-passwords) found on Google Chrome and Microsoft Edge. Depending on the configuration of the browsers, sensitive data could be leaked to third-party services.


*   **CVE:** N/A
*   **Product affected:** API (Pro and CE) and the browser extension
*   **Version affected:** every version under v3.7.3
*   **Version fixed:** v3.7.3
*   **Affected component:** All form inputs.
*   **Vulnerability Type:** spell-jacking
*   **Severity:** N/A

## Problem

Google Chrome and Microsoft Edge enhanced spell-checking features send the content of (non-password) form inputs to external third-party services owned by Google and Microsoft. Consequently, these browser features break the end-to-end character of passbolt and leak sensitive users' data to third party. 

Furthermore, if a proxy is enabled at an organisation scale, this proxy will also receive this data.

For Passbolt application it means that the following data could have been leaked:

* Account
  * OTP
  * passphrase
  * private key
  * security token
* Navigation
  * Text in the search bar
* Passwords
  * Passwords metadata
  * Passwords secrets
  * Comments
  * Password generators metadata
  * Share password search text content
* Passwords import/export
  * Keepass file password
* Groups
  * Groups name
  * Add group user search text content
* Folders
  * Folders name
  * Share folder search text content
* Tags
  * Tags name
  * Edit password tags text content
* Administration settings
  * MFA settings except salt and secret keys
  * User directory (LDAP) settings except auth password field
  * Passbolt Pro subscription key
  * Organization account recovery public and private recovery key and relative settings (including passphrase)

## Who’s impacted

The users who are using Google Chrome with the advanced spell-checking feature enabled and the users using Microsoft Edge with the MS Editor extension installed.

## Fix

The fix consists in adding a `spellcheck="false"` tag on the body tag of every page served by Passbolt API and the browser extension.

## Event Timeline

- 20/09/2022 15:30: articles about the spell-jacking issue are discovered on the internet.
- 20/09/2022 15:30 - 18:00: the problem is analysed, the issue is reproducible locally and the fix is tested and validated locally
- 21/09/2022 09:00 - 10:00: The fix is demonstrated internally with the team, a merge request is sent for review and then approved.
- 21/09/2022 After 10:00: A further analysis is made to understand exactly what could have been leaked, in which measure and in which conditions.
- 21/09/2022 14:00: An internal communication has been made to ensure that the entire team is not using these features.
- 24/09/2022: the fix is published on beta channels.
- 26/09/2022: the fix is released on all stores.
- 27/09/2022: the fix is released the API.

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
    <h5>Last updated: 2022-09-26 14:10:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}
