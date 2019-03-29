---
title: Why should I install haveged on virtual environments?
slug: why-haveged-virtual-env
layout: faq
category: hosting
tags: [troubleshoot]
permalink: /faq/hosting/:slug
date: 2019-03-29 00:00:00 Z
---
Passbolt uses Gnupg as the encryption engine. Encryption operations such as creating a private key require an enough amount of entropy on the system's entropy pool.
A good and fast source of entropy is important to generate high quality random numbers. Poor quality on the random numbers could lead to weak private keys that
could compromise the security of your setup.
Random number generation is a complex topic that has been discussed widely on the community [[1]](https://lwn.net/Articles/525459/)

Virtualisation strongly affects the quantity of produced entropy and. In other words, when you run a virtualised system such as a virtual machine or a container you likely
will find yourself in a situation where the entropy pool is low and it is filling slowly. There are few remediations for this situation:

- Use a hardware random number generation and use [rng-tools](https://github.com/nhorman/rng-tools)
- Use [Haveged](http://www.issihosts.com/haveged/)

As stated in [[1]](https://lwn.net/Articles/525459/) and [[2]](https://security.stackexchange.com/questions/34523/is-it-appropriate-to-use-haveged-as-a-source-of-entropy-on-virtual-machines), haveged could lead
to generation of poor entropy so, in order to stay safe, the recommendation would be to:

1. Use rng-tools if you trust your hardware random number generator
2. If rng-tools is not enough then use Haveged as well.
