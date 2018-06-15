---
title: How does it work?
slug: how-does-it-work
layout: faq
category: discover
permalink: /faq/discover/:slug
date: 2017-01-20 00:00:00 Z
---

{% include articles/figure.html
    url="/assets/img/diagrams/howitworks.svg"
    legend="password exchange using passbolt"
%}

In a nutshell:
* Ada has a password to share with betty
* Ada encrypts the password using passbolt plugin and Betty public key
* The password is sent encrypted over HTTPS to the server
* The password is stored on the passbolt server
* Betty receives and email notification
* Betty logs in to passbolt
* Betty using her private key decrypts the password and uses it to login!
