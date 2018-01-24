---
title: TODO How does it work?
slug: how-does-it-work
layout: faq
category: start
permalink: /faq/start/:slug
date: 2017-01-20 00:00:00 Z
---
![diagram showing how it works]({{ site.baseurl }}/assets/img/diagrams/howitworks.svg)

* Ada has a password to share with betty
* Ada encrypts the password using passbolt plugin,
* and Betty public key!
* The the password is sent encrypted over HTTPS
* and stored on the passbolt server!
* Betty receives and email notification
* Betty logs in to passbolt with the CLI or web app
* Then using her private key,
* Betty decrypts the password and uses it to login!
