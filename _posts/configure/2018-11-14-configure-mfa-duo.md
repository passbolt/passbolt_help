---
title: How to configure passbolt to use Duo OTP
date: 2023-02-06 00:00:00 Z
description: How to configure passbolt to use Duo OTP
icon: fa-key
categories: [configure,mfa]
sidebar: configure
layout: default
slug: duo
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Passbolt Pro Edition since v2.5 and CE since 3.9 support Duo as a multi factor authentication option.
Duo is a proprietary solution that is free for up to 10 users, and supports a bundle
of authentication channels (such as HOTP, mobile push, phone calls, etc.) configurable
by the Duo account administrator.

{% include articles/figure.html
    url="/assets/img/help/2023/02/mfa-duo-website.png"
    legend="Duo website"
    width="550px"
%}

{% include messages/warning.html
    content="**Important:** Multi Factor Authentication requires HTTPS to work."
%}

## Security considerations

It is important to enable and setup at least one additional multi factor authentication 
provider in case Duo service becomes temporarily not available.

In order to authenticate using Duo, the user will be redirected to Duo's authentication
page. Whether or not the authentication was successful, the user will be redirected back
to passbolt. Make sure your users have access to internet or do
not enable this authentication provider if you are running passbolt on a private network
that is not connected to internet.

## Install Duo app

In order to use this authentication provider, each of your users will need to have either:
- [Duo Mobile for Android](https://play.google.com/store/apps/details?id=com.duosecurity.duomobile&hl=en) on google play store.
- [Duo Mobile for iOS](https://itunes.apple.com/us/app/duo-mobile/id422663827?mt=8) on apple itunes.
- TouchID fingerprint reader on MacOS laptops
- A security key
- A physical token
- A network administrator

{% include messages/notice.html
    content="Visit the [Duo authentication methods page](https://duo.com/product/multi-factor-authentication-mfa/authentication-methods) for more information."
%}

{% include articles/figure.html
    url="/assets/img/help/2023/02/mfa-duo-app-login.png"
    legend="Duo mobile application"
    width="250px"
%}

## Register a Duo administrator account

If you do not have a Duo admin account, first sign up at [https://signup.duo.com/](https://signup.duo.com/)
Then log in to the Duo Admin panel at [https://admin.duosecurity.com/login](https://admin.duosecurity.com/login)

Configure your Duo policies as required by your organization.

### Add a passbolt application 

In order for passbolt to enable onboarding and authentication of new users with Duo,
you will need to create a Web SDK application for passbolt in Duo.

Login to the [Duo Admin page](https://admin.duosecurity.com/login).
In the left-hand side menu, click on "Applications", then click on "Protect an Application".

{% include articles/figure.html
    url="/assets/img/help/2023/02/mfa-duo-application.png"
    legend="Duo protect application"
    width="550px"
%}

Find the "Web SDK" application and click on the "Protect" button.

{% include articles/figure.html
    url="/assets/img/help/2023/02/mfa-duo-admin.png"
    legend="Duo administration"
    width="550px"
%}

Note down the Client ID, Client secret, and API hostname details, as you will need them to configure the integration.

{% include messages/warning.html
    content="**Important:** Passbolt < 3.11 is using DUO v3 which means a generated salt is mandatory"
%}
## Generate a random salt

Generating a random salt to configure Duo is mandatory, it's a random piece of data that is generated and used in the hashing process to protect a sentivite information. It is generated and combined with the secret key before hashing it.

To generate a random salt, you can do it from the passbolt interface, generate a new password as shown below and use it a the generated salt. 

{% include articles/figure.html
    url="/assets/img/help/2023/05/password-generator.png"
    legend="Passbolt - Password Generator"
    width="250px"
%}


## Set the configuration in passbolt

You can configure Duo OTP using either the admin interface or environment variables. 
If multiple settings providers are used the settings in the admin interface will override the one in environment 
variables. Note that we recommend using the admin interface, since it is more secure.

### Using admin user interface

Since v2.6 a user interface is provided for administrators to setup MFA providers.
Click on "administration" in the top menu, then "multi factor authentication" on the left menu.
You can then enable or disable the Duo provider by providing the API Hostname, the Client ID and the Client Secret that you gathered in the previous steps. If you are running Passbolt < 3.11 you will also need the generated salt. Click "save settings" when you are done.

{% include articles/figure.html
    url="/assets/img/help/2023/02/AD_mfa_org_settings_duo.png"
    legend="MFA organization settings for Duo"
    width="550px"
%}

### Using environment variables

<table class="table-parameters">
<thead>
    <tr>
        <th>Variable name</th>
        <th>Description</th>
        <th>Type</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>PASSBOLT_PLUGINS_MFA_DUO_CLIENT_ID</td>
        <td>Client ID</td>
        <td>string</td>
    </tr>
    <tr>
        <td>PASSBOLT_PLUGINS_MFA_DUO_CLIENT_SECRET</td>
        <td>Client Secret</td>
        <td>string</td>
    </tr>
    <tr>
        <td>PASSBOLT_PLUGINS_MFA_DUO_API_HOSTNAME</td>
        <td>API Hostname</td>
        <td>string</td>
    </tr>
</tbody>
</table>
<br>

When you using docker to set these environment variable you can pass them as arguments,
like other variables such as the database name, for example:

```
$ docker run --name passbolt \
             -p 80:80 \
             -p 443:443 \
             -e PASSBOLT_PLUGINS_MFA_DUO_API_HOSTNAME=api-26e9f2fce.duosecurity.com \
             -e etc.
```

## Setting Duo for a given passbolt user account

Once you have the Duo integration configured and a Duo authentication device, you can proceed
with enabling Duo as MFA provider for your user account. It is important that you test this to
make sure the integration works.

When logged in on passbolt, go to your profile section and click on "Multi factor authentication"
in the sidebar on the left. You should see the list of providers that are enabled for this instance.
Click on the Duo provider.

{% include articles/figure.html
    url="/assets/img/help/2023/02/mfa-duo-user-setup.png"
    legend="Passbolt Duo setup"
    width="550px"
%}

Then, click on the "Sign-in with Duo" button to start the Duo authentication process. If this is
the first time you are using Duo with this user and this server, you will be asked to link one or
more device(s) to Duo to authenticate with.

{% include articles/figure.html
    url="/assets/img/help/2023/02/mfa-duo-setup-welcome.png"
    legend="Duo welcome screen"
    width="550px"
%}

{% include articles/figure.html
    url="/assets/img/help/2023/02/mfa-duo-setup-options.png"
    legend="Duo authentication options"
    width="550px"
%}

Follow the instructions provided by Duo and you should be all set.
The next time you try login from a new device, you will be presented with a Duo 
authentication prompt.

{% include articles/figure.html
    url="/assets/img/help/2023/02/mfa-duo-login.png"
    legend="Login prompt"
    width="550px"
%}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
