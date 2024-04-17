---
title: Pwned Password Service Information Leak Incident
date: 2024-04-17 07:00:00 Z
description: Pwned Password Service Information Leak Incident Report Page
categories: [incidents]
layout: incidents
slug: pwned-password-service-information-leak
permalink: /incidents/pwned-password-service-information-leak
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction

A vulnerability identified by security researchers of Quarkslab, could result in an information leak. 
This vulnerability would have allowed an attacker capable of observing Passbolt browser extension queries to the
Pwned Password API to more easily bruteforce and therefore guess manually entered passwords.

- **CVSS Score**: [5.5 (Medium)](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator?vector=AV:N/AC:H/PR:N/UI:R/S:C/C:H/I:N/A:N/E:P/RL:O/RC:C)
- **CVE**: In progress
- **Vulnerability Type**: Information leak
- **Product affected**: Browser extension, Windows app
- **Versions affected**: Browser extension <= v4.6.0, Windows application <= v0.6
- **Version fixed**: Browser extension v4.6.2, Windows app v1.0
- **Affected component**: Password strength validation component

## Who is impacted

The primary technical prerequisite for exploiting this vulnerability involves the ability to monitor the 
queries made by the Passbolt clients to the Pwned Password API.

Therefore, users whose TLS traffic could be intercepted (e.g. decrypted and recorded), such as users having 
installed a corporate certificate authority on their devices by their organizations, are susceptible to this 
vulnerability. Additionally, entities like Cloudflare, which significantly cache Pwned Passwords queries, 
would have the capability to exploit the vulnerability.

Passwords generated using the password generators are not affected by this vulnerability. Passwords created 
manually that are under 8 characters are not affected.

It is also important to note that an attacker capable of guessing a user passphrase using this vulnerability 
would not be able to access or decrypt secrets stored in passbolt, as they do not have access to user randomly 
generated private keys.

## Vulnerability details
The pwned password service is used across various password-related processes to prevent users from reusing 
passwords that have been exposed in data breaches. The issue arises from passbolt specific implementation, 
which may query the API multiple times for when it is manually entered by the user as soon as the credential 
is above 8 characters. While a 300ms debounce of the user keyboard event was in place, it does not necessarily
reflect the typing speed of users.

```
https://api.pwnedpasswords.com/range/01b30
https://api.pwnedpasswords.com/range/c44b9
https://api.pwnedpasswords.com/range/ff998
```

For example, with a password like 1234567890abcdef, Passbolt might make several queries to the pwned password 
service, depending on the speed at which the user types. To deduce the entire password, an attacker would first 
need to infer intermediate passwords hashes, by instance 01b30 for 1234567890 and c44b9 for 1234567890abc, 
which are simpler to guess. Each intermediary guess narrows down the possible options for guessing subsequent 
intermediate hashes.

For more details on the vulnerability, including proof of concept, we invite you to read the [original report](https://blog.quarkslab.com/passbolt-a-bold-use-of-haveibeenpwned.html) 
on Quarkslab blog.

## Mitigation and remediations
A fix was rolled out with Passbolt browser extension v4.6.2 (between the 30th of march and 4th of April, 
depending on the browser). Since Passbolt v4.6.2 a limit was introduced to use the pwned password service 
only on form submission and only if the password is above the weak entropy (60 bits).

Administrators, if this attack scenario is part of their threat model, are invited to:
- Rotate passwords that were selected and entered manually.
- Rotate users passphrases

Additionally for organizations intercepting TLS traffic of their users, it is recommended to flush logs that could 
include pwned password service hashes traces.

Additionally for organizations, using the Pro or the Cloud, which would not trust third party services involved in 
the process such as Cloudflare or pwned passwords, it would be recommended to disable the data breach check from 
the administration's settings (User passphrase policies and password policies). In the future we will introduce 
a new administration page to regroup all these settings and make them available in all versions under one section.

## Acknowledgments
Passbolt would like to acknowledge the security researchers from Quarkslab for their vital role in uncovering 
and reporting the vulnerability. We extend our thanks to Quarkslab for their seamless incident response coordination.

We would also like to thank Cure53 for performing an independent 3rd party assessment of this vulnerability report.

## Timeline of events

* 2024-03-22: Vulnerability reported by security researchers
* 2024-03-23: Vulnerability acknowledged to security researchers
* 2024-03-25: Passbolt development team start working on a fix
* 2024-03-28: Fix published on repository, extension submitted for review in webstore
* 2024-03-29: Chrome extension RC v4.6.2 extension published
* 2024-03-30: Chrome extension v4.6.2 published
* 2024-04-03: Firefox extension v4.6.2 published
* 2024-04-04: Edge extension v4.6.2 published
* 2024-04-11: Windows application v1.0 pushed
* 2024-04-16: CVE requested
* 2024-04-17: Incident page published

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}
<div class="message notice">
    <h2>External references</h2>
    <p>For more details on the vulnerability, including proof of concept, we invite you to read the original report.</p>
    <a class="button" href="https://blog.quarkslab.com/passbolt-a-bold-use-of-haveibeenpwned.html">Quarkslab Blog</a>
</div>

<div class="message success">
    <h4>Current status:</h4>
    1. Try first to reproduce the issue<br>
    2. Acknowledge to the reporter<br>
    3. Get a fix/patch prepared<br>
    4. Release new version.<br>
    5. Prepare a report about the issue.<br>
    <strong>6. Feature the problem in an incident page.</strong>
    <h5>Last updated: 2017-09-17 09:30:00 CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}