---
title: How to subscribe to the account recovery program?
slug: subscribe
layout: faq
category: start
permalink: /faq/start/account-recovery/:slug
date: 2022-07-28 00:00:00 Z
---

Account recovery is a feature introduced with passbolt v3.6.0 that as for aim to help users to recover their accounts
in case of recovery kit or passphrase loss. To know more about account recovery, checkout [this documentation](/configure/account-recovery).

## Requirements

You can follow this procedure if you are meeting the following requirements:

- You are in possession of an active account;
- Your organisation is running passbolt Pro > v3.6.0 or Passbolt Cloud.

## How to subscribe as a new user during the setup process?

If the account recovery is enabled for the organisation, all new users will be prompted to join the account recovery program during the setup process. 

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-during-setup.png"
    legend="Account recovery screen during browser extension setup process (Opt-out policy)" 
    width="450px"
%}

The prompt presents different options depending on the organisation policy:

- __Mandatory__: as its name states, users have to subscribe to the program no mater their preferences. The screen role here is mainly to inform the users about the private key transfer that is going to happen, it is useful if they prefer not to use their personal private key by instance;
- __Opt-out__: users have the choice to join or reject the program, and they are subscribed by default as per the organisation preference;
- __Opt-in__: as the *opt-out* option, users have the choice to join or reject the program, but they are not subscribed by default as per the organisation preference.

## How to subscribe as an already registered user?

If the account recovery is enabled for the organisation, all users can access their account recovery preference from the *account recovery* section of the *user settings workspace*.

{% include articles/figure.html
url="/assets/img/help/2022/07/account-recovery-redirection-dialog.png"
legend="Account recovery user prompt dialog."
width="450px"
%}

If the organisation account recovery policy is set to *mandatory* or *opt-out*, users will be prompted to enroll to the program immediately after signing in into passbolt. If they postpone the decision, they could follow the *attention crumbs* (&#10071;) displayed in the interface to go to the setting screen later.

{% include articles/figure.html
url="/assets/img/help/2022/07/account-recovery-setting.png"
legend="Account recovery user setting screen."
width="750px"
%}

Users will be then able to enroll to the program by clicking the *review* button. Similarly to the setup process, the setting screen presents different options depending on the organisation policy:

- __Mandatory__: as its name states, users have no other choice but to subscribe to the program. The screen role here is mainly to inform the users about the private key transfer that is going to happen, it is useful if they prefer not to use their personal private key by instance;
- __Opt-out__: users have the choice to join or reject the program, and they are subscribed by default as per the organisation preference;
- __Opt-in__: as the *opt-out* option, users have the choice to join or reject the program, but they are not subscribed by default as per the organisation preference.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-dialog.png"
    legend="Account recovery subscription dialog" 
    width="450px"
%}

Users will notice additional information relative to the administrator who enabled the account recovery program. For safety reasons, it is highly recommended to verify carefully this information: Is the administrator known? Is the fingerprint matching the administrator public key?
