---
title: Configure Email authentication
date: 2023-02-26 00:00:00 Z
description: Configuration of the authentication methods that is used with SMTP
icon: fa-key
categories: [configure,email]
sidebar: configure
layout: default
slug: smtp-authentication
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Table of contents:
- [Table of contents:](#table-of-contents)
- [Introduction](#introduction)
- [Google](#google)
- [AWS SES](#aws-ses)
- [ElasticEmail](#elasticemail)
- [MailGun](#mailgun)
- [Mailjet](#mailjet)
- [Mandrill](#mandrill)
- [Sendgrid](#sendgrid)
- [Sendinblue](#sendinblue)
- [Zoho](#zoho)

## Introduction
This page is dedicated to providing you with valuable resources to help you configure an authentication method based on the email provider you choose. Authentication is an essential security measure that verifies the identity of users and ensures that only authorized individuals have access to sensitive information. 

In order to follow this guide, you will need an email provider.
If you want to know how to configure your email provider, please [follow this link](/configure/email/setup).


## Google 

Passbolt is providing two different Google SMTP: Google Workspace and Google Email.

**Google Workspace** is a paid productivity suite that includes business email, cloud storage, video conferencing, and other collaboration tools. It is designed for use by businesses and organizations of all sizes, and provides additional features such as custom email addresses, shared calendars, and team drives.

It uses *smtp-relay.gmail.com* as its SMTP server address. This server is intended to be used by applications that send email on behalf of users, such as custom scripts or third-party applications. This server is designed to provide higher sending limits, enhanced reliability, and better tracking of email sent through it.

**Google Email** is a free email service that is available to anyone with a Google account. It is primarily intended for personal use and provides users with a simple, user-friendly email interface.

It uses *smtp.gmail.com* as its SMTP server address. This server is intended for use by individual users who want to send email using a desktop email client, such as Microsoft Outlook or Apple Mail. This server provides standard sending limits and is intended for personal use.


To use Google's authentication method on the Passbolt GUI, it is important to note that you should not use your personal admin Google password for security reasons. Instead, you will need to create an "App password" specifically for Passbolt. This is a unique password that will be used solely for Passbolt and is not the same as your personal Google password. 

- Enable MFA
   
In order to have a dedicated application password you will need to enable MFA on your Google account, if you already have MFA enabled you can skip to the second part. 

You will have to navigate from *Manage your Google Account > Security > Signing in to Google*

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-gmail-mfa-not-enabled.png" legend="Google - Enable MFA" width="586px" %}

After clicking on *2-Step-Verification* you should be redirected to a "Get Started" page as shown below

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-enabling-mfa.png" legend="Google - MFA (Get Started)" width="586px" %}

To configure MFA on Google you will need a TOTP Mobile Application. If you do not have one already, we have a dedicated guide, please [follow this link](/configure/mfa/totp).

- Enable Application Password
   
Now that MFA is enabled on your Google account, please go back to *Security > Signing in to Google*

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-gmail-mfa-enabled.png" legend="Google - MFA Enabled" width="586px" %}

You will have the choice for the selection of the application, our recommandation is to use *Other (Custom name)*, as it will be easier for your organisation. In our case, we will name it "Passbolt".

***An application password should have been generated, it contains 16 digits and should not be shared.*** 

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-gmail-app-password.png" legend="Google - Generated App password" width="586px" %}

**WARNING:** Please, note that the password could not be shown after your close the tab, please be sure to copy the application password generated otherwise you will need to generate a new one.

- Authentication on Passbolt GUI

On your Passbolt instance, you can navigate to *Administration > Email server*. 

In our example, we will use Google Email, but if you are using a premium subscription with google, do not forger to use Google Workspace instead. 

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-username-password-authentication.png" legend="Passbolt GUI - Email authentication" width="586px" %}

Under authentication method, choose *Username & password*, provide your Google username which basically is your email address, for the password you can paste the previously generated application password.

- Test your configuration

Before saving your configuration, you will need to test it in order to avoid any issues. It should pass and gives the results shown below.

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-test-email-success.png" legend="Passbolt - Email test success" width="586px" %}

- Save your configuration
  
If everything went as expected, do not forget to save your configuration and **"Success: The SMTP settings have been saved successfully"** should appears.

## AWS SES

## ElasticEmail
- ElasticEmail Administration panel
- Settings
- SMTP > Create SMTP credentials
- Username (owners email)
- Copy paste the generated password (40 digits)
- Test
- Save

## MailGun

- MailGun administration panel
- Sending > Overview
- How to send with SMTP section with SMTP hostname, port, username, default password
- MailGun provide a dedidacted page to manage SMTP credentials, for this example we will use the default generated
- Default password generated should be 50 digits
- Test
- Save

## Mailjet
- Mailjet admin panel
- Senders & Domains > SMTP & Send API settings
- MailGun provide a dedicated page to create API keys, feel free to create a new one, for this example we will use the default one
- Username should be the API Key 
- Password should be the Secret Key
- Test
- Save

## Mandrill
Need to retry the setup.
(Oops! Something went wrong Please try again later or reach out to our support team for help.)
## Sendgrid
- Sendgrid admin panel
- Email API > Integration Guide
- Navigate to SMTP Relay
- Give an API Key name (Passbolt for example)
- Generate the API Key (70 digits)
- Use the settings shown after the api generated key
- Test
- Save
## Sendinblue
- Sendinblue admin panel
- SMTP & API
- Show the SMTP key value and use the provided smtp settings 
- Test
- Save

## Zoho