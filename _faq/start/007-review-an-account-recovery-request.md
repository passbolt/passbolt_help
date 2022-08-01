---
title: How to review an account recovery request
slug: review-request
layout: faq
category: start
permalink: /faq/start/account-recovery/:slug
date: 2022-07-28 00:00:00 Z
---

## Accepting or rejecting an account recovery request
Administrators might receive account recovery requests from the users who lost their passphrase or recovery kit. Email notifications can be configured for the administrators to receive an email when an account recovery is requested. This email facilitates the account recovery request review by providing a link that redirects to the account recovery request review dialog.
In any case, it’s possible to review account recovery requests without email by accessing the user workspace. With the account recovery feature enabled, a new column “attention required” appears in the list of users. This helps to quickly see or sort users who require administrators to process their account recovery request.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-request-review-entry-points.png"
    legend="Account recovery request review entry points" 
    width="550px"
%}

To process a request there are 4 ways you can choose. 

1. Using the link in the received email, it will open the application with the corresponding dialog opened.

2. By right-clicking on the user row in the grid and click on “review request” in the contextual menu

3. Having the user selected, by clicking on the “more” button on top of the grid and click on “review request”

4. Using the “review” button accessible in the section “account recovery” from the user details. This section also shows the number of account recovery requests a user made and the state of the last request..

Administrators are prompted to accept or reject the account recovery request. Some information is provided in the UI, they need to be carefully checked before taking any action by verifying that the user is known and that the fingerprint is the expected one (we’re never too much careful). As a safety check, after making a choice administrators are prompted to provide their passphrase (unless they decided that the extension should remember it).

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-request-review-dialog.png"
    legend="Account recovery request review dialog" 
    width="550px"
%}

At this step, if administrators choose to reject the request, an email will be sent to inform the corresponding user and the procedure stops there. Otherwise the private ORK is asked in order to continue with the procedure. It is necessary for the browser extension as the key will be used to decrypt the user’s private key before re-encrypting iit with the user’s temporary key. Then the user will receive an email to finish the procedure.
