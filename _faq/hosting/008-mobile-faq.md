---
title: iOS / Android Mobile FAQ
slug: mobile-faq
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2022-02-02 00:00:00 Z
---

## Can I use the mobile application without HTTPS configured on my passbolt server ?

A valid HTTPS configuration is mandatory for security concerns to be able to use the passbolt with iOS / Android. Mobile app won't work with plain HTTP.

You can get a green padlock aside the url in your browser without a valid configuration for mobile app. A common misconfiguration error is to forget the intermediate certificate. You can check our [SSL troubleshooting page](/faq/hosting/troubleshoot-ssl){:target="_blank"} for more details.


## Can I use a self-signed certificate with the mobile application ?

The answer is yes. The mandatory part is to generate a certificate with a valid subjectAltName.

### How to generate a proper Self-signed certificate ?

```
openssl req -x509 \
    -newkey rsa:4096 \
    -days 120 \
    -subj "/C=LU/ST=Luxembourg/L=Esch-Sur-Alzette/O=Passbolt SA/OU=Passbolt IT Team/CN=passbolt.domain.tld/" \
    -nodes \
    -addext "subjectAltName = DNS:passbolt.domain.tld" \
    -keyout key.pem \
    -out cert.pem
```

This command will output two files: **key.pem** and **cert.pem**.

Of course, replace `-subj` values with your own. It is important to set your passbolt FQDN in both CN and subjectAltName.

{% include messages/notice.html
    content="<b>Pro tip:</b> You can use an IP address instead of a domain name for your self-signed certificate.
    If you do that, replace DNS with IP in subjectAltName."
%}

### How to import my self-signed certificate ?

Once [your self-signed certificate configured](/configure/https/){:target="_blank"}, [import it in your mobile](/faq/hosting/how-to-import-ssl-certificate-on-mobile){:target="_blank"}.

## How to get logs ?

Logs are available:

  * inside top-right (?) button on Login screen and while scanning QRCodes
  * once logged in inside the settings menu.

You can share them by clicking on the share icon on top-right of your screen.

On Android, logs collection must be manually enabled:

{% include articles/figure.html 
    url="/assets/img/help/2022/02/android-enable-logs.jpg"
    legend="Enable Android logs" 
    width="350px"
%}

## I can't login using Apache

Apache [seems to discard](https://github.com/tymondesigns/jwt-auth/wiki/Authentication) the Authorization header if it is not a base64 encoded user/pass combo. So to fix this you can add the following to your Apache config:

```
RewriteEngine On
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]
```

## I can't login with this error: "gopenpgp: the key contains too many entities"

It means the OpenPGP key of your passbolt server contains more than one entity. It should not occur but we seen this issue on some old docker setup.

To fix this issue, you can [rotate your passbolt server keys following this other FAQ page](/faq/hosting/how-to-rotate-server-gpg-keys){:target="_blank"}.

## How can I check if JWT certificate matches with the JWT key

First check if the JWT key format is correct:

```
$ openssl rsa -in /etc/passbolt/jwt/jwt.key -check -noout
RSA key ok
```

You can now check if the certificate matches with the key with the command below:

```
$ if openssl rsa -in /etc/passbolt/jwt/jwt.key -outform PEM -pubout 2>/dev/null | diff /etc/passbolt/jwt/jwt.pem - > /dev/null; then echo "OK: JWT key matches with JWT pem"; else echo "NOT OK: JWT key and pem doesn't match"; fi
```