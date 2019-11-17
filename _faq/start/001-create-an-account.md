---
title: How to create and setup an account
slug: account-setup
layout: faq
category: start
permalink: /faq/start/:slug
date: 2017-01-20 00:00:00 Z
---

## Creating a demo account
Passbolt requires a server to work. You can either [install it on your own]({{ "/hosting/install" | absolute_url }}) machine
or use the demo environment. Here is the procedure to try out the demo:

**Step 1.** Open the demo page: [https://demo.passbolt.com](https://demo.passbolt.com).

**Step 2.** An add-on is required to use passbolt, click on the link to install the plugin for Firefox or Chrome.

**Step 3.** You will see a small red key icon in the upper right hand corner of your browser. Click on it.

**Step 4.** Select the demo instance. 

**Step 5.** Click the Register button and enter your name and email. Other users will be able to see your email (
this is to allow testing "sharing" functionality), so you can use a throw-away email account if you are not confortable with this.

**Step 6.** Passbolt sent you an email that contains a link allowing you to login.
{% include messages/warning.html
    content="The link is only valid for a short duration (72h by default, but this can be vary).
    If you registration email token expired you can request another one using the recovery feature at `https://[your_passbolt]/recover`"
%}

## Setup the account

**Step 1.** Check your email. When you click this link the setup will start.

**Step 2.** passbolt will ask you to check the URL passbolt is associated with 

{% include articles/figure.html
    url="/assets/img/help/2018/01/url-check.png"
    legend="Validation of the domain"
    width="450px"
%}

**Step 3.** If you recognize the domain name, check the checkbox and then click Next. 

**Step 4.** Passbolt will ask you to create a new key on the following screen:
{% include articles/figure.html
    url="/assets/img/help/2018/01/create-new-key.png"
    legend="creating a new key"
    width="450px"
%}

**Step 5.** Next, passbolt will help you create a new master password. Choose this password wisely, 
it will be the gatekeeper to all your other passwords. 
{% include articles/figure.html
    url="/assets/img/help/2018/01/set-passphrase.png"
    legend="setting a passphrase"
    width="450px"
%}

**Step 6.** Once you have chosen your master password and clicked Next, you will be given the opportunity to 
download your private key. It is highly recommended that you do so!

**Step 7.** The final step is to create a security token. 
Choosing a color and a three character token is a secondary security mechanism that helps you know you are 
logging into a *real* passbolt instance.

## Set up your profile

1. Once you have registered, log in to passbolt for the first time. You will see a welcome screen.
2. You can edit your profile by clicking the user icon in the upper right corner and choosing "my profile"
3. Click the edit button on the left side to edit your name or upload a profile picture.

![Set up profile gif]({{ "/assets/img/help/2018/01/passbolt-profile.gif" | absolute_url }})
