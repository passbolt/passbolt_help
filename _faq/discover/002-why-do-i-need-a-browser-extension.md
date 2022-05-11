---
title: Why do I need a browser extension?
slug: why-an-extension
layout: faq
category: discover
permalink: /faq/discover/:slug
date: 2017-01-20 00:00:00 Z
---
A browser extension is needed to provide functionalities such as auto 
filling your passwords when visiting known websites, but more importantly to maintain a higher level of security and provide a secure random number generator.

## More info

A regular website serves users content in the form of html, javascript, css assets. It may be cached on a content delivery network (CDN) for speed, but everything is coming from one place. In the event of an attacker accessing the server, they may be able to change these assets, such as showing you modified content, or change the application logic.

The solution we opted-for to ensure code integrity was to split the application in two parts:

1. Server side: the API who serves encrypted data
2. Client side: the web extension who renders the assets and contains the logic to encrypt/decrypt data.

The web extension is published on browsers extension marketplaces (Firefox, Chrome, Edge). Each of them requires the extension to be cryptographically signed by Passbolt developers with a secret key, to make sure nobody can change that code while it is being transmitted from the marketplace.

{% include articles/figure.html
    url="/assets/img/help/2022/05/passbolt-app-and-data-delivery.jpeg"
    legend="passbolt application and data delivery"
    width="540px"
%}

## Some points you must be aware of:

* The passbolt login page is rendered by the browser extension. By entering your passphrase, you unlock your PGP private key stored in the local storage of your browser to let the extension communicate with the passbolt API and perform the user [authentication with GnuPG protocol](/api/authentication).
* Most of passbolt application (passwords, users, or profile namespaces) isn't rendered by the server but by the browser extension.
* End-to-end encryption is provided by the browser extension.

{% include articles/figure.html
    url="/assets/img/help/2022/05/e2e-security.jpeg"
    legend="End to end security using OpenPGP"
    width="540px"
%}

## References:

* [Why does passbolt require an extension? (Blog post 2020)](https://blog.passbolt.com/why-does-passbolt-require-an-extension-d1b189133b2)
* [API Authentication sequence diagram](https://help.passbolt.com/api/authentication)
* [Security white paper](https://help.passbolt.com/assets/files/Security%20White%20Paper%20-%20Passbolt%20Pro%20Edition.pdf)