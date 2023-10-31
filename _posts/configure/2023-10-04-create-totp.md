---
title: How to create a TOTP
date: 2023-10-04 00:00:00 Z
card_title: How to create a TOTP with Mobile
card_teaser: How to configure passbolt mobile application to create a TOTP
description: 
icon: fa-key
categories: [configure, totp]
sidebar: configure
layout: default
slug: time-based-one-time-password-mobile
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Since version 4.3.0, Passbolt supports creation of TOTP (Time-based One Time Password).

TOTP is a mechanism that generates a unique and temporary password based on the current time. This dynamic code can be used on its own or in combination with a static password, offering an additional layer of security compared to traditional password-only systems.

- [iOS](#ios)
- [Android](#android)

### iOS
On the iOS application, there is a new section called "TOTP"
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_menu.png"
legend="iOS - Empty TOTP"
width="400px"
%}

In order to create a new TOTP, you'd need to click on "Create"
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_creation.png"
legend="iOS - TOTP Creation"
width="400px"
%}
That will open a menu that will let you choose between scanning a QR code or create a TOTP manually, for this tutorial we assume that you'd need to create it manually.

For the TOTP manual creation, you will have to fill three fields:
1. Name, which is the label of the resource
2. URL, which is the fullBaseUrl of the resource
3. Secret, the secret from the TOTP provider
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_manual_configuration.png"
legend="iOS - TOTP Configuration"
width="400px"
%}

You do have the possibility to link this TOTP to an existing password but that's optional. You can also create a standalone TOTP instead.
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_linked_to_password.png"
legend="iOS - Link TOTP to an existing password"
width="400px"
%}

There is also an advanced settings part in order to adjust the **expiry, length and algorithm**
{% include messages/warning.html
content="**WARNING:** Advanced settings have to match the TOTP provider settings otherwise it won't work."
%}
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_advanced_settings.png"
legend="iOS - TOTP Advanced Settings"
width="400px"
%}

Once created, you will see a success message "TOTP has been created." then you will be able to preview the TOTP code when you need it.
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_code_preview.png"
legend="iOS - TOTP Preview"
width="400px"
%}

### Android
On the Android application, there will be a new section called "TOTP"
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_android_empty_totp.jpg"
legend="Android - Empty TOTP"
width="400px"
%}

In order to create a new TOTP, you'd need to click on "+" icon
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_android_creation.jpg"
legend="Android - TOTP Creation"
width="400px"
%}
That will open a menu that will let you choose between scanning a QR code or create a TOTP manually, for this tutorial we assume that you'd need to create it manually.

For the TOTP manual creation, you will have to fill three fields:
1. Name, which is the label of the resource
2. URL, which is the fullBaseUrl of the resource
3. Secret, the secret from the TOTP provider
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_android_configuration.jpg"
legend="Android - TOTP Configuration"
width="400px"
%}

You do have the possibility to link this TOTP to an existing password but that's optional. You can also create a standalone TOTP instead.
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_android_link_to_password.jpg"
legend="Android - Link TOTP to an existing password"
width="400px"
%}

There is also an advanced settings part in order to adjust the **expiry, length and algorithm**
{% include messages/warning.html
content="**WARNING:** Advanced settings have to match the TOTP provider settings otherwise it won't work."
%}
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_android_advanced_settings.jpg"
legend="Android - TOTP Advanced Settings"
width="400px"
%}

Once created, you will see a success message then you will be able to preview the TOTP code when you need it.
{% include articles/figure.html
url="/assets/img/help/2023/10/totp_android_code_preview.jpg"
legend="Android - TOTP Preview"
width="400px"
%}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/community.html %}

{% include layout/row_end.html %}
