---
title: How to configure the Password Policies 
date: 2023-09-14 00:00:00 Z
card_title: How to configure the Password Policies
card_teaser:
description:
icon: fa-key
categories: [configure]
sidebar: configure
layout: default
slug: password-policies
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
content="**Attention**: This feature is currently available only in Passbolt Pro Edition."
%}

Since version 4.2, Passbolt Pro Edition supports the configuration of Password Policies.

{% include articles/figure.html
url="/assets/img/help/2023/09/password-policies-administration.png"
legend="Password Policies administration"
%}

## How does it work?

This feature allows administrators to define the default secret generator settings and an external service should be used to check if the generated passwords have been leaked or not.
These policies concern only the secrets that are accessible in the resource workspace, it's not relative to the user's private key passphrase (for this part, please check the User Passphrase Policies).

Once configured, the secret generators preset their default configuration with these policies. As a consequence, when a secret is generated from the "dice" button or from the in-form menu, generators use the policies as a default configuration.
However, a user still has the possibility to change the configuration on demand to avoid blocking situation when a service asks specific secret patterns.

## How to configure the plugin?

The plugin is enabled by default and since the version 4.2.0 of the API, it is possible to configure the plugin to apply these policies in all concerned UI.
To configure it though, you need to go the administration of your Passbolt instance and then go to the “Password Policies" section.

At this stage, you can see 2 configurable sections:

- Password generator default settings
- External services

### Configuring the default password generators

With this part, the password generator settings can be changed such that it becomes the default configuration when users generate a new secret or the default configuration set when they need to customize the generation of a secret.
The UI is composed in 3 parts:

- the default used generator: password or passphrase
- a togglable pannel to configure in details the password generator
- a togglable pannel to configure in details the passphrase generator

{% include articles/figure.html
url="/assets/img/help/2023/09/password-generator-settings.png"
legend="Default password generator settings"
width="450px"
%}

#### Configuring the password generator

To configure the password generator in details, open the configuration panel by clicking on "Passwords settings". Then you can see an interface close to the password generator configuration.
From there you can change:

- the default length of the generated password
- the default set of characters that the password generator should use.
- if the set of characters should use or not similar characters

To help administrators to have an idea of the strength of the generated password, an entropy bar is displayed on the top of the togglable panel.

{% include messages/warning.html
content="Most generated password strength match the entropy displayed but notice that some generated password strength might be a bit lower than that."
%}

{% include articles/figure.html
url="/assets/img/help/2023/09/passphrase-generator-settings.png"
legend="Default passphrase generator settings"
width="450px"
%}

#### Configuring the passphrase generator

To configure the passphrase generator in details, open the configuration panel by clicking on "Passphrase settings". Then you can see an interface close to the passphrase generator configuration.
From there you can change:

- the default number of words to generate
- the default words separator to use
- the default word case to use during passphrase generation

To help administrators to have an idea of the strength of the generated passphrase, an entropy bar is displayed on the top of the togglable panel. All generated passphrase strength match the entropy displayed.

### Configuring the external dictionary check

This option allows the administrators to choose rather if a secret should be checked against an external service or not.
If this option is disabled, a warning message is shown to the user to inform them that the current secret could be leaked in a database but their Passbolt application cannot verify that.

On the contrary, if the option is enabled, requests are made to an external service to check if the current secret is known in some data breach (notice that a hash of the secret is sent to the external service and not the secret itself).
In case of a secret leaked, the user is informed via a warning message.

These warning messages are shown:

- on the resource creation
- on the resource modification
- on the generation of an Organisation Recovery Kit

{% include messages/warning.html
content="Notice that these external checks are **not** done when a user is importing a set of passwords."
%}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
