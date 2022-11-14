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

[You are running Passbolt Pro < 3.7.3 ?](#outdate) 

## How does it work?
Configuring email server, but through the UI, this is a feature introduced with passbolt v3.8.0 that as for aim to help all administrators who needs to change their SMTP server settings the easiest way. 
We moved the email configuration from `config/passbolt.php` directly to the database. Now, your credentials are encrypted with the server GPG public key.

## Access to email server configuration
In order to configure your email server configuration, go to administration setting workspace. <br>
*Administration > Email server*

### Choose your email provider
When you consult your email server setting for the first time, by default, the provider is **Other**. Everything is filled out except logins details. You are free to edit thoses fields to match your email configuration. 

![Email server settings](/assets/img/help/2022/11/email_serversettings.png)

We also provide pre-filled configuration for most common mail server such as Gmail, AWS SES, etc. But still, you can navigate through *advanced settings* to change the smtp host, tls, port.

### Save the settings
To save the settings, you have to click on the "Save settings" button in the action bar. When the settings are saved a success snack bar appears to confirm the settings have been saved.
![Email saving settings](/assets/img/help/2022/11/email_save.png)
If at least one mandatory field is empty or doesn’t have the expected format, an error snackbar appears and the interface jumps to the first mandatory field that doesn’t fit the requirements. This field also shows an error message in red.

### Test email notifications
You can test your configuration by clicking on the "send test email" button. You must enter a valid recipient email to start the test procedure but the administrator current email is pre-populated.
![Email test](/assets/img/help/2022/11/email_tests.png)
A "pro tip" banner displays additional information to ensure that the admin can check the configuration in the best conditions.

When the *Send* button is clicked, a spinner indicates that the operation is in progress and the text field is diasbled.
If the email has been successfully sent, the dialog displays a confirmation message with a pro tip banner to indicate that you should check your spam folder in case the email was not received.
The logs are also available in a text area if you unfolds the logs section.

<br>

# Environment variables
If you are using environment variables, it is still possible to configure your email settings. But you have to know that the database prevails on environment variables. If you were using environment variables while upgrading to the latest version, they will be moved to the database.

#### TLS
```bash
EMAIL_TRANSPORT_DEFAULT_HOST=your.smtp.provider.host.com
EMAIL_TRANSPORT_DEFAULT_PORT=587
EMAIL_TRANSPORT_DEFAULT_USERNAME=user
EMAIL_TRANSPORT_DEFAULT_PASSWORD=secret
EMAIL_TRANSPORT_DEFAULT_TLS=true
```
Replace "your.smtp.provider.host.com", "user" and "secret" with the actual values for your provider. Usually email providers that support TLS use port 587 however you should check with your provider specific requirements.

#### SSL
```bash
EMAIL_TRANSPORT_DEFAULT_HOST=ssl://your.smtp.provider.host.com
EMAIL_TRANSPORT_DEFAULT_PORT=465
EMAIL_TRANSPORT_DEFAULT_USERNAME=user
EMAIL_TRANSPORT_DEFAULT_PASSWORD=secret
EMAIL_TRANSPORT_DEFAULT_TLS=null
```

# <a name="outdate"></a> Configure email with a deprecated version of passbolt



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

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include layout/row_end.html %}
