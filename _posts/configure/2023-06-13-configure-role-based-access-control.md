---
title: How to configure Role-Based Access Control
date: 2023-07-05 00:00:00 Z
card_title: How to configure Role-Based Access Control
icon: fa-cogs
categories: [configure]
sidebar: configure
layout: default
slug: rbac
permalink: /:categories/:slug.html
---

{% assign product = 'ce' %}
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Since version 4.1.0, all editions of passbolt support Role-Based Access Control. 

{% include articles/figure.html
url="/assets/img/help/2023/06/rbac.png"
legend="Role-Based Access Control"
width="850px"
%}

## Requirements

You can follow this procedure if you are meeting the following requirements:

- You are running passbolt >= v4.1.0.
- You have an active administrator account.

## How does it work?

RBAC is a feature introduced that as for aim to restrict the access of functionalities to users.

According to the administrator choices, users can be restricted to some functionalities. The administrator has only to chose between allow or deny options for the functionalities.

## RBAC

In order to configure RBAC for your organisation, go to administration setting workspace *Administration* > *Role-Based Access Control*.

### Choose to restrict or not a functionality

By default, all functionalities are allowed. To deny one select and restrict the one that suits best your organization.

{% include articles/figure.html
url="/assets/img/help/2023/06/rbac-select-permission.png"
legend="RBAC administration settings select permission"
width="550px"
%}

### Apply the changes

Once the RBAC is configured as you wish, you can apply the changes. Click on the “save settings” button.

{% include articles/figure.html
url="/assets/img/help/2023/06/rbac-save.png"
legend="RBAC administration settings save changes"
width="550px"
%}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
