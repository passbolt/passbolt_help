---
title: Configure passbolt with the wizard
date: 2017-03-20 00:00:00 Z
description: Configure passbolt with the wizard
icon: fa-server
categories: [hosting,configure]
sidebar: hosting
layout: default
slug: wizard
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Configuration steps
Once your server is configured, you need to point your browser to the hostname / ip where passbolt can be reached. You will 
reach a welcome page.

{% include figure.html
    url="/assets/img/help/2018/04/passbolt-welcome-page.png"
    legend="passbolt welcome page before configuration"
    width="586px"
%}

Two options are available: **Manual configuration** and **Wizard configuration**. Choose Wizard configuration.

This tutorial will guide you through the different steps of the wizard. The manual configuration is not 
covered in this article.

### 1. Healthcheck
The first page of the wizard will tell you if your environment is ready for passbolt. If you used the install script, then it's only
a formality. Click on "Start configuration".

{% include figure.html
    url="/assets/img/help/2018/04/wizard-healthcheck.png"
    legend="wizard - healthcheck"
    width="586px"
%}

### 2. Subscription key
At this step, the wizard will ask you for your subscription key. You should have received it by email soon after your online purchase.
Enter it in the box.

{% include figure.html
    url="/assets/img/help/2018/04/wizard-subscription-key.png"
    legend="wizard - subscription key"
    width="586px"
%}

### 3. Database
This step is about telling passbolt which database to use. Enter the host name, port number, database name, username and password. 

{% include figure.html
    url="/assets/img/help/2018/04/wizard-database.png"
    legend="wizard - database"
    width="586px"
%}

### 4. GPG key
In this section you can either generate or import a GPG key pair. This key pair will be used by passbolt API to authentify itself during the
authentication handshake process.

Generate a key if you don't have one.

{% include figure.html
    url="/assets/img/help/2018/04/wizard-key-generate.png"
    legend="wizard - generate a key pair"
    width="586px"
%}

Import a key if you already have one and you want your server to use it.

{% include figure.html
    url="/assets/img/help/2018/04/wizard-key-import.png"
    legend="wizard - import a key pair"
    width="586px"
%}

### 5. Mail server (SMTP)
At this stage, the wizard will ask you to enter the details of your SMTP server.

{% include figure.html
    url="/assets/img/help/2018/04/wizard-smtp.png"
    legend="wizard - smtp mail server details"
    width="586px"
%}

You can also test that your configuration is correct by using the test email feature at the right of your screen. Enter
the email address at which you want the wizard to send you a test email and click on "Send test email".

{% include figure.html
    url="/assets/img/help/2018/04/wizard-test-email.png"
    legend="wizard - test smtp settings"
    width="300px"
%}

### 6. Preferences
The wizard will then ask you what preferences you prefer for your instance of passbolt. The recommended defaults are already pre-populated
but you can also change them if you know what you are doing.

{% include figure.html
    url="/assets/img/help/2018/04/wizard-preferences.png"
    legend="wizard - preferences"
    width="586px"
%}

### 7. Installation
That's it. The wizard has now enough information to proceed with the configuration of passbolt. Sit back and relax for a few seconds while 
the configuration process is going on.

{% include figure.html
    url="/assets/img/help/2018/04/wizard-installation.png"
    legend="wizard - installation"
    width="586px"
%}

### 8. First user creation
Passbolt is now configured. You need to create the first admin user account. This first admin user is probably you, so enter
your details and click on next.

{% include figure.html
    url="/assets/img/help/2018/04/wizard-first-user.png"
    legend="wizard - first user"
    width="586px"
%}

### 9. That's it!
Your user account is now created. You will see a redirection page for a few second and then will be redirected
to the user setup process so that you can configure your user account.

{% include figure.html
    url="/assets/img/help/2018/04/wizard-redirection.png"
    legend="wizard - completion and redirection"
    width="586px"
%}

{% include updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when installing passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}

{% include layout/row_end.html %}