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

- Navigate through your navigation panel

You'll see the navigation panel on the left-hand side of the screen.

When you are on the navigation panel, you will need to navigate to *Email Sending > SMTP Settings*. 

- Create your SMTP Credentials
  
Once you are on the SMTP Settings page, you can click on the "Create My SMTP Credentials" button to begin the process. When prompted, you can either accept the default name for your credentials or choose a custom name that is easy for you to remember, such as "Passbolt".

Once you have selected a name for your credentials, AWS SES will generate a set of SMTP credentials that you can use to authenticate your email sending requests. These credentials will consist of an SMTP username and password.

To download your newly created SMTP credentials, simply click on the "Download Credentials" button. This will download a file containing your SMTP username and password. It's important to keep this file safe and secure, as it contains sensitive information that can be used to send emails from your account.

- Authentication on Passbolt GUI
  
On your Passbolt instance, you can navigate to *Administration > Email server*. 

You will need to fill your smtp credentials to match your authentication method (username & password).

- Test your configuration

Before saving your configuration, you will need to test it in order to avoid any issues. It should pass and gives the results shown below.

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-test-email-success.png" legend="Passbolt - Email test success" width="586px" %}

- Save your configuration
  
If everything went as expected, do not forget to save your configuration and **"Success: The SMTP settings have been saved successfully"** should appears.

## ElasticEmail

- Administration panel

When you are using ElasticEmail, once logged in, you will be automatically redirected to the administration panel dashboard. 

You will need to navigate to *Settings > SMTP > Create SMTP credentials*.

- Create your SMTP Credentials

When you create new SMTP credentials, ElasticEmail will generate a unique password consisting of 40 random characters. The username for your SMTP credentials is your email address associated with your ElasticEmail account.

To copy your newly generated password, simply click on the "Copy" button next to the password field. 

- Authentication on Passbolt GUI
  
On your Passbolt instance, you can navigate to *Administration > Email server*. 

You will need to fill your smtp credentials to match your authentication method (username & password).

- Test your configuration

Before saving your configuration, you will need to test it in order to avoid any issues. It should pass and gives the results shown below.

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-test-email-success.png" legend="Passbolt - Email test success" width="586px" %}

- Save your configuration
  
If everything went as expected, do not forget to save your configuration and **"Success: The SMTP settings have been saved successfully"** should appears.

## MailGun

- Administration panel

When you are using MailGun, once logged in, you will be automatically redirected to the administration panel dashboard. 

You will need to navigate to *Sending > Overview*.

- Create your SMTP Credentials 

On this page you will find the SMTP hostname, port, username, and default password that you will need to set up SMTP authentication for your email sending requests.

MailGun provides a dedicated page for managing your SMTP credentials. To access this page, you can click on the "SMTP Credentials" link located in the "SMTP" section. Here you can create new SMTP credentials by clicking on the "Add New SMTP Credential" button.

When you create new SMTP credentials on MailGun, the platform will generate a unique password consisting of 50 random characters. You can use this password to authenticate your email sending requests through the MailGun SMTP servers. The SMTP username is the same as the SMTP login for your account.

It's important to keep your MailGun SMTP credentials secure, as they can be used to send emails from your account. You should never share your password or username with anyone, and you should take steps to protect your account from unauthorized access.

- Authentication on Passbolt GUI
  
On your Passbolt instance, you can navigate to *Administration > Email server*. 

You will need to fill your smtp credentials to match your authentication method (username & password).

- Test your configuration

Before saving your configuration, you will need to test it in order to avoid any issues. It should pass and gives the results shown below.

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-test-email-success.png" legend="Passbolt - Email test success" width="586px" %}

- Save your configuration
  
If everything went as expected, do not forget to save your configuration and **"Success: The SMTP settings have been saved successfully"** should appears.

## Mailjet

- Administration panel

When you are using Mailjet, once logged in, you will be automatically redirected to the administration panel dashboard. 

You will need to navigate to *Senders & Domains > SMTP & Send API settings*.

- Create your SMTP Credentials 

Mailjet provides a dedicated page for managing your API keys. You can create a new API key by selecting the "SMTP & API Keys" option from the dashboard, clicking on the "Create a new API Key" button, and then following the prompts.

When you create a new API key on Mailjet, the platform will generate a unique key consisting of a public API key and a secret key. The public API key can be used as the SMTP username for your email sending requests, while the secret key can be used as the SMTP password.

It's important to keep your Mailjet API keys secure, as they can be used to access your Mailjet account and send emails from your account. You should never share your secret key or public API key with anyone, and you should take steps to protect your account from unauthorized access.

