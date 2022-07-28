---
title: Account Recovery configuration
date: 2022-07-28 00:00:00 Z
card_title: How to configure the Account Recovery
icon: fa-digitalocean
categories: [configure]
sidebar: configure
layout: default
slug: account-recovery
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## What is the account recovery?

In short, the user's private keys (and the associated passphrase) are stored encrypted server side with an organization-wide key. When a user wants to recover their private key, the user would as part of the recovery process generate a temporary new OpenPGP key pair and coordinate transparently through the interface with the administrator. The administrator would be able to share the user key, by decrypting it with this new organization-wide key. 

Some options are provided to make this account recovery process flexible, propose some four settings in the administration to either “always on”, “opt-out” (optional: default on), “opt-in” (optional: default off), “disabled” (always off, like it is now). 

These options are presented to the users during the setup in the form of a checkbox (checked or unchecked by default, disabled or not, depending on the scenario chosen by the admin). A personal setting screen is implemented for the user to place their key in the account recovery if they have already completed the setup prior to the feature being rolled out by an administrator. 

## Requirements before using the account recovery

This feature is available from version 3.6 of Passbolt Pro Edition. So, both the servers and the browser extensions need to be at this minimum version in order to use this feature.

## How to configure the account recovery

### The basics

To access the settings, go to the administration workspace and in the menu click on the account recovery item. The setting form is composed of 2 parts: the policy type and the ORK definition.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-administration-settings.png"
    legend="Account recovery administration settings screen" 
    width="550px"
%}

Four options of policy type are available:

- __Mandatory__: this won’t let the user choose or not to give their encrypted private key to the organization. New users, during the setup will be prompted with an additional screen to inform them about the fact that they are giving their private key to the organization. 
For the current existing users, it’s a bit different. They will be prompt at each login to provide their key but can postpone this action. The reason we made it this way is to let the user not provide personal passwords to the organization by giving them extra time to manage their personal passwords before sharing their encrypted private key.

- __Opt-in or Opt-out__: In these cases, the users will be able to choose to provide their encrypted private key or not. New users will be prompted with an additional screen during the setup of their account to inform them about the feature and let them choose (they cannot postpone their choice though). After login, with an opt-out policy type, current existing users will be prompted to provide their key. In any case existing users will have an attention icon on their avatar to guide them to their user account recovery setting page until they made a subscription choice. Also, if users decide not to provide their key, they are always able to change their mind. However, if a user’s encrypted private key is provided to the organization, they won’t be able to cancel their participation in the recovery program.

- __Disabled__: as the name states, the feature is disabled and nobody can use the account recovery processes. It’s possible for administrators to disabled the account recovery feature at any time. By doing so, all the data related to account recovery are cleared from the database.

#### Setting the ORK

To enable account recovery, it is necessary to provide an ORK. Passbolt provides a way to generate it in situ but it is recommended to generate it manually and then import it.

In both cases, the ORK needs to fulfill the following requirements:
- To be a public key (Passbolt instances never have access the private ORK, only the administrators)
- To use the algorithm: RSA
- To be of a length of: 4096 bits

##### Importing the ORK from somewhere else (recommended)

To import the ORK, simply copy-paste the public ORK in the text area or use the file browsing option. In order to facilitate the use of the gpg command line to generate the ORK manually, administrators can find a step by step guide can be found here.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-administration-setting-ORK-import.png"
    legend="Account recovery administration settings ORK import screen" 
    width="550px"
%}

##### Generating the ORK in passbolt

In the dialog, click on the “Generate” tab. A form appears where it is asked to provide a name, an email address and finally a passphrase.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-administration-setting-ORK-generation.png"
    legend="Account recovery administration settings ORK generation screen" 
    width="550px"
%}

All 3 fields are required but the passphrase has specific checks. In order to reinforce security and due to the criticality of this feature, Passbolt doesn’t allow the usage of weak passphrases at this stage. You will need to provide a passphrase that has an entropy of 80.0 bits minimum and that doesn’t exist in known dictionaries (as a reference we use the service “hasBeenPwnd” to do dictionary checks).

Finally, as Passbolt instances never have access to the private ORK and that it is required that administrators keep it in a safe place. Administrators are asked to download the private key part of the ORK right after its generation. It is mandatory to have it, otherwise it’s impossible to use the account recovery feature later.

#### Validating the changes

Once everything is set, you can click on the “save settings” button. A dialog opens with a summary of the changes made. It is advised to do a careful check here before validating anything (and make sure you have the corresponding private ORK). After that, administrators are asked to provide their personal passphrase (for a safety check) plus the private key with the passphrase of the previously ORK set if the account recovery was enabled before the changes (it’s both necessary for a safety check and for when a rotation of the ORK is being made).

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-administration-settings-summary-review-dialog.png"
    legend="Account recovery administration settings summary review dialog" 
    width="550px"
%}

### Rotating the ORK

TL;DR; it is possible to rotate an ORK without disturbing users even if they already provided their encrypted private key.

It is possible at any time for an administrator to rotate the existing ORK. The process is exactly the same as setting the ORK. However, there is an extra step the browser extension is doing in such a case. 
If it happens, it is possible that users have already provided the organization with their encrypted private key. So, in order to work without asking again all users to provide their private key, the browser extension fetches the encrypted key passwords and rotates their encryption with the new ORK. That is also why administrators are prompted to provide the private ORK with the corresponding passphrase during the rotation process.

### Miscellaneous

In order to reinforce security the browser extension ensures during the decryption of the users’ private key that the keys are provided for the current domain name. So, for example, if a key has been encrypted for domain A but during the decryption process the browser extension is set with domain B or if it’s not possible to determine the domain during the decryption, the process will stop. This means that if migration of domain is done, at the moment it is required to ask the users again to provide their key.
