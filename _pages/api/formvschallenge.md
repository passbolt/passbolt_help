---
title: Form-based vs. Challenge-Based Authentication
date: 2021-01-08 14:00:00 Z
layout: api
category: api,form-vs-challenge
slug: form-vs-challenge
permalink: /api/form-vs-challenge
---

## Introduction
Instead of a conventional form-based login system, passbolt uses the GpgAuth protocol
for authenticating its clients. It is a challenge-based authentication similar to what you would find in a protocol such as SSH. Our goals were both to improve the security and usability of the overall solution.

### Form-based authentication

While some web apps today defer to another service such as Google or Facebook to handle the authentication, most still support a form-based authentication by default.

The process goes as follows:

{% include articles/figure.html
    url="/assets/img/diagrams/sequence_diagram_form_authenticate.png"
    legend="Sequence diagram of a form-based authentication"
    width='640px'
%}

During the registration step of a typical web app, the password is sent (ideally over HTTPS) to the server. This password is then salted and hashed using [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) (or equivalent) and stored for future use by the server. A [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)) known only by this application instance is used to prevent brute force cracking of the password in case its hash gets leaked (via a [SQL injection](https://en.wikipedia.org/wiki/SQL_injection), for example).

During a subsequent login by the user, the password is sent and in a process similar to the original registration, the server hashes it and compares it with the stored version. If the hashes match then the server stores a session token that is sent back as a cookie (or url parameter) which is also set on the client side. This cookie is then produced by the client for each request for the duration of the session (until the cookie expires, the user logs out, or the server terminates the session).

### The problem with form-based authentication

The main issue is one of usability. Using this approach for passbolt would mean that a user would need to remember yet another password on top of their private key passphrase. This goes against the basic benefit of having a password manager.

If a login password was required, we would also have to store the password in the authentication plugin. But this would complicate our requirements as it would then mandate the development of additional procedures for a passbolt user's account password to be created, updated and recovered.

Another inherent dilemma to this approach is the potential inability for the user to reset their password using an email verification, in case the password to their email client is stored in passbolt.

There are also other issues not specific to passbolt's requirements but still worth trying to fix with an approach other than form-based:

* Phishing: it is possible for an attacker to mimic the passbolt login page and trick a user into entering their credentials. Traditional form-based authentication does not perform server identity verification: it is the responsibility of the user to verify if the URL is correct and SSL certificates are valid.
* Password quality: password fatigue generally leads to password reuse, poor rotation and weak strength. Although stricter validation can be implemented on the server side to improve password quality, this quality is achieved only by placing an additional burden on the user.