- Authentication on Passbolt GUI
  
On your Passbolt instance, you can navigate to *Administration > Email server*. 

You will need to fill your smtp credentials to match your authentication method (username & password).

- Test your configuration

Before saving your configuration, you will need to test it in order to avoid any issues. It should pass and gives the results shown below.

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-test-email-success.png" legend="Passbolt - Email test success" width="586px" %}

- Save your configuration
  
If everything went as expected, do not forget to save your configuration and **"Success: The SMTP settings have been saved successfully"** should appears.

## Mandrill
Need to retry the setup.
(Oops! Something went wrong Please try again later or reach out to our support team for help.)
## Sendgrid

- Administration panel

When you are using Sendgrid, once logged in, you will be automatically redirected to the administration panel dashboard. 

You will need to navigate to *Email API > Integration Guide > SMTP Relay*.

- Create your SMTP Credentials 

When creating a new API key, you can give it a name that's easy for you to remember, such as "Passbolt". SendGrid will then generate a unique API key consisting of 70 random characters. This key can be used to authenticate your email sending requests through the SendGrid SMTP servers.

After generating the API key, you can use the settings shown to configure your email client or application. The SMTP hostname is "smtp.sendgrid.net", the port number is 587, and the SMTP username is "apikey". The SMTP password is the API key that you generated in the previous step.

It's important to keep your SendGrid API key secure, as it can be used to access your SendGrid account and send emails from your account. You should never share your API key with anyone, and you should take steps to protect your account from unauthorized access. 

- Authentication on Passbolt GUI
  
On your Passbolt instance, you can navigate to *Administration > Email server*. 

You will need to fill your smtp credentials to match your authentication method (username & password).

- Test your configuration

Before saving your configuration, you will need to test it in order to avoid any issues. It should pass and gives the results shown below.

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-test-email-success.png" legend="Passbolt - Email test success" width="586px" %}

- Save your configuration
  
If everything went as expected, do not forget to save your configuration and **"Success: The SMTP settings have been saved successfully"** should appears.
## Sendinblue

- Administration panel

When you are using Sendinblue, once logged in, you will be automatically redirected to the administration panel dashboard. 

You will need to navigate to *SMTP & AI*.

- Create your SMTP Credentials 

You will find your SMTP key value under the "SMTP Credentials" section. This key can be used to authenticate your email sending requests through the Sendinblue SMTP servers.

Sendinblue also provides the SMTP settings that you can use to configure your email client or application. The SMTP username is your Sendinblue account email address. The SMTP password is your SMTP key value.

It's important to keep your Sendinblue SMTP key value secure, as it can be used to access your Sendinblue account and send emails from your account. You should never share your SMTP key value with anyone, and you should take steps to protect your account from unauthorized access.

- Authentication on Passbolt GUI
  
On your Passbolt instance, you can navigate to *Administration > Email server*. 

You will need to fill your smtp credentials to match your authentication method (username & password).

- Test your configuration

Before saving your configuration, you will need to test it in order to avoid any issues. It should pass and gives the results shown below.

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-test-email-success.png" legend="Passbolt - Email test success" width="586px" %}

- Save your configuration
  
If everything went as expected, do not forget to save your configuration and **"Success: The SMTP settings have been saved successfully"** should appears.

## Zoho

- Administration panel

You will need to navigate to your ZohoMail administration panel, in order to do that you can click on the gear icon located in the top-right corner of the screen. A drop-down menu will appear with several options, please click on the "Control Panel" to access the Zoho administration panel

You will need to navigate to *Security > App password*.

- Create your SMTP Credentials 

You will be prompt to generate a name for the "App password", we recommand to use "Passbolt".

Then, you will need to click on "Generate" and a random application password will be generated.

Please, be sure to save this password as you will need it to authenticate on the Passbolt GUI.

Your SMTP username should be the Zoho account email address and your SMTP password is the application that has been generated previously.

- Authentication on Passbolt GUI
  
On your Passbolt instance, you can navigate to *Administration > Email server*. 

You will need to fill your smtp credentials to match your authentication method (username & password).

- Test your configuration

Before saving your configuration, you will need to test it in order to avoid any issues. It should pass and gives the results shown below.

{% include articles/figure.html url="/assets/img/help/2023/02/smtp-test-email-success.png" legend="Passbolt - Email test success" width="586px" %}

- Save your configuration
  
If everything went as expected, do not forget to save your configuration and **"Success: The SMTP settings have been saved successfully"** should appears.