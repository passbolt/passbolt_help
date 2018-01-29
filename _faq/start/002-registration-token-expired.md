---
title: What can I do if my registration token expired?
slug: registration-token-expired
layout: faq
category: start
permalink: /faq/start/:slug
date: 2017-01-20 00:00:00 Z
---

By default when you (or an administrator) create an account you will receive an email to verify your address.
This email contains a link that is only valid for a short duration.
By default it is valid for 72h, but this value can be changed by your passbolt server administrator.

Since passbolt v2.0.0, if your registration email token expired and you still want to register, you can request 
another one using the account recovery feature at `/recover` (e.g. https://[your_passbolt]/recover).
 
