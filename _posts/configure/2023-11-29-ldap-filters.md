---
title: Using LDAP Filters
date: 2023-11-30 00:00:00 Z
description: How to use the filters to configure your Users Directory
icon: fa-address-book-o
categories: [configure,ldap]
sidebar: configure
layout: default
slug: ldap-filters
permalink: /:categories/:slug.html
---
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
    content="**Important:** The Ldap plugin is part of [Passbolt Pro](https://www.passbolt.com/pricing/pro) only and is not available in the Community Edition."
%}

## Introduction
As part of the Users Directory feature passbolt offers two ways to help filter your Active Directory/OpenLDAP users and groups so you have more control over which users and groups are synchronized. This page will go over how to use both of these options. 

## Groups & Users Parent Group
One of the options for filtering users and groups is to use the Groups Parent Group or the Users Parent Group option. This can be found under the Synchronization options section of the Users Directory configuration page.

{% include articles/figure.html
    url="/assets/img/help/2023/11/LDAP_parent_group.png"
    legend="Ldap settings parent group fields"
    width="660px"
    alt="ldap parent group"
%}

This option will allow you to specify a Parent Group for your users or groups. Passbolt will then only look for Users or Groups which are part of that Parent group and use those for synchronization. This is most useful if you have directory set up where the Users or Groups you want to synchronize are all under the same group. For this field you can use just the name of the group, for example:
- admins
- testers
- Passbolt_Users
- Passbolt Groups

## Group & User custom filters
The other option we have is to use custom filters for users or groups. This can be found under the Directory configuration section of the Users Directory configuration page.

{% include articles/figure.html
    url="/assets/img/help/2023/11/LDAP_custom_filter.png"
    legend="Ldap settings custom filter fields"
    width="660px"
    alt="ldap custom filter"
%}
These fields will accept standard LDAP query syntax. This is useful if you need just a few groups/users or wish to exclude one which may have normally been synchronized. These fields provide more flexibility when interacting with more complicated directory structures. Some examples of the expected syntax are:

- `(memberof=cn=somegroup)`
  - This would be for the users filter for members of "somegroup"
- `(|(cn=admins)(cn=testers))`
  - This would be for the groups "admins" or "testers"
- `(uid=*smith*)`
  - This would be for any user with "smith" in their uid

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
