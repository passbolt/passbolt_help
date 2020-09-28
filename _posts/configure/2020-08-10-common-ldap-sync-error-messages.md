---
title: Most common ldap sync error messages
date: 2020-03-06 00:00:00 Z
description: List of most common ldap sync error messages and their meaning.
icon: fa-address-book-o
categories: [configure,ldap]
sidebar: configure
layout: default
slug: ldap-common-sync-error-messages
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction

Depending on the structure of your directory or the state of the synchronization between passbolt and your directory, passbolt can report certain synchronization issues. 
They come from a variety of reasons, here are the most common ones.

### The user user@domain.com could not be added to group MyGroup because it is not active yet
This error happens when passbolt is trying to add a user to a group, but the user has not yet activated their account. Passbolt
cannot add such users to groups automatically since their account is not operational yet. 
When this situation happens, no intervention is required. The user will be added to the group automatically once they activate their account (when they click on the link provided in the email invitation and complete the initial setup).

### The user user@domain.com could not be mapped with an existing user in passbolt because it was created after.
This error happens when a user was created first in Passbolt and later in the directory. Passbolt then considers that the passbolt user has the priority and should not be synced, since it would also mean that the same user would get
deleted whenever it is deleted from the directory.
When this situation happens, if you absolutely want to sync these 2 users, the solution is to delete the user in passbolt and to run the synchronization again. The user will then be created again and synced.

### The group MyGroup could not be mapped with an existing group in passbolt because it was created after.
This error happens when a group was created first in Passbolt and later in the directory. Passbolt then considers that the passbolt group has the priority and should not be synced, since it would also mean that the same group would get
deleted whenever it is deleted from the directory.
When this situation happens, if you absolutely want to sync these 2 groups, the solution is to delete the group in passbolt and to run the synchronization again. The group will then be created again and synced.

### The previously deleted user user@domain.com was not re-added to passbolt.
This error happens when a passbolt user was deleted manually in passbolt but not in the directory. Passbolt then considers that the actions performed in passbolt
have a higher priority and that the user was deleted for a good reason.
There is currently no turn-around for this situation apart from re-enabling the user manually in the database (not recommended).

### The user user@domain.com could not be added to the group MyGroup because of an internal error
This error usually happens when the group could not be created in Passbolt for some reason, which means that it is impossible for the
system to create a group membership for the given user.

### A request to add user user@domain.com in group MyGroup was sent to the group manager.
This scenario happens when passbolt attempts to add a user to a group that has passwords directly shared with it. 
In this case, adding our user to the group would mean having to encrypt all the passwords shared with the group for this new group member. 
Due to the end-to-end nature of the solution, the system cannot do it without a human intervention. This is why passbolt sends a request to the group manager so that he can add the user to the group manually, and encrypt the shared secrets at the same time.

Note: this scenario will not happen in the case of groups without direct access to shared passwords. In this case, the user will be added automatically to the group during the sync.

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include layout/row_end.html %}
