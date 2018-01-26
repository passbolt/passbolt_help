---
title: How are public keys trusted?
slug: public-key-trust
layout: faq
category: security
permalink: /faq/security/:slug
date: 2017-01-20 00:00:00 Z
---
Currently the client trust all the keys that are sent from the passbolt server. 
The server also trust the key sent by the client during setup. While we believe this setup 
can be sufficient for most organisations, since the keys are sent over https,
we also acknowledge that it is far from ideal.

Our solution on the long term would be to implement key signatures, synchronization with public 
key repositories and the possibility for users to manually accept or reject keys.
