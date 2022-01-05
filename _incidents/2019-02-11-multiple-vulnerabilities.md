---
title: Security audit results
date: 2019-02-11 00:00:00 Z
description: Jose-Alexandre Mayan security audit results 
categories: [incidents]
layout: incidents
slug: 2019-02-11 Security audit results
permalink: /incidents/20190211_multiple_vulnerabilities
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Summary

During January an independent security audit of Passbolt API was conducted by french security researcher 
Jose-Alexandre Mayan.

The tests have been performed for 3 days, between 2019-01-16 to 2019-01-18 (included) on Passbolt Pro Edition 
version 2.6.1. 4 vulnerabilities have been found, 3 of which have little to no impact, and the last one having a 
high impact but a medium risk due to being only exploitable during Passbolt's installation phase.

3 issues has been fixed in v2.7.0\. One issue was already known (and listed as a risk in the documentation) and 
won't be fixed in the short term.

## Vulnerability #1: Remote code execution

### Issue description

Passbolt provides a way for system administrators to generate a PGP key for the server during installation. The 
wizard requests a username, an e-mail address and an optional comment. No escaping or verification is done by 
Passbolt, effectively allowing a user to inject bash code.

The impact is very high, but the probability is very low given that this vulnerability can only be exploited during 
Passbolt's installation stage.

### Current status

Since Passbolt v2.7.0 the server side generation of keys (or any similar operations) performed during the installation 
by the web installer wizard, has been moved client side, in javascript using OpenPGP.js.

Moving this logic to the client is a trade off however as the private key will be transiting on the network instead 
of remaining always server side. If administrators do not want to take this risk, then they can still proceed with 
a manual configuration in command line and not use the wizard.

## Vulnerability #2: Retrieval of HTTP-only cookies

### Issue description

Passbolt uses three cookies: a session cookie, a CSRF protection cookie and a cookie to keep track of the 
multiple-factor authentication process.

Both the session cookie and the mfa cookie are properly set HTTP-only to prevent an attacker from retrieving the 
content of those cookies if they managed to exploit an XSS.

The /auth/verify.json endpoint returns a JSON that, among other things, contains the cookies sent in the request. 
(similar to the TRACE HTTP method)

An attacker who manages to leverage an XSS vulnerability could retrieve the session cookies of a legitimate user, 
effectively granting them the ability to retrieve information (such as encrypted password list or group list) 
without requiring user interaction.

This vulnerability has a low impact, but no immediate risk due to it requiring the exploitation of an XSS vulnerability 
that has yet to be found.

### Current status

Fixed in v2.7.0

## Vulnerability #3: User enumeration

### Issue description

Passbolt implements a mechanism to verify the server's authenticity. The /auth/verify.json endpoint used to verify 
the server's authenticity returns a JSON that displays errors that occurred during the request.

An attacker could use this unauthenticated endpoint to enumerate users registered on a Passbolt instance. They could 
retrieve a huge list of PGP public keys (by scrapping a widely-populated HKP server) and try every fingerprint to 
list potential users.

This vulnerability has a low impact. It requires an attacker to know the victim's public key's fingerprint.

### Current status

Since Passbolt v1 this issue is listed as a drawback in the 
[authentication documentation](https://help.passbolt.com/tech/auth). A long term solution would be to implement a 
new protocol for authentication, which is something the team will consider this year. A middle term solution will 
be to provide throttle mechanism for the API authentication request (e.g. slow down and notify an admin when somebody 
behave like they are enumerating users).

## Vulnerability #4: e-mail HTML injection

### Issue description

Passbolt sends e-mail to users to warn them about different type of events such as the creation, modification or 
deletion of a password. Those e-mails may contain user-specified input, such as a password's title or description.

Passbolt does not escape the user's input properly, resulting in the user being able to inject HTML code in an e-mail.

An authenticated attacker could share a password containing an img HTML tag in its description with an other user to 
obtain information about their mail user-agent.

This vulnerability has a very low impact. Most MUA do not embed remote images to protect their users' privacy.

### Current status

Fixed in v2.7.0

### Event timeline

*   2019-01-22 17:30 CET: Receive an email from security researcher
*   2019-01-22 17:55 CET: Acknowledge reception and reported issues
*   2019-01-31 08:55 CET: Start working on a fix
*   2019-02-04 20:55 CET: Fix ready, communicate back with researcher
*   2019-02-12 12:00 CET: Fix rolled out as part of release v2.7

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
    <h5>Last updated: 2019-02-12 12:00:00 CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}
