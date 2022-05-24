---
title: Has the code been reviewed?
slug: code-review
layout: faq
category: security
permalink: /faq/security/:slug
date: 2022-05-23 00:00:00 Z
---

In the course of 2021 [Cure53](https://cure53.de/) performed a series of six audits in order to provide a 360 degree review of the passbolt ecosystem as a whole. Each audit involved several security researchers and each lasted for about a week.

In the meantime, passbolt has successfully completed SOC2 Type II audit, a well established and recognized standard of information security compliance.
## Code and Infrastructure security audits
### December 2021: Mobile applications and go-passbolt-cli

[PBL-06 Cure53 report](/assets/files/PBL-06-report.pdf): This report describes the results of a security assessment of the passbolt complex, spanning the passbolt mobile application, related backend API and CLI tool.
### August 2021: Browser integration and WebExtension API usage

[PBL-05 Cure53 report](/assets/files/PBL-05-report.pdf): This report details the scope, results and conclusory summaries of a penetration test and security assessment against the passbolt browser extension with a particular focus on the browser integration and WebExtension API usage

### July 2021: passbolt cloud infrastructure

[PBL-04 Cure53 report](#): For security reasons this report is not public. No major issue was found, only hardening suggestions who have been implemented during the course of the summer.
### June 2021: Backend and plugins

[PBL-03 Cure53 report](/assets/files/PBL-03-report.pdf): This report describes the results of a security assessment of the passbolt complex, spanning the passbolt backend, API and a selection of passbolt plugins.
### April 2021: Browser extensions

[PBL-02 Cure53 report](/assets/files/PBL-02-report.pdf): This report describes the results of a comprehensive security assessment targeting the passbolt browser extensions for Chrome and Firefox.

### February 2021: Security White Paper 

[PBL-01 Cure53 report](/assets/files/PBL-01-report.pdf): This report describes the results of a review of a cryptography & security white-paper, detailing on the security properties and architecture for passbolt.

## Incidents reports

All incidents are listed on this [dedicated page](/incidents).

## Older reviews

- Passbolt Web Extension: reviewed several times by Mozilla Add-on reviewers in the course of 2017 as part of the 
original AMO extension approval process, leading to several improvements in versions 1.6.3, 1.6.4 and 1.6.5.

- Passbolt API: the v2.0.0-RC branch was reviewed by CakeDC in December 2018. You can learn more about the findings
[here](https://medium.com/passbolt/passbolt-api-code-review-results-8bf1efd2ff05).

- Openpgp.js code base has undergone two complete security audits from Cure53. Reports can be found 
[here](https://github.com/openpgpjs/openpgpjs/wiki/Cure53-security-audit)

- Cakephp was reviewed by NCC Group, you can browse the full report 
[here](https://wiki.mozilla.org/images/4/40/Cakephp-report.pdf)

## Report a security issue

The code review work will never be done, feel free to contact us if you want to contribute at
[security@passbolt.com](mailto:security@passbolt.com).
