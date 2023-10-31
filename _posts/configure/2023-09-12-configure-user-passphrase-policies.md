---
title: How to configure User Passphrase Policies
date: 2023-09-13 00:00:00 Z
card_title: How to configure User Passphrase Policies
card_teaser: Define minimal user's passphrase minimal strength required
icon: fa-brands fa-google
categories: [configure]
sidebar: configure
layout: default
slug: user-passphrase-policies
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/notice.html
content="**Attention**: This feature is only available in Passbolt Pro Edition."
%}

Since version 4.3.0, Passbolt Pro Edition supports User Passphrase Policies.

{% include articles/figure.html
url="/assets/img/help/2023/09/passbolt-user-passphrase-policies.png"
legend="Passbolt GUI - User Passphrase Policies administration"
%}

## How does it work?

User Passphrase Policies allows administrators to configure minimal strength requirements for the users' private key passphrase.
When defining a new passphrase, users have to find a passphrase that matches these policies.

Also, it allows to choose rather or not if a user's passphrase should be check against an external service to know if it has been leaked or not.

## How to configure the plugin?

The plugin is enabled by default and since the version 4.3.0 of the browser extension, Passbolt uses this new User Passphrase Policies feature in all concerned UI.
To configure it though, you need to go the administration of your Passbolt instance and then go to the “User Passphrase Policies" section.

At this stage, you can see 2 configurable sections:

- User passphrase minimal entropy
- External password dictionary check

### User passphrase minimal entropy

This section allows administrators to choose among a preset of minimal entropy a user's private key passphrase needs to match.
It concerns only the passphrase of the users' private key and not the secret generated for the creation of a new password for instance (to change the secret generation behaviour, please refer to the Password Policies configuration page).

As a consequence when a user has to define a passphrase, it will be required that the passphrase strength matches the minimal entropy set. In other words the strength of the passphrase will have to fit the requirements when:

- a user is changing its private key passphrase
- a user is defining a new passphrase during the account recovery process
- a user is defining a passphrase during the creation of its Passbolt account

Notice that on some cases, passphrases does not have to match this requirements but instead the minimal entropy is shown as a recommendation. It's the case when users import an already existing GPG private key, so when:

- a user is recovering its account using its recovery kit
- a user is creating a new account and imports its own encrypted GPG key

{% include articles/figure.html
url="/assets/img/help/2023/09/passbolt-user-passphrase-policies_setup.png"
legend="Passbolt GUI - Setup process with User Passphrase Policies"
width="423px"
%}

### External password dictionary check

This option allows the administrators to choose rather if a passphrase a user is typing should be checked against an external service or not.
If this option is disabled, a warning message is shown to the user that their passphrase could be leaked in a database but their Passbolt application cannot verify that.

On the contrary, if the option is enabled, requests are made to an external service to check if the currently typed passphrase is known in some data breach (notice that a hash of the passphrase is sent to the external service and not the passphrase itself).
In case of the passphrase being known in data breach the user will be informed via a warning message.

This feature impacts the behaviour of the application by:

- blocking processes if the minimal entropy is required (not just recommended) in that process and the currently typed passphrase is leaked in a database
- not blocking processes if the minimal entropy is recommended (not required)
- not blocking processes if the external service cannot be called for any reason regardless of the minimal entropy being a requirement or a recommendation

{% include articles/figure.html
url="/assets/img/help/2023/09/passbolt-user-passphrase-policies_leaked.png"
legend="Passbolt GUI - Setup process with a leaked password"
width="423px"
%}
