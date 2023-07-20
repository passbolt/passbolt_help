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

## Requirements
You can follow this procedure if you are meeting the following requirements:

- You are running Passbolt Pro > 3.8.0 or Passbolt Cloud
- You have an active administrator account

[You are running Passbolt Pro < 3.7.3 ?](#outdated) 

## How does it work?
Configuring email server, but through the UI is a feature introduced with Passbolt v3.8.0 that as for aim to help all administrators who needs to change their SMTP server settings the easiest way. <br> 
We moved the email configuration from *`config/passbolt.php`* directly into the database and your credentials are encrypted with the server GPG public key.

## Access to email server configuration
In order to configure your email server configuration, go to administration setting workspace. <br>
*Administration > Email server*

### Choose your email provider
When you consult your email server settings for the first time, by default, the provider is **Other**. Everything is filled out except logins details. You are free to edit thoses fields to match your email configuration. 

{% include articles/figure.html url="/assets/img/help/2023/07/email_server_settings_v4.png" legend="Email Server - Providers" width="586px" %}

We also provide pre-filled configuration for most common mail server such as Gmail, AWS SES, etc. 
<br>
But still, you can navigate through *advanced settings* to change all the setings like *SMTP host*, *TLS*, and *port*.

### Save the settings
To save the settings, you have to click on the *save settings* button.
{% include articles/figure.html url="/assets/img/help/2023/07/email_success_box_v4.png" legend="Email Server - Save configuration" width="586px" %}
If at least one mandatory field is empty or doesn’t have the expected format, an error alert will appears and the interface jumps to the first mandatory field that doesn’t fit the requirements. This field will also shows an error message in red.

### Test email notifications
You can test your configuration by clicking on the *send test email* button. You must enter a valid recipient email to start the test procedure but the administrator current email is pre-filled.
{% include articles/figure.html url="/assets/img/help/2022/11/email_tests.png" legend="Email Server - Test notifications" width="586px" %}


If the email has been successfully sent and you haven't received anything you should check your spam folder.
The logs are also available in a text area if you unfolds the logs section.
<br>

# Environment variables
If you are using environment variables, it is still possible to configure your email settings. 
<br>
Please note that the database prevails on environment variables. If you were using environment variables while updating to v3.8.0 or newer version, they will be moved into the database.

#### TLS
```bash
EMAIL_TRANSPORT_DEFAULT_HOST=your.smtp.provider.host.com
EMAIL_TRANSPORT_DEFAULT_PORT=587
EMAIL_TRANSPORT_DEFAULT_USERNAME=user
EMAIL_TRANSPORT_DEFAULT_PASSWORD=secret
EMAIL_TRANSPORT_DEFAULT_TLS=true
```
You should replace:
- your.smtp.provider.host.com
- user
- secret
 
With the actual values for your provider. Usually email providers that support TLS use port 587 however you should check with your provider specific requirements.

#### SSL
```bash
EMAIL_TRANSPORT_DEFAULT_HOST=ssl://your.smtp.provider.host.com
EMAIL_TRANSPORT_DEFAULT_PORT=465
EMAIL_TRANSPORT_DEFAULT_USERNAME=user
EMAIL_TRANSPORT_DEFAULT_PASSWORD=secret
EMAIL_TRANSPORT_DEFAULT_TLS=null
```

All the changes are the same as the TLS providers except that you will set **EMAIL_TRANSPORT_DEFAULT_TLS** to null and replace placeholders with the actual values for your provider.

## <a name="outdated"></a> Configure SMTP with Passbolt 3.7.3 or earlier version



### TLS email providers 

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
You should replace:
- your.smtp.provider.host.com
- user
- secret
  
With the actual values for your provider. 
Usually email providers that support TLS use port 587 however you should check with your provider specific
requirements.

### SSL email providers 

Some providers support SSL encryption and the setup is slightly different from the TLS case. Just change
your *`config/passbolt.php`* file to look like this:

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

All the changes are the same as the TLS providers except that you will set **tls** to null and replace placeholders with the actual values for your provider.

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include layout/row_end.html %}
