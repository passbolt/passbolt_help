---
title: Content scripts running on malicious domain
date: 2017-12-28 00:00:00 Z
description: Content scripts can run on untrusted malicious domain.
categories: [incidents]
layout: incidents
slug: 2017-12-28 Content scripts malicious domain
permalink: /incidents/20171228_content_scripts_malicious_domain
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}
## Summary

Passbolt Web Extension version 1.6.7 is vulnerable to content scripts that can run on untrusted malicious domain.

*   **CVE:** N/A.
*   **Product affected:** Passbolt Browser Extension.
*   **Version affected:** v1.6.7 and below.
*   **Version fixed:** v1.6.8.
*   **Affected component:** Content script injection component (pagemod constructor).
*   **Vulnerability Type:** Business logic vulnerability.
*   **Severity:** Medium (4.2).

### Impact of issue

The integrity of passwords can be affected if the user is already logged in on the trusted domain. The confidentiality 
of passwords is not affected unless the attacker manages to add himself as a user on the victim server and trick the 
victim into sharing a password with the attacker. The confidentiality of the private key or the passphrase is not affected.

### Attack vector / exploitation

Since the application does not escape special characters such as ‘.’ when building the regular expression to check if a 
given domain in trusted, an attacker can register a malicious site such as ‘demoxpassbolt.com’ to target a user of 
‘demo.passbolt.com’. This malicious site will be considered as trusted by the extension.

Authentication content script: The attacker could bypass the server key verification step of the authentication process 
and display the login form on the untrusted domain and get the user to log in on the trusted domain. The attacker then 
needs to prevent the web extension to redirect the user to the trusted domain.

Application content script: If the user is logged in on the trusted domain and visiting the untrusted domain, the 
attacker can use this trust to trick the user into performing privileged actions (e.g. open a share window, decrypt 
and copy a password to the clipboard, etc.).

### Credits

This issue was found and reported by Wladimir Palant.

## Other information

### How did you fix this?

Following the issue reporter proposal passbolt now escapes non letter characters in the users.settings.domain url stored in the extension.
```
var escapedDomain = user.settings.getDomain().replace(/\W/g, "\\$&");
var url = '^' + escapedDomain + '/auth/login/?(#.*)?$';
var regex = new RegExp(url);
```

### Is passbolt server key verification a placebo?

Additional discussion on the utility and expectations created by the use of passbolt of the GpgAuth verify step can be 
found [here](https://community.passbolt.com/t/is-server-authentication-a-placebo-gpgauth-verify-step-usage-in-passbolt/212).

### Event timeline

*   2017-12-27 08:13 PM CET: Vulnerability details sent by reporter.
*   2017-12-28 05:49 AM CET: We acknowledge the issue, start working on a fix and start looking for similar issues in other part of the code.
*   2017-12-28 08:19 AM CET: We release a fix on passbolt development repository and start testing with continuous integration tools.
*   2017-12-28 02:15 PM CET: We deploy a fix on chrome and firefox web extension stores.
*   2017-12-28 03:00 PM CET: We notify the reporter that a fix has been deployed.
*   2017-12-28 03:30 PM CET: We publish the fix on github, the release notes and this report.

{% include date/updated.html %}
{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

<div class="tldr message success">
    <h4>Current status:</h4>
    1. Try first to reproduce the issue<br>
    2. Acknowledge to the reporter<br>
    3. Get a fix/patch prepared<br>
    4. Release new version.<br>
    5. Prepare a report about the issue.<br>
    <strong>6. Feature the problem in the release.</strong>
    <h5>Last updated: 2017-12-28 15:30:00 CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}
