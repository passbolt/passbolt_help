---
title: How to import SSL certificate on mobile application
slug: how-to-import-ssl-certificate-on-mobile
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2022-01-05 00:00:00 Z
---

Your passbolt server must have HTTPS enabled to be able to use passbolt mobile app.

If you are using self-signed certificates, you must import your server certificate to your mobile device. 

The screenshots below assume you are importing a root CA certificate (in case your self-signed certificates are trusted by a local certification authority), but the procedure remains the same in case you import server certificate.

Not using iOS ? [Click here for importing certificates on Android](#import-certificate-on-android)

## Import certificate on iOS

Put certificate on your device and select it to install. You will be asked to review it in Setting app: 

{% include articles/figure.html
url="/assets/img/help/2022/01/ios/ios-01.jpg"
legend="Download profile"
width="450px"
%}

Go to Settings app and select "Profile Downloaded"

{% include articles/figure.html
url="/assets/img/help/2022/01/ios/ios-02.jpg"
legend="Select Profile Downloaded"
width="450px"
%}

Your certificate informations will be displayed, select **Install** to install it:

{% include articles/figure.html
url="/assets/img/help/2022/01/ios/ios-03.jpg"
legend="Install profile"
width="450px"
%}

Enter your iOS passcode:

{% include articles/figure.html
url="/assets/img/help/2022/01/ios/ios-04.jpg"
legend="Enter your iOS passcode"
width="450px"
%}

Be warned than certificate won't be usuable until you have enable it Certificate Trust Settings, select **Install**

{% include articles/figure.html
url="/assets/img/help/2022/01/ios/ios-05.jpg"
legend="Install profile warning"
width="450px"
%}

Select Install:

{% include articles/figure.html
url="/assets/img/help/2022/01/ios/ios-06.jpg"
legend="Install profile"
width="450px"
%}

Profile is installed, select **Done**:

{% include articles/figure.html
url="/assets/img/help/2022/01/ios/ios-07.jpg"
legend="Profile installed"
width="450px"
%}

To enable your certificate, go to Setting app > General > About and select **Certificate Trust Settings**:

{% include articles/figure.html
url="/assets/img/help/2022/01/ios/ios-08.jpg"
legend="Select Certificate trust Settings"
width="450px"
%}

Enable your new certificate and confirm by selecting **Continue**:

{% include articles/figure.html
url="/assets/img/help/2022/01/ios/ios-09.jpg"
legend="Select Certificate trust Settings"
width="450px"
%}

## Import certificate on Android

Go to Settings > Security > Encryption & credentials and select **Install a certificate**:

{% include articles/figure.html
url="/assets/img/help/2022/01/android/android-01.jpg"
legend="Install a certificate"
width="450px"
%}

Select **CA certificate**:

{% include articles/figure.html
url="/assets/img/help/2022/01/android/android-02.jpg"
legend="Select CA certificate"
width="450px"
%}

A warning is displayed, read it and only if you agree with it, select **Install Anyway**

{% include articles/figure.html
url="/assets/img/help/2022/01/android/android-03.jpg"
legend="Displayed warning"
width="450px"
%}

Select your certificate:

{% include articles/figure.html
url="/assets/img/help/2022/01/android/android-04.jpg"
legend="Select your certificate"
width="450px"
%}

Your certificate is installed:

{% include articles/figure.html
url="/assets/img/help/2022/01/android/android-05.jpg"
legend="Installed certificate"
width="450px"
%}