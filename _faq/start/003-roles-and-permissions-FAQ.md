---
title: Roles and permissions FAQ
slug: roles-and-permissions-faq
layout: faq
category: start
permalink: /faq/start/:slug
date: 2022-05-02 00:00:00 Z
---

### What are the main differences between passbolt resource permissions?

Passbolt offers three permissions at the resource level:

* **Owner**: can manage share settings, delete, update, read.
* **Update**: can update the record and delete.
* **Read**: can only read and use the password metadata and secret.

{% include messages/warning.html
    content="<b>Warning:</b> A User with **Update** right is able to delete a resource. The main difference between **Owner** and **Update** right is the ability for the **Owner** 
    to share a resource."
%}

### What happens when you delete a user who is sole owner of a resource shared with a group or user? Does the group/user keeps access to this resource or is it deleted?

When a user, sole owner of a resource, is about to be deleted, a popup window is displayed and passbolt admin will be asked to transfer ownership of the resource to the group or user.

{% include articles/figure.html
    url="/assets/img/help/2022/05/delete-user-group.png"
    legend="Shared password ownership transfer"
    width="500px"
%}

If the deleted user was also the sole group manager, passbolt admin will promote another user of the group as group manager.

### What happens when you delete a user who owns non-shared resources?

Unlike shared ones, non-shared resources of a deleted user will be deleted as well. 

### What is the difference between a group manager and group member?

The group manager is a group member who can add or delete users to a given group, and promote them as another group manager. No more, no less.

It is possible for a group member to share a resource he owns in "read-only" mode with the group. Group manager doesn't have extra-rights to edit resources ownership.

### Who can create a group in passbolt?

Only a passbolt administrator can create groups on passbolt.
