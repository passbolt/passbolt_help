---
title: Chrome not available
date: 2017-02-10 00:00:00 Z
description: A debrief about the incidents that took the chrome plugin offline.
categories: [incidents]
layout: incidents
slug: 2017-02-10 Chrome not available
permalink: /incidents/20170210_chrome_not_available
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Summary
### What happened?

On Thursday 9th of February 2017 evening, the extension was taken down by google from
the chrome web store without notice. In parallel we started receiving report of
the passbolt extension crashing during the setup, on the key generation step.
On Friday afternoon the extension had reappeared on the web store, however the
key generation was still unstable.

The issue was introduced in chrome release version 56.

### What is the current status?
Even though we cannot produce a bug fix for chrome itself we have
reported the issue to Google as well as
<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=692721">Chrome</a>
 and Openpgpjs maintainers and published a new version (
 <a href="https://github.com/passbolt/passbolt_browser_extension/releases/tag/v1.4.2">v1.4.2</a>)
of passbolt with a workaround to make the plugin stable again.

### Why was this happening?
The browser and extension were crashing when calling some functions of cryptographic
libraries in two situations.

Firstly Openpgpjs uses native functions implemented by the Web Cryptography API of the browser
whenever available. In chrome 56, these native functions seem to be buggy and our
extension crashed whenever it was trying to use them.

Also even without using the native chrome Crypto API another issue
leading to crashes was identified when parsing the keys.

### What does it mean for passbolt security?
Since this is a chrome stability issue there is no change in the risk model.

### Status step by step

- **Identification of the exact cause:** we know exactly which primitives are causing this crash. We have published a [test extension](https://github.com/passbolt/chrome56_openpgp_crashtest) to help other developers reproduce the issue. 
- **Make a fix for the extension:** we proposed a temporary fix until the bug in chrome gets fixed by Google. 
- **Republish it and wait:** we published the extension and waited for Google validation. 
- **Chrome extension is back in business** 
- **Wrap up this incident report**. We will work on follow up activities and potential fixes to avoid similar issue in the future.

### Event timeline

*   2017-02-09 20:30:00 CET: Receive our user first feedback informing us that the chrome extension is not available anymore on the webstore.
*   2017-02-09 20:45:00 CET: Confirm that chrome extension has been taken down. We haven’t received any communication from google regarding the removal, nor any explanation.
*   2017-02-09 20:50:00 CET: Start investigating and try to understand what changes we’ve made in our extension that could break the compliancy with the chrome rules.
*   2017-02-09 22:00:00 CET: Receive our first report saying that the plugin crashes during passbolt setup.
*   2017-02-09 22:25:00 CET: Confirm that the extension crashes during the setup on chrome 56 only. It’s working fine on chrome 55\. We start investigating in that direction.
*   2017-02-09 22:35:00 CET: Confirm the extension crashes only when generating a key. Importing a key works fine.
*   2017-02-09 23:00:00 CET: After playing with openpgpjs configuration options, we realize that setting use_native=false (which disable the use of browser’s native crypto functions) fixes the crash issue during the setup when the key is generating. But introduces a new crash at password encryption. Setting use_native on and off could be a possible workaround.
*   2017-02-09 23:30:00 CET: Write the chrome team to have more details regarding the take down of our extension, through different channels.
*   2017-02-10 00:30:00 CET: Realize that mailvelope another chrome extension, who is using openpgpjs1.x is not affected by the issue. The issue seems to be only between chrome56 and openpgpjs 2.x.
*   2017-02-10 00:50:00 CET: Chrome team confirms that they received our email, and that it has been forwarded to the pertinent team.
*   2017-02-10 02:30:00 CET: Communication on facebook / twitter about the chrome extension taken down. Firefox can still be used.
*   2017-02-10 03:03:00 CET: Contact the maintainers of openpgpjs and mailvelope by email to explain the issue and know if they received similar reports.
*   2017-02-10 07:30:00 CET: Technical investigation continues. We’ll come up with a fix asap. Still waiting to hear from chrome team.
*   2017-02-10 13:30:00 CET: Investigation on-going. We publish this page. Still no response from Google.
*   2017-02-10 15:40:00 CET: The passbolt plugin page is back on google chrome web store but the plugin key generation step is still unstable. Thomas from Mailvelope joined us to investigate the issue.
*   2017-02-11 12:40:00 CET: Investigation on-going to try reproduce the issue. Switching openpgp.config.use_native = false solve the key generation issue but another issue is still present.
*   2017-02-11 17:00:00 CET: All issues isolated and published on a [minimal chrome extension](https://github.com/passbolt/chrome56_openpgp_crashtest)
*   2017-02-11 20:30:00 CET: Update on twitter and this page. Fix in progress.
*   2017-02-11 21:00:00 CET: Reported the issue back to openpgpjs and chrome with details on how to reproduce the issue.
*   2017-02-11 21:30:00 CET: A fix is published on Google chrome webstore. chrome extension download link is restored and don't link to this page anymore.
*   2017-02-15 21:30:00 CET: Bug report filled on [Chrome tracker](https://bugs.chromium.org/p/chromium/issues/detail?id=692721).

{% include date/updated.html %}
{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

<div class="tldr message success">
    <h4>Current status:</h4>
    1. Root cause identification<br>
    2. Make a fix for the extension<br>
    3. Publish a new version<br>
    <strong>4. Chrome extension is back<br></strong>
    <h5>Last updated: 2017-02-15 21:30:00 CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}
