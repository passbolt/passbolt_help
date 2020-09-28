---
title: How to configure passbolt to use Yubikey OTP
date: 2018-11-15 00:00:00 Z
description: How to configure passbolt to use Yubikey OTP
icon: fa-key
categories: [configure,mfa]
sidebar: configure
layout: default
slug: yubikey
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Passbolt Pro Edition since v2.5 supports Yubikey OTP as a multi factor authentication option.
Yubico OTP is a simple authentication mechanism that is supported by all YubiKeys out of the box. 

{% include articles/figure.html
    url="/assets/img/help/2018/11/mfa-yubikey-login.jpg"
    legend="Using a Yubikey at login"
    width="450px"
%}

{% include messages/warning.html
    content="**Important:** Multi Factor Authentication is part of [Passbolt Pro](https://www.passbolt.com/pricing/pro) only and is not available in the Community Edition."
%}

## Security considerations

It is important to enable and setup at least one additional multi factor authentication provider in 
case the user lose its Yubikey or the the Yubicloud service becomes temporarily not available.

During a login attempt the passbolt will check if the key ID used by the user is the same that was 
used during setup. To change key (if the key was lost for example) a user will need to first disable 
the Yubikey provider in their settings.

## Get a Yubikey cloud api key

In order to use Yubikey OTP you need get an API key for Yubicloud, Yubico’s web service for verifying OTPs. 
Please note that while it is possible to [host yourself the OTP validation server](https://developers.yubico.com/Software_Projects/Yubico_OTP/YubiCloud_Validation_Servers/), 
this approach is not supported by Passbolt at the moment.

{% include articles/figure.html
    url="/assets/img/help/2018/11/mfa-yubikey-admin.png"
    legend="Yubicloud registration"
    width="550px"
%}


Before using YubiCloud, you need to get an API key from [upgrade.yubico.com](https://upgrade.yubico.com/getapikey/) 
in order to prevent misuse of the service. You will need to authenticate yourself using a Yubikey One-Time Password 
and provide your e-mail address as a reference, as well as read and accept the terms of service.

## Make sure YubiCloud urls are whitelisted

In order to verify a Yubikey OTP passbolt will need to connect to YubiCloud.
If you prevent outgoing connection from Passbolt server to the following domains:
- api.yubico.com
- api2.yubico.com
- api3.yubico.com
- api4.yubico.com
- api5.yubico.com

One or more of these domains may be used to try to validate an OTP.

## Set the configuration in passbolt

You can configure Yubikey OTP using either the admin interface, config files or environment variables. If multiple settings providers are used the settings in the admin interface will override the one used in files. Similarly the settings in files will override environment variables.

### Using admin user interface

Since v2.6 a user interface is provided for administrators to setup MFA providers.
Click on "administration" in the top menu, then "multi factor authentication" on the left menu.
You can then enable or disable the Yubikey provider by providing the user id and secret key that
you gathered in the previous steps. Click "save settings" when you are done.

{% include articles/figure.html
    url="/assets/img/help/2018/12/AD_mfa_org_settings_yubikey.png"
    legend="MFA organization settings for Yubikey"
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
        <td>PASSBOLT_PLUGINS_MFA_YUBIKEY_SECRETKEY</td>
        <td>Yubicloud secret key</td>
        <td>string</td>
    </tr>
    <tr>
        <td>PASSBOLT_PLUGINS_MFA_YUBIKEY_CLIENTID</td>
        <td>Yubicloud client id</td>
        <td>integer</td>
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
             -e PASSBOLT_PLUGINS_MFA_YUBIKEY_CLIENTID=12345 \
             -e PASSBOLT_PLUGINS_MFA_YUBIKEY_SECRETKEY="xx/xxxxxx/xxxxxxxxxxxx=" \
```

### Using config file

In your install directory you can add the following section in `config/passbolt.php`

```
'plugins' => [
    'multiFactorAuthentication' => [
        'providers' => [
            'totp' => true,
            'duo' => false,
            'yubikey' => true
        ],
        'yubikey' => [
            'clientId' => '01234',
            'secretKey' => 'xx/xxxxxx/xxxxxxxxxxxx='
        ]
    ]
]
```

## Setting Yubikey for a given passbolt user account

Once you have a the Yubikey integration configured and Yubikey plugged in your computer you
can proceed with enabling Yubikey as provider for your user account. It is important you test
this to make sure the integration works.

{% include articles/figure.html
    url="/assets/img/help/2018/11/mfa-providers.png"
    legend="MFA provider selection for passbolt user"
    width="550px"
%}

When logged in passbolt go to your profile section and click on "Multi factor authentication"
in the left sidebar. You should see the list of providers that are enabled for this instance.
Click on the Yubikey provider. Passbolt will then prompt your to touch your Yubikey
to enter a one time password.

The next time you try login from a new device, you will be presented with a Yubikey 
authentication prompt.

{% include articles/figure.html
    url="/assets/img/help/2018/11/mfa-yubikey-login2.png"
    legend="Login prompt"
    width="550px"
%}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
