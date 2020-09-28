---
title: Configure email providers
date: 2020-03-06 00:00:00 Z
description: Configuration of email providers
icon: fa-key
categories: [configure,email]
sidebar: configure
layout: default
slug: setup
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction

Passbolt relies heavily on emails:
  - Account creation
  - Account recovery
  - Notifications on different user actions

Having a working email setup is essential if you want to use passbolt at its best. There are many email providers
and each one has its own setup process. The aim of this help page is to provide the basic concepts so each admin
can setup their provider adjusting to their particular case.

## TLS email providers

If your email provider supports TLS encryption your setup should look like this in `config/passbolt.php`:

```bash
    'EmailTransport' => [
        'default' => [
            'host' => 'your.smtp.provider.host.com',
            'port' => 587,
            'username' => 'user',
            'password' => 'secret',
            'tls' => true,
        ],
    ],
```

Or, if you are using environment variables:

```bash
EMAIL_TRANSPORT_DEFAULT_HOST=your.smtp.provider.host.com
EMAIL_TRANSPORT_DEFAULT_PORT=587
EMAIL_TRANSPORT_DEFAULT_USERNAME=user
EMAIL_TRANSPORT_DEFAULT_PASSWORD=secret
EMAIL_TRANSPORT_DEFAULT_TLS=true
```

Replace 'your.smtp.provider.host.com', 'user' and 'secret' with the actual values for your provider.
Usually email providers that support TLS use port 587 however you should check with your provider specific
requirements.

## SSL email providers

Some providers support SSL encryption and the setup is slightly different from the TLS case. Just change
your `config/passbolt.php` file to look like this:

```bash
    'EmailTransport' => [
        'default' => [
            'host' => 'ssl://your.smtp.provider.host.com',
            'port' => 465,
            'username' => 'user',
            'password' => 'secret',
            'tls' => null,
        ],
    ],
```

In the case of using env variables:

```bash
EMAIL_TRANSPORT_DEFAULT_HOST=ssl://your.smtp.provider.host.com
EMAIL_TRANSPORT_DEFAULT_PORT=465
EMAIL_TRANSPORT_DEFAULT_USERNAME=user
EMAIL_TRANSPORT_DEFAULT_PASSWORD=secret
EMAIL_TRANSPORT_DEFAULT_TLS=null
```

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include layout/row_end.html %}
