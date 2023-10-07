---
title: Android App unlisted from the Google Play Store
date: 2023-04-05 00:00:00 Z
description: Android App was unavailable on the store due to family policy violations / app access issues
categories: [incidents]
layout: incidents
slug: android-app-unlisted
permalink: /incidents/20230404_android-app-unlisted
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Summary
Following the last release of the mobile application (1.13.0-17) on the Google Play Store the application was removed from the store.

## Problem
The application was not available on the store for around one day and a half.

## Who's impacted
New users could not download the application however existing users are not impacted by this incident and can still continue to use the application.

## Fix
1. Updated app access instructions
2. Changed family policy to 18+.
3. Opted out of "Allow Google to use the credentials you provide for performance and app compatibility testing".
4. Resubmitted app for review.

## Event Timeline

- 07/03/2023 - 1.13.0-17 Version released - No issues
- 27/03/2023 - Email received by Google stating that the app is not adhering to the families policy requirements policy. Deadline is set to 4th of April.
- 28/03/2023 - The passbolt team update the test server and documentation related to "App Acccess". It triggers a review.
- 28/03/2023 - A Google reviewer reviews the application and triggers a violation of the Google family policy.
- 28/03/2023 - The passbolt team set the minimum age of the application to 18+. The app is still marked as in violation of family policy.
- 30/03/2023 - The passbolt team pushed for review the 1.13.0-18. a new unchanged build was uploaded in order to trigger a review.
- 31/03/2023 - The new version of the build was accepted and published in production, however the policy remained not compliant.
- 31/03/2023 - Passbolt team contacts the googleplay-developer-support@google.com to ask for more details.
- 01/04/2023 - Google respond that they still can´t access the app with the information provided inside the app access section and attached a print screen showing an error at the end of the app access process. They also advise to send a video on youtube to demonstrate that the process is working.
- 03/04/2023 - Passbolt team double-check test accounts are valid, and publish a youtube video to demonstrate that the procedure is working.
- 04/04/2023 - 10:00 CET - Google respond the same email with the same error and unlist the passbolt app on Google Play Store.
- 04/04/2023 - 10:00 CET - Announcement is made to the community on the forum and twitter.
- 04/04/2023 - 10:00 CET - Passbolt team tries to reproduce issue. Manages when using non-standards keyboards that affects spacing in private key.
- 04/04/2023 - 19:00 CET - Passbolt team implements additional mitigations for key input issues and prepare a new version.
- 05/04/2023 - 09:00 CET - Passbolt team test for the release-1.13.1-19 starts.
- 05/04/2023 - 11:48 CET - Passbolt team pushes release-1.13.1-19 that includes additional trimming for private key input and update instructions to use default keyboard. Also uncheck "Allow google to use the credentials you provide for performance and app compatibility testing", in case this affected testing.
- 05/04/2023 - 12:30 CET - Google accept new version and the app is back on the store. Families are safe.

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
    <h5>Last updated: 2023-04-05 15:20:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}
