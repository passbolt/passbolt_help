---
title: Roles and permissions
slug: roles-and-permissions
layout: faq
category: start
permalink: /faq/start/:slug
date: 2022-05-02 00:00:00 Z
---

## System-wide roles

Passbolt proposes two system roles "admin" and "user". This system is the first line of the authorization mechanism performing checks directly for each user's actions. 

In a nutshell, an administrator manages the instance. In practice it means that they can manage organization-wide settings such as the content of the email notifications or which multiple factor authentication provider is enabled. Another responsibility is to create or delete users, manage groups and group managers, perform synchronization with a user directory, etc.

### Settings

| Action                               | Admin | User |
|--------------------------------------|-------|------|
| Manage email notification settings   | Yes   | No   |
| Manage MFA settings                  | Yes   | No   |
| Manage LDAP settings / sync          | Yes   | No   |
| Choose organization default language | Yes   | No   |
{: .table-parameters }

### Users

| Action                         | Admin | User         |
|--------------------------------|-------|--------------|
| Create users                   | Yes   | No           |
| Rename user                    | Yes   | Yes (if own) |
| Update email address           | Yes   | No           |
| Delete users                   | Yes   | No           |
| Promote/Demote admin           | Yes   | No           |
| View users                     | Yes   | Yes          |
| Select user preferred language | Yes   | Yes (if own) |
{: .table-parameters }

### Groups

| Action                 | Admin                    | User                     |
|------------------------|--------------------------|--------------------------|
| Create groups          | Yes                      | No                       |
| Rename groups          | Yes                      | No                       |
| Add user to group      | See. "Group level roles" | See. "Group level roles" |
| Delete groups          | Yes                      | No                       |
| View groups            | Yes                      | Yes                      |
| View group composition | Yes                      | Yes                      |
{: .table-parameters }

### Others

| Resources / Action | Admin                      | User                       |
|--------------------|----------------------------|----------------------------|
| Create resources   | Yes                        | Yes                        |
| Manage resources   | See “Resource level roles” | See “Resource level roles” |
| Create comments    | Yes                        | Yes                        |
| Delete comments    | Yes                        | Yes (if own)               |
| Manage folders     | See “Folder level roles”   | See “Folder level roles”   |
| Manage tags        | See “Folder level roles”   | See “Folder level roles”   |
{: .table-parameters }

## Group level roles

Each group must have at least one group manager in charge of adding and removing group members. The administrators can appoint themselves as group administrator or appoint a regular user. 

{% include articles/figure.html
    url="/assets/img/help/2022/05/groups workflow.jpg"
    legend="Groups workflow"
%}

Due to the nature of the encryption in passbolt, only someone with access to the secrets of a given group can add a member to that group (as they need to be able to decrypt and encrypt the secret for the new member).

| Action                       | Group manager | Group member |
|------------------------------|---------------|--------------|
| Rename group                 | Yes           | No           |
| Add user to group            | Yes           | No           |
| Remove user to group         | Yes           | No           |
| Promote/Demote group manager | Yes           | No           |
{: .table-parameters }

### Additional resources:

* [Blog post: How passbolt will implement groups (2017)](https://blog.passbolt.com/how-passbolt-will-implement-groups-ee49108a6ff1)
* [Groups functional specifications (2020)](https://docs.google.com/document/d/1b7hwleV0VrU45ARErCutgNBQTD48mjoFVfD_OEE4le8/)

## Resource level roles

Passbolt offers three permissions on the resource level:

* **Owner**: can manage share settings, delete, update, read.
* **Update**: can update the record and delete.
* **Read**: can only read and use the password metadata and secret.

| Operation / Folder Permission         | Owner | Update | Read |
|---------------------------------------|-------|--------|------|
| View resource metadata and secret     | Yes   | Yes    | Yes  |
| Edit resource metadata and secret     | Yes   | Yes    | No   |
| Delete resource                       | Yes   | Yes    | No   |
| Share resource, e.g. edit permissions | Yes   | No     | No   |
{: .table-parameters }

## Folder Level roles

Behind the scenes, permissions for folders will reuse the same permissions system than the one available for the resources. This will allow the user to associate a set of permissions to one or more folders, while reusing the metaphors the users are already accustomed to. 

Like resources, a folder must have an owner permission defined in the folder permissions. Two other permissions types are available: update and read. Each permission type give access to operations as described in the grid below:

| Operation / Folder Permission  | Owner | Update | Read |
|--------------------------------|-------|--------|------|
| View folder permissions        | Yes   | Yes    | Yes  |
| View folder                    | Yes   | Yes    | Yes  |
| Rename folder                  | Yes   | Yes    | No   |
| Delete folder                  | Yes   | Yes    | No   |
| Create an item inside a folder | Yes   | Yes    | No   |
| Move an item inside a folder   | Yes   | Yes    | No   |
| Edit folder permissions        | Yes   | No     | No   |
{: .table-parameters }

Once an item is inside a folder what can be done with the items does not depend on the folder permission but the item itself, like on a regular file system. For a user to move an item that is inside a folder they must generally at least have update rights on the item and the destination folder.

| Operation / Enclosed Item Permission | Owner | Update | Read                                                                       |
|--------------------------------------|-------|--------|----------------------------------------------------------------------------|
| Move an item outside the folder      | Yes   | Yes    | Only in some cases. See Approach to personal & shared folder organizations |
| Edit the resource                    | Yes   | Yes    | No                                                                         |
| Delete the resource                  | Yes   | Yes    | No                                                                         |
{: .table-parameters }

### Approach to folder permissions inheritance

One of the key requirements is to be able to apply a given folder permission to the items inside it. For example when a user “share” a folder or create a new item in that folder, or drop an existing resource in a folder, the folder permissions will be applied to the items where possible.

The “where possible” is important here. While folders in passbolt can be used to organize resources and apply permissions, folders do not enforce the permission on its enclosed content at all times, but serve as a guide when an operation such as create or move is performed. As we have seen exceptions can be created, i.e. it is possible for a user to have more rights on an item than they have on a given folder. The opposite is also possible, the same way it is possible to create a hidden or restricted file in a shared folder in a traditional filesystem. 

One should picture a folder permission list as a permission mask, i.e. a predefined set of group/user rights, that could be applied to the folder content whenever a user is interacting with it. Applying permissions on a folder is the equivalent of selecting all the resources the user has the right to share inside the given folder and apply a new set of permission to this selection. Items where the user does not have access to (or cannot edit the permissions) will be ignored.

This approach is also needed to work with the limitation of the end to end encryption scheme. Indeed only a user that has access to a secret can provide such access to another user. 

A user with can update as a permission is able to move a secret from one folder to another folder. In this case if the new folder is shared with more users these users won't have the secret shared with them. This is because to share a secret a user needs to have the owner permission on the secret. To ensure a secret inherits the permissions you expect it is best to have a user with the owner permission move the secret to the new folder. 

### Additional resources

* [Blog post: Introducing the new “Folders” feature (2020)](https://blog.passbolt.com/introducing-the-new-folders-feature-77366ae59315)
* [Folders functional specifications (2020)](https://docs.google.com/document/d/1pSR97b5emJH5XxMME_lN4CqLUfYFuDw6DGCMJ_XjF-o)