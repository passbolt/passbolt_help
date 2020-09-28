---
title: Authentication in passbolt
date: 2017-01-20 00:00:00 Z
description: How does authentication work in passbolt?
category: tech
sidebar: hosting
layout: default
slug: auth
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Passbolt instead of a classic form based authentication perform a challenge based authentication based on OpenPGP 
keys set during the setup.

The aim of this document is to help explain how this authentication process works to facilitate review and 
discussions as well as future integration with other products.

Our goals were both to improve the security and usability of the overall solution, e.g. reuse the existing
 OpenPGP facilities of passbolt to avoid having the user remember another password than their passphrase.

## Form based authentication

While some web application today defer to another service such as Google or Facebook to handle the authentication, 
most still support a form based authentication by default.

The process goes as follow:

{% include articles/figure.html
    url="/assets/img/diagrams/sequence_diagram_form_authenticate.png"
    legend="Sequence diagram of a form based authentication"
%}

During the registration, the password is sent (ideally over HTTPS) to the server. This password is then salted 
and hashed using bcrypt (or equivalent) and stored for further use by the server. A salt known only by this 
application instance is used to prevent brute force in case the password’s hashes get leaked (via a sql injection 
for example).

During login is sent in a similar fashion than the setup, the server hash it and compare it with the stored 
version. If they match the server store a session token that is send back as a cookie (or url parameter) and 
set on the client side. This cookie is produced by the client for each requests for the duration of the session 
(until the cookie expires, the user logout or the server terminate the session).

### The problem with the form based approach

The main issue is one of usability. Using this approach for passbolt would mean that a user would need to 
remember another password on top of their private key password. This negates the benefits of having a password manager.

We would also store the password in the authentication plugin. But this would complicate our requirements as it 
would introduce the need for passbolt user account password creation, update and recovery.

Another big issue is the inability for the user to reset their password using an email verification, in case the 
password to the email client is stored in passbolt.

Other issues are not specific to passbolt but still worth trying to fix with with another approach:

* **Phishing**: it is possible for an attacker to mimic the passbolt login page and trick a user into entering 
their credentials. Traditional form based authentication do not perform server identity verification: it is the 
responsibility of the user to verify if the URL is correct and SSL certificates are valid.
* **Password quality**: password fatigue generally leads to password reuse, poor rotation and weak strength. 
Validation can be implemented server side to improve password quality but only by placing an additional burden 
on the user.

# GPGAuth based authentication

This process will follow the gpgAuth protocol. This authentication mechanism uses Public/Private keys to authenticate users to a web application. The process works by the two-way exchange of encrypted and signed tokens between the user and the service.

The authentication process is as follow:

{% include articles/figure.html
    url="/assets/img/diagrams/sequence_diagram_gpg_authenticate.png"
    legend="Sequence diagram of a GPGAuth based authentication"
%}

### Verify steps

1. The client generates an encrypted token of random data (encrypted with the server public key), and stores 
the unencrypted version locally.
2. That encrypted token is sent to the server along with the user key fingerprint.
3. Based on the user key fingerprint the server check if the user exist and is active. If it is the case the 
server decrypts the nonce and check if it is in the valid format.
4. The server sends back the decrypted nonce.
5. The client check if the nonce match the previously recorded one. If it does not match the client warns the 
user that the server identity cannot be verified.

{% capture warning_content %}This server identity verification should not be understood as an end to end server authentication, 
 e.g. it does not protect against an attacker performing a man in the middle attack. View the discussion 
 around this topic on the 
 [community forum](https://community.passbolt.com/t/is-the-gpgauth-server-key-verification-a-placebo/212/2). 
{% endcapture %}
{% include messages/warning.html content=warning_content %}

### Login steps

1. The user sends their key fingerprint.
2. The server checks to see if the fingerprint and user associated with are valid. It then generates an 
encrypted token of random data, and stores the unencrypted version locally.
3. The server sends the unencrypted signed user token, and the encrypted server token to the user.
4. The user enter their private key passphrase, the client decrypt the nonce and check the token format.
5. The client send back the decrypted nonce along with the user key fingerprint.
6. The server compares the un-encrypted signed token sent from the client to make sure it matches. If the 
server is satisfied, the authentication is completed as with a normal form based login: session is started.

### Notes and remarks

* As per protocol definition the server key verification steps are optional but recommended all our client 
enforce it by default.
* We decided to stick to the historical version of the protocol for now, but in the future we may try to reduce 
the number of HTTP request: e.g. currently one can not request nonce1 in the verify step. So with the verify 
step a total of 3 POST are needed. The whole protocol could probably be simplified to single GET/POST roundtrip, 
like for form based auth.
* There is also an optional "step 0" where the user perform a GET /auth/verify request. 
This can be used to get the URLs of the server public key and server verification, or to view the public key 
advertised by the server.

### Benefits

On top of the usability benefit of not having to remember an additional password we note the following additional benefits are made available:

* **Phishing:** this risk is mitigated because the client does not enter a password, e.g. getting the secret key 
passphrase alone would not allow an attacker to login. Since the client can verify the server identity based on 
server key (manually added to the keyring), it is not enough for an attacker to fake a form and domain.
* **Password quality**: the strength of the authentication token is stronger than a classic password, since a 
different “password” is also used every time and is not linked the private key master password complexity.

### Residual risks and drawbacks

There are still risks with the chosen solution:

* **Server: integrity and verification of client public key validity.** A server could be tricked into storing the 
wrong client public key. To prevent this the server must check the validity automatically via OpenPGP web of trust 
and/or by checking against public key servers and/or there must be a manual check by an administrator. This check 
is not in place at the moment.
* **Server: DDOS**. Since encrypt / sign operations are more costly than the password hashing operations in a 
“normal” form based login, these endpoints could potentially be used to create a denial of service. To mitigate 
that risks we throttle attempts, e.g. limit the number of attempt over time. This check is not in place at the moment.
* **Server: information leak about user base**. An attacker can find out if a user have an account on the server 
by requesting an encrypted nonce and receiving an error. We also leak information in the header to improve usability 
and provide better error messages: for example to tell a user that their account was delete for example.
* **Client: integrity and verification of server public key.** The client could be tricked into storing invalid 
server key. To prevent this the client must check the validity (as in previous case) during the setup. Similarly 
during the setup the client must also check domain / key mapping in case someone is creating a real key with a 
fake but very similar domain url. This is implemented at the moment, but could certainly be improved as the end 
user can still make a mistake and not check properly.
* **Client/Server: the client/server can be tricked into decrypting** and returning/signing wrong data, for 
example an email previously captured by an attacker. To mitigate this the encrypted format message is fixed 
(e.g. a UUID) and signed by the server.
* **Client: the authentication cookie can be stolen if SSL can be broken.** This is not specific to this 
authentication method, as form authentication is also vulnerable to this class of attack.
* **Both: Key revocation and expiracy.** There is no facility at the moment to replace and revoke keys.

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/gpgauth.html %}
{% include aside/message.html %}
{% include layout/row_end.html %}