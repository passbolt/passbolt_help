---
title: PBL-01 Cure53 Report
date: 2021-10-19 00:00:00 Z
description: Cure53 Security Audit part I
categories: [incidents]
layout: incidents
slug: 2021-10-19 Cure53 Security Audit part I
permalink: /incidents/20210419_PBL01_Cure53_report
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}
## Cure53 Security Audit part I

### What happened?

During the course of Q1 2021, the cryptography of the project was examined by two members of security research team 
of Cure53 over the course of six days, with the results amounting to seven findings of varying severity and seven 
informational findings.

As per the report conclusions: "the specification itself illustrates a relatively well-designed protocol with no 
immediate outstanding security issues".

You can find the complete report [here](https://help.passbolt.com/assets/files/PBL-01-report.pdf).

Despite the relatively large number of findings, all findings were written from a critical perspective of the 
specification, and therefore do not necessarily have a practical impact on the software implementation.

In other words most of the items in the report do not represent a fixable security issues, but represent weaknesses 
that could be better mitigated by passbolt, or better documented as risks to the end user or the system administrator 
configuring the service.

### Comments on the issues

#### PBL-01-001 Crypto: Secure Channel Enforcement Recommendations (High)

Passbolt recommend but does not make HTTPS mandatory, to allow easier local testing. There are clear indications on 
the screen and documentation that running the server with HTTP only is insecure. It is expected that a system 
administrator understand such risks.

In the future passbolt may add another encryption layer for data in transit, to protect further from scenarios where 
the TLS layer is compromised.

#### PBL-01-004 Crypto: Nonce Generation Recommendations (High)

There is currently no issues in the current implementation that could make this protocol flaw exploitable. However 
in the future version of the authentication protocol passbolt may follow the recommendations to use stricter nonce 
generation methods and not rely on solely on low UUID collision probability, to reduce risks further.

#### PBL-01-002 Crypto: Server-Side PRNG Recommendations (Medium)

Passbolt consider it is the responsibility of the system administrator to make sure there is a good source of entropy 
when it comes to Pseudo-Random Number generation. We may improve the setup to flag possible better settings in the 
future.

#### PBL-01-005 Crypto: Input Key Validation Recommendations (Medium)

This issue is listed as residual risks in Security WhitePaper under "Weak secret key passphrase / algorithm". In the 
future, passbolt will provide options to enforce that minimum security requirements are met for imported keys. These 
will be optional, in order to provide backward compatibility. These checks should become mandatory as part of version 
4. In the meantime we consider it is the administrator responsability to ensure the keys of their users in passbolt 
matches their security requirements.

#### PBL-01-006 Crypto: Client Registration Considerations (Medium)

Similarly the use of weak private key passphrase is clearly indicated on the screen during the setup. It is the
responsability of the end user to choose a strong passphrase. We consider it is the responsability of the passbolt 
administrator to educate their user on the importance of choosing a strong passphrase.

Passbolt will in the future, prompt the user generated password in the future by a randomly generated passphrase 
suggestions, and we may allow administrator to further enforce passphrases with more entropy.

#### PBL-01-009 Crypto: Undefined Scenario for Removing User from Group (Medium)

This issue will be addressed with a password expiry functionality to be included in an upcoming release this year. 
The specification for this feature can be found 
[here](https://docs.google.com/document/d/1MCQsHTvoX5OAOvIoVZaGlrpgzs_NZl94_MZkix9en3s/edit#).

#### PBL-01-010 Crypto: Deprecated HTTP Header (Low)

Passbolt default CSP are already doing a good at providing some XSS protection, so this deprecated HTTP 
header will be removed in an upcoming release (v3.2).

### Credits

We would like to thank the Cure53 team, and especially Dr.-Ing. Mario Heiderich, Dr. Nadim Kobeissi, as well as 
Thomas Oberndörfer from Mailvelope, for helping us organize this security audit.

{% include date/updated.html %}
{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}
<div class="tldr message success">
    <h4>Current status:</h4>
    1. Organize security review<br/>
    2. Prepare a report about the issue found<br/>
    <strong>3. Feature the problem on an incident page</strong>
    <h5>Last updated: 2021-04-21 06:00:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}
