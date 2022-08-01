---
title: How to subscribe and use to the account recovery
slug: subscribe
layout: faq
category: start
permalink: /faq/start/account-recovery/:slug
date: 2022-07-28 00:00:00 Z
---

## What is account recovery?

In short, the user's private keys (and the associated passphrase) are stored encrypted server side with an organization-wide key. When a user wants to recover their private key, the user would as part of the recovery process generate a temporary new OpenPGP key pair and coordinate transparently through the interface with the administrator. The administrator would be able to share the user key, by decrypting it with this new organization-wide key. 

From the organization perspective, some options are provided to make this account recovery process flexible, propose some four settings in the administration to either “always on”, “opt-out” (optional: default on), “opt-in” (optional: default off), “disabled” (always off, like it is now). 

These options are presented to the users during the setup in the form of a checkbox (checked or unchecked by default, disabled or not, depending on the scenario chosen by the administrators). A personal setting screen is implemented for the user to place their key in the account recovery if they have already completed the setup prior to the feature being rolled out by an administrator. 

### How to subscribe as a new user during the setup process?

If the organization chose to enable the account recovery feature, all users during the setup process will be prompted with a dedicated screen informing them about what account recovery is (by explaining that their private key is being shared to the organization and administrators will have access to their resources) and let them choose to share their private key or not according to the organization policy.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-during-setup.png"
    legend="Account recovery screen during setup process" 
    width="550px"
%}

The screen varies a bit depending on the policy type the organization selected:

- __Mandatory__: as its name states, users have no other choice but to share their private key encrypted. The screen role here is mainly to inform the user about what’s going on and to make them aware that if they register personal passwords, the organization might have access to these.
- __Opt-in / Opt-out__: with these options, users have the choice to accept or reject the subscription to the account recovery program. They are informed about the consequence of such a share. The difference between both options is the selected choice by default. With __opt-in__, users have to explicitly opt-in so the default option is set to “reject”. With __opt-out__, users have to explicitly opt-out so the default option is set to “accept”.

As a quick notice, during the setup process, a recovery kit is asked to be downloaded. The account recovery is not a replacement of the recovery kit. Even though it's possible to configure another Passbolt extension for another browser with the account recovery, it’s much easier to proceed with the recovery kit in such a case.


## How to subscribe as an already registered user?

Passbolt browser extension is provided with dedicated screens for the registered users to subscribe or not to the account recovery program.
The setting screen is accessible from the user profile workspace in the “Account recovery” section. To guide the users, there are attention icons displayed along the path to follow: on the user avatar, in the contextual menu of the avatar and finally in the menu of the profile workspace.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-setting.png"
    legend="Account recovery setting screen and path" 
    width="550px"
%}

If the feature is enabled for the organization, users will be able to follow the subscription procedure by clicking the “review” button. From there, users might choose to accept the subscription or reject it (only if the policy is not set as “mandatory”) or do nothing and think about it later.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-dialog.png"
    legend="Account recovery subscription dialog" 
    width="550px"
%}

In the user settings account recovery review dialog, the information about the administrators who requested for the subscription to the account recovery are displayed. For safety reasons, it is highly recommended to verify carefully this information: is the administrator known, is the fingerprint matching the administrator public key before accepting the share your private key.

Also, the organization might wish to invite their users to subscribe to the account recovery program. In such a case, the policy might be set to “mandatory” or “opt-out” which as a consequence will display a dialog to register to the program each time a user signs in to the application. This dialog never appears again once users subscribed to the account recovery or explicitly rejected it (if the organization policy allows it). If users have rejected the subscription, it’s always possible for them to change their mind. But, it’s not possible to do the other way around (if the user subscribed, they can’t unsubscribe).

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-redirection-dialog.png"
    legend="Account recovery redirection dialog" 
    width="550px"
%}

For safety reasons, it is highly recommended to verify the information displayed on the user settings dialog.

As a quick notice, already registered users may have personal passwords saved on their account. As they might not want to share them with the organization, even if the policy is set to “mandatory”, users will always have the time to process their personal information before subscribing to the account recovery. However, they will be prompted each time after signing in to join the program.

## How to recover your account?

Before requesting for an account recovery and to make sure this goes well, some conditions must be fulfilled:

- The account recovery program has to be configured by an administrator
- Users must have subscribed to the account recovery program. During the subscription, the private key is provided to the organization, without this step, no recovery could be done
- The process of recovering an account must be done in the same browser and browser profile all along the process. If there is a change in browser or profile, the procedure will fail at some point and users will have to restart from the beginning.

### When can we use the account recovery process?

As long as the previous conditions are met, the process could be used at any time. But, just to clarify it, here’s a list of scenario where users might request for an account recovery:

- Users have their Passbolt extension configured but they forgot their passphrase and it’s not possible to sign into the application anymore.
- Users wish to configure their Passbolt extension on a new browser or browser profile but they have lost their recovery kit.
- Users wish to configure their Passbolt extension on a new browser or browser profile, they have their recovery kit but forgot the passphrase associated with it.
- Users wish to configure their Passbolt extension on a new browser or browser profile, they have their recovery kit and remember their passphrase. They still could use the account recovery procedures. However, using the recovery kit is much easier and faster to follow (link).

### How to start an account recovery procedure?

There are 2 ways to start the procedure:

1. Assuming the browser extension is configured but the passphrase is lost: users can, at any time, click on the “help, I lost my passphrase” link in the sign in screen. An email will be sent to them to start the procedure.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-help-lost-passphrase.png"
    legend="Login screen with the account recovery feature" 
    width="550px"
%}

2. Assuming users are configuring Passbolt for a new browser or a new browser profile: during the process, they will be prompted to provide a recovery kit and its passphrase. If one of the information is missing, users can click on the “help, I lost my private key” link. Users will receive an email to start the procedure.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-help-lost-private-key.png"
    legend="Recover screen with the help link" 
    width="550px"
%}

### How does the account recovery procedure look like

1. Users have asked for an account recovery and just received an email to start. The email contains a link that brings the users to the account recovery request page. Pay attention that at this moment, the browser being used must be the one on which the browser extension has to be configured to access the application. If the browser or profile is changed during the process users will be blocked at some point and might need to restart from the beginning.

2. Users are prompted to provide a new passphrase and set their security token. Please note that the chosen passphrase is not a temporary one and will be the new passphrase to sign in. It’s the same for the security token.

3. After these steps, an email is sent to the administrators to tell them that an account recovery has been requested. Users need to wait for them to accept the account recovery request (they could also reject it if they wish and users won’t be able to finish the recovery process).

4. If they reject or accept the request an email is sent to inform the users about their choice. If it’s accepted, the email contains a link that users can follow to go on with the account recovery procedure.

5. At this step, users are asked to provide the passphrase they chose previously. If they don’t remember it, they’re still able to request for another account recovery from the interface. After entering the right passphrase, the browser extension will sign the users in after ensuring they have downloaded their new recovery kit.
