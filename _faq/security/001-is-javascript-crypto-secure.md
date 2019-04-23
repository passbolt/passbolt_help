---
title: Is javascript cryptographically secure?
slug: javascript-security
layout: faq
category: security
permalink: /faq/security/:slug
date: 2017-01-20 00:00:00 Z
---

JavaScript cryptography is hard but not impossible.
If you are new to this topic you can have a look at the articles from 
[Thomas Ptacek](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/august/javascript-cryptography-considered-harmful/) 
or 
[Nate Lawson](http://rdist.root.org/2010/11/29/final-post-on-javascript-crypto/).

The main issue has to do with being able to securely distribute and maintain the integrity of the 
code in charge of the cryptographic operations, as well as setting up a cryptographically secure random 
number generator. Currently, the recommendation to solve these problems is to use a browser extension. 
Passbolt follows this recommendation.

The other issue has to do with the quality of the javascript implementation of the cryptographic 
functionalities and the fact that JavaScript has its fair share of pitfalls. This is true for any 
programming languages and can only be addressed through careful code review. Passbolt uses 
[OpenPGP.js](https://github.com/openpgpjs/openpgpjs) for 
its cryptographic functionalities which have been reviewed multiple times by 
[Cure53](https://github.com/openpgpjs/openpgpjs/wiki/Cure53-security-audit).

Organizing more regular independent 3rd party audits is one of our main priorities. We need your 
[support]({{ "/faq/contribute" | absolute_url }}) to be able to organize them.
