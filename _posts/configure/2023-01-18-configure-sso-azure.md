---
title: How to configure SSO with Microsoft (Alpha)
date: 2023-01-18 00:00:00 Z
card_title: How to configure SSO with Microsoft
icon: fa-address-book-o
categories: [configure, sso]
sidebar: configure
layout: default
slug: azure
permalink: /:categories/:slug.html
redirect_from:
- /configure/sso
---

{% assign product = 'pro' %}
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
content="**Attention**: This feature is currently in Alpha, and available only in Passbolt Pro Edition."
%}

Since version 3.9, Passbolt Pro Edition supports SSO with Microsoft via Azure AD. 

{% include articles/figure.html
url="/assets/img/help/2023/01/sso-passbolt-login.png"
legend="SSO with Azure (Alpha)"
%}

## Why is it in Alpha? What does it mean?

{% include messages/notice.html
content="TL;DR: The feature is in alpha and for Pro Edition customers only because it is undergoing real life testing and
a security audit."
%}

The feature is currently disabled by default and requires Passbolt browser extension version
3.9.1 (Note: this extension will be published on 19th of January 2023). To test the latest changes you can also build the 
latest extension [from source](https://github.com/passbolt/browser_extension).

The feature is provided to customers who want to test this first version and provide feedback. Feel free to report
issues at [support@passbolt.com](mailto:support@passbolt.com) or on the [community forum](https://community.passbolt.com).

The goal is to publish a "Beta" version with 3.10 or 3.11, which will be available without being hidden behind a 
feature flag. It will be visible directly in the UI. Then at end of February the feature will undergo an independent 
3rd party security audit by Cure53, and once the security and community reported issue fixes are rolled out (if any), 
the "Beta" label will be removed. It will then be made available in Passbolt Cloud.

## How does it work?

In short Passbolt SSO leverages Azure OAuth2/OpenID on top of the existing [challenge-based authentication](/api/authentication).
The user by logging in Microsoft unlocks a key stored server side needed to decrypt the secret key passphrase twice encrypted
with a non-extractable symetric key stored in the browser extension local storage client side. 

To understand which user flows are supported currently, the risk analysis, and how it works in practice please read the 
[developer documentation](https://docs.google.com/document/d/1S58TonJ2uXwkaKl7WwLzTzmwJGiSJdhlqP-xbmxFBd0/edit#heading=h.5z0ujk6vpr1j).

## How to enable SSO Azure plugin?

{% include messages/warning.html
content="**Attention**: This feature requires HTTPS to work."
%}

If you use Docker you can enable the SSO plugin setting the `PASSBOLT_PLUGINS_SSO_ENABLED` environment variable to `1`. Otherwise you will need
to edit your `passbolt.php` file and add the following:
```
// Locate this section
'passbolt' => [
    // and add...
    'plugins' => [
        'sso' => [
            'enabled' => true
        ],
    ],
```

## How to configure the plugin?

Open both the Azure portal and Passbolt:
- Once the plugin is enabled you will need to go the administration section of your Passbolt instance and then to the "Single Sign On" section. 
- You will need to also login to the [Azure Portal](https://portal.azure.com).

{% include articles/figure.html
url="/assets/img/help/2023/01/sso-passbolt-admin.png"
legend="Passbolt administration"
%}

You must ensure users are present both in passbolt and Azure AD, the email is used to correlate accounts.
- Users that are not present in Azure AD but are present in passbolt will not be able to use SSO (a message on microsoft side will be shown).
- Users that are not present in passbolt but are present in Azure AD will not be able to login in passbolt (a message on passbolt side will be shown).

{% include articles/figure.html
url="/assets/img/help/2023/01/sso-0-azure-home.png"
legend="Azure Portal"
%}

### Configure Azure AD
In your Azure AD portal:
- Go to Azure Directory service (or set one up)
  - Make sure your user email in Azure Directory matches the one in [assbolt
- Copy your Tenant ID (a UUID) and paste it in passbolt
- Go to App Registrations > New registration OR "+ Add" > "App Registration"

{% include articles/figure.html
url="/assets/img/help/2023/01/sso-1-azure-directory.png"
legend="Azure AD"
%}

Register a new application
- Give it a Name such as "Passbolt SSO"
- Select the supported account type you desire. "Accounts in this organizational directory only" is a good default.
- Copy the redirect url from Passbolt to Azure, it should be something like `https://yourdomain.com/sso/azure/redirect`.
- In "Select a platform", select "Web"
- Click register, you should be back on the Azure application page
- Copy the application (client) ID back to your passbolt instance

{% include articles/figure.html
url="/assets/img/help/2023/01/sso-2-create-app.png"
legend="App registration"
%}

Add a secret for the application
- On the Azure application page, click on "Certificate and secrets"
- Click on "New client secret"
- Choose a name like "Passbolt SSO Secret"
- Select an expiry date
- Copy the secret value and expiry back to your passbolt instance

{% include articles/figure.html
url="/assets/img/help/2023/01/sso-4-create-secret.png"
legend="App secret creation"
%}

In your passbolt instance:
- Click save settings
- A dialog will open with Microsoft button, click on it
- A popup will open asking you to perform the authentication with Microsoft
- Once the authentication is successful you can save the settings
- Once the settings have been saved, you can log out, you should then see an SSO option

{% include articles/figure.html
url="/assets/img/help/2023/01/sso-passbolt-test.png"
legend="Passbolt SSO test settings"
%}

Please note that users must successfully perform a login using their current passphrase *after SSO has been activated*
in order for the SSO option to be proposed to them at future logins. 

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
