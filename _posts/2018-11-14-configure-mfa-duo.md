---
title: How to configure passbolt to use Duo OTP
date: 2018-11-15 00:00:00 Z
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

Passbolt Pro Edition since v2.5 supports Duo as a multi factor authentication option.
Duo is a proprietary solution that is free for up to 10 users, and supports a bundle
of authentication channels (such as HOTP, mobile push, phone calls, etc.) configurable
by the Duo account administrator.

{% include articles/figure.html
    url="/assets/img/help/2018/11/mfa-duo-website.png"
    legend="Duo website"
    width="550px"
%}

{% include messages/warning.html
    content="**Important:** Multi Factor Authentication is part of [Passbolt Pro](https://www.passbolt.com/pricing/pro) only and is not available in the Community Edition."
%}

## Security considerations

It is important to enable and setup at least one additional multi factor authentication 
provider in case Duo service becomes temporarily not available.

In order to use Duo authentication the user will need to interact with an iframe
with content served by passbolt. Make sure your users have access to internet or do
not enable this authentication provider if you are running passbolt on a private network
that is not connected to internet.

## Install Duo app

In order to use this authentication provider each of your users will need to install
the Duo mobile app on their phone or tablet.

- [Duo Mobile for Android](https://play.google.com/store/apps/details?id=com.duosecurity.duomobile&hl=en) on google play store.
- [Duo Mobile for iOS](https://itunes.apple.com/us/app/duo-mobile/id422663827?mt=8) on apple itunes.

{% include articles/figure.html
    url="/assets/img/help/2018/11/mfa-duo-login.png"
    legend="Duo mobile application"
    width="250px"
%}

## Get a Duo account

If you do not have a Duo account, first sign up at [https://signup.duo.com/](https://signup.duo.com/)
Then log in to the Duo Admin panel at [https://admin.duosecurity.com/login](https://admin.duosecurity.com/login)

Configure your Duo policies as required by your organization.

### Add a passbolt application 

In order for passbolt to enable onboarding and authentication of new users with Duo,
you will need to create a passbolt application in Duo.

{% include articles/figure.html
    url="/assets/img/help/2018/11/mfa-duo-admin.png"
    legend="Duo administration"
    width="550px"
%}

When login in Duo Admin panel in the left menu, click on "Applications", then click on 
"Protect an Application". Find the "Web SDK" application and click on "Protect this Application".

Note down the Integration Key, Secret Key, and API Hostname details, as you will need
them to configure the integration.

## Set the configuration in passbolt

You can configure Duo OTP using either the admin interface, config files or environment variables. If multiple settings providers are used the settings in the admin interface will override the one used in files. Similarly the settings in files will override environment variables.

You will need to generate a random 40 character string to be used as salt, to help
secure your integration.

### Using admin user interface

Since v2.6 a user interface is provided for administrators to setup MFA providers.
Click on "administration" in the top menu, then "multi factor authentication" on the left menu.
You can then enable or disable the Duo provider by providing the user id and secret key that
you gathered in the previous steps. Click "save settings" when you are done.

{% include articles/figure.html
    url="/assets/img/help/2018/12/AD_mfa_org_settings_duo.png"
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
        <td>PASSBOLT_PLUGINS_MFA_DUO_SALT</td>
        <td>Random salt</td>
        <td>string (40 chars min.)</td>
    </tr>
    <tr>
        <td>PASSBOLT_PLUGINS_MFA_DUO_INTEGRATIONKEY</td>
        <td>Integration key</td>
        <td>string</td>
    </tr>
    <tr>
        <td>PASSBOLT_PLUGINS_MFA_DUO_SECRETKEY</td>
        <td>Secret key</td>
        <td>string</td>
    </tr>
    <tr>
        <td>PASSBOLT_PLUGINS_MFA_DUO_HOST</td>
        <td>Host</td>
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
             -e PASSBOLT_PLUGINS_MFA_DUO_HOST=api-26e9f2fce.duosecurity.com \
             -e etc.
```

### Using config file

In your install directory you can add the following section in `config/passbolt.php`
and replace the 

```
 'plugins' => [
        'multiFactorAuthentication' => [
            'providers' => [
                'totp' => true,
                'duo' => true,
                'yubikey' => false
            ],
            'duo' => [
                'salt' => 'THIS_MUST_BE_AT_LEAST_FOURTY_CHARACTERS',
                'integrationKey' => 'CCCCPRC95FF3FW21FR5SJ',
                'secretKey' => '7tkYNgxxXaGAuv3KWYYqhsJLfIc1NBnHDYC1siNYX',
                'hostName' => 'api-21e9fcfce.duosecurity.com'
            ]
        ]
    ]
]
```

## Setting Duo for a given passbolt user account

Once you have a the Duo integration configured and Duo app installed on your mobile you
can proceed with enabling Duo as provider for your user account. It is important you test
this to make sure the integration works.

{% include articles/figure.html
    url="/assets/img/help/2018/11/mfa-duo-setup.png"
    legend="Passbolt duo setup"
    width="550px"
%}

When logged in passbolt go to your profile section and click on "Multi factor authentication"
in the left sidebar. You should see the list of providers that are enabled for this instance.

Click on the Duo provider. Passbolt will then display an iframe that will help you setup
your device if this is the first time you are using Duo with this instance. Follow the
instructions provided by Duo and you should be all set.

The next time you try login from a new device, you will be presented with a Duo 
authentication prompt.

{% include articles/figure.html
    url="/assets/img/help/2018/11/mfa-duo-login2.png"
    legend="Login prompt"
    width="550px"
%}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
