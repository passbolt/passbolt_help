---
title: Does passbolt support revocation certificates?
slug: revocation-certificate
layout: faq
category: security
permalink: /faq/security/:slug
date: 2017-01-20 00:00:00 Z
---

A revocation certificate is a small encrypted message, that you generate at the same time you create your key. 
This can be uploaded when you need to tell your collaborators that your key has been compromised. This is 
required to render your previous key unusable and mitigate potential identity thefts.

Passbolt do not provide the ability to create or upload revocation certificate at the moment but we hope to be 
able to support it in a near future. We need your support to be able to implement such functionalities. At the 
moment other software compatible with passbolt can help you with this. See the GnuPG manual for more information.
