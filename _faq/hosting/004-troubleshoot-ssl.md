---
title: Troubleshoot SSL
slug: troubleshoot-ssl
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2022-01-06 00:00:00 Z
---

## Table of content:

* [HTTPS configuration documentation](#https-configuration-documentation)
* [Check certificates content](#check-certificates-content)
  * [Certificate file](#certificate-file)
  * [Key file](#key-file)
* [Check if certificate file matches with the key](#check-if-certificate-file-matches-with-the-key)
* [Self-hosted private certificate chain study](#self-hosted-private-certificate-chain-study)
  * [Chain of trust](#chain-of-trust)
  * [Use case](#use-case)
    * [Display the chain of trust](#display-the-chain-of-trust)
    * [Check the chain of trust](#check-the-chain-of-trust)
* [Use online tools to check your SSL configuration](#use-online-tools-to-check-your-ssl-configuration)
  * [SSL Checker](#ssl-checker)
  * [What is my chain cert](#what-is-my-chain-cert)
  * [Qualys SSL Labs](#qualys-ssl-labs)
  * [Mozilla Observatory](#mozilla-observatory)

## HTTPS configuration documentation

You will find infos about [how to set up HTTPS on passbolt here](/configure/https)

## Check certificates content

It is a common error to invert certificate and key, so check their content :-)

### Certificate file

Certificate file must start with:

```
-----BEGIN CERTIFICATE-----
```

and end with:

```
-----END CERTIFICATE-----
```

### Key file

Key file must start with:

```
-----BEGIN PRIVATE KEY-----
```

and end with:

```
-----END PRIVATE KEY-----
```

## Check if certificate file matches with the key

The output of the two below commands must be **absolutely the same**.

Check the certificate:

```
openssl x509 -noout -modulus -in cert.pem | openssl md5
```

Check the key:

```
openssl rsa -noout -modulus -in key.pem | openssl md5
```

## Check if certificate matches your passbolt domain name

Another common error is to define a domain name to passbolt and set a certificate valid for another domain.

Check the domain name of your local certificate:

```
openssl x509 -text -noout -in cert.pem | grep DNS
```

You can also check your instance like this (replace passbolt.domain.tld with your passbolt domain name):

```
openssl s_client -connect passbolt.domain.tld:443 </dev/null 2>/dev/null | openssl x509 -noout -ext subjectAltName
openssl s_client -connect passbolt.domain.tld:443 </dev/null 2>/dev/null | openssl x509 -noout -text | grep DNS:
```

## Self-hosted private certificate chain study

Some companies don't rely on public certification authorities. They generate self-signed certificates and trust them with their own Private Key Infrastructure (PKI).

To trust SSL certificates signed by the PKI, you have to ensure root certificate of your company's PKI has been added in your operating system keychain.

### Chain of trust

A certificate chain or certificate CA bundle is a sequence of certificates, where each certificate in the chain is signed by the subsequent certificate.

An intermediate certificate authority (CA) is an entity that can sign certificates on behalf of the root CA.

The root CA is only ever used to create one or more intermediate CAs, which are trusted by the root CA to sign certificates on their behalf. This is best practice.

### Use-case

Let's assume the following chain of trust:

{% include articles/figure.html 
    url="/assets/img/help/2022/01/chain-of-trust.jpg"
    legend="Chain of Trust" 
    width="550px"
%}

* Your passbolt server certificate has been issued by "My Intermediate CA". 
* "My Intermediate CA" has been issued by "My Root CA"

To make your passbolt certificate trusted on your system, you have to add the root CA to your operating system keychain.

To manually check if your passbolt SSL certificate has been issued by the correct certificate authority, follow the procedure below.

#### Display the chain of trust

This command will display the chain of trust for passbolt.domain.tld:

```
openssl s_client -quiet -connect passbolt.domain.tld:443
```

It returns:

```
depth=2 CN = My Root CA, emailAddress = it@domain.tld, O = Your Company, OU = Your Company IT Team, L = Esch-Sur-Alzette, ST = Luxembourg, C = LU
verify return:1
depth=1 C = LU, ST = Luxembourg, O = Your Company, OU = Your Company IT Team, CN = My Intermediate CA, emailAddress = it@domain.tld
verify return:1
depth=0 CN = passbolt.domain.tld, emailAddress = it@domain.tld, O = Your Company, OU = Your Company IT Team, L = Esch-Sur-Alzette, ST = Luxembourg, C = LU
verify return:1
```

Where:

* depth 2 is your root certificate `CN=My Root CA`
* depth 1 is the intermediate certificate `CN=My Intermediate CA`
* depth 0 is your certificate `CN=passbolt.domain.tld`

#### Check the chain of trust

This command will display all certificates of the chain of trust:

```
openssl s_client -showcerts -connect passbolt.domain.tld:443
```

```
Certificate chain
 0 s:CN = passbolt.domain.tld, emailAddress = it@domain.tld, O = Your Company, OU = Your Company IT Team, L = Esch-Sur-Alzette, ST = Luxembourg, C = LU
   i:C = LU, ST = Luxembourg, O = Your Company, OU = Your Company IT Team, CN = My Intermediate CA, emailAddress = it@domain.tld
-----BEGIN CERTIFICATE-----
(...)
-----END CERTIFICATE-----
 1 s:C = LU, ST = Luxembourg, O = Your Company, OU = Your Company IT Team, CN = My Intermediate CA, emailAddress = it@domain.tld
   i:CN = My Root CA, emailAddress = it@domain.tld, O = Your Company, OU = Your Company IT Team, L = Esch-Sur-Alzette, ST = Luxembourg, C = LU
-----BEGIN CERTIFICATE-----
(...)
-----END CERTIFICATE-----
 2 s:CN = My Root CA, emailAddress = it@domain.tld, O = Your Company, OU = Your Company IT Team, L = Esch-Sur-Alzette, ST = Luxembourg, C = LU
   i:CN = My Root CA, emailAddress = it@domain.tld, O = Your Company, OU = Your Company IT Team, L = Esch-Sur-Alzette, ST = Luxembourg, C = LU
-----BEGIN CERTIFICATE-----
(...)
-----END CERTIFICATE-----
```

{% include messages/warning.html
    content="<b>Warning:</b> As it is not mandatory to expose root CA, it can be missing from the above command output. You will have to ask for it to the team who is managing the local PKI."
%}

Each "depth" is followed by its following certificate. You can now create 3 files:

* root certificate `rootCA.pem`
* intermediate certificate: `intermediate.pem`
* passbolt certificate: `passbolt.pem`

To check if `intermediate.pem` has been issued by `rootCA.pem`:

```
$ openssl verify -CAfile rootCA.pem intermediate.pem
```

It will return:

```
intermediate.pem: OK
```

But if we try to check if `passbolt.pem` has been issued by `intermediate.pem`, it fails:

```
$ openssl verify -CAfile intermediate.pem passbolt.pem
C = LU, ST = Luxembourg, O = Your Company, OU = Your Company IT Team, CN = My Intermediate CA, emailAddress = it@domain.tld
error 2 at 1 depth lookup: unable to get issuer certificate
error passbolt.pem: verification failed
```

To correctly check `passbolt.pem` certificate, you have to check the **full chain of trust**, aka `intermediate.pem + passbolt.pem` with the `rootCA.pem`.

Create a bundle certificate:

```
cat intermediate.pem passbolt.pem > bundle.pem
```

Then check `bundle.pem`:

```
$ openssl verify -CAfile rootCA.pem bundle.pem
bundle.pem: OK
```

Congratulations, your certificate is fully trusted !

## Use online tools to check your SSL configuration

In case your passbolt instance is publicly reachable, you can use online tools to validate your SSL configuration.
### SSL Checker

[https://www.sslshopper.com/](https://www.sslshopper.com/ssl-checker.html)

This tool will check your server and reports if any misconfiguration found.

{% include articles/figure.html 
    url="/assets/img/help/2022/01/sslshopper-success.jpg"
    legend="SSL Checker Success" 
    width="550px"
%}

{% include articles/figure.html 
    url="/assets/img/help/2022/01/sslshopper-fail.jpg"
    legend="SSL Checker Fail" 
    width="550px"
%}

### What is my chain cert

[https://whatsmychaincert.com/](https://whatsmychaincert.com/){:target="_blank"}

Typically, the root CA does not sign server or client certificates directly, it is achieved by intermediate certificate and you must include them with your cert.

[https://whatsmychaincert.com/](https://whatsmychaincert.com/){:target="_blank"} will help you to generate the correct certificate chain.

If you want to know more about "Root vs Intermediate Certificates" you can read [this well-explained external ressource](https://www.golinuxcloud.com/openssl-create-certificate-chain-linux/){:target="_blank"}

### Qualys SSL Labs

[https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/){:target="_blank"}

This tool will show you the quality of your SSL configuration. A+ is the highest note.

{% include articles/figure.html 
    url="/assets/img/help/2022/01/qualys-ssl-labs.jpg"
    legend="SSL Test Pass" 
    width="550px"
%}

### Mozilla Observatory

[https://observatory.mozilla.org/](https://observatory.mozilla.org/){:target="_blank"}

Mozilla Observatory is another web tool to show you the quality of your SSL configuration.

{% include articles/figure.html 
    url="/assets/img/help/2022/01/mozilla-observatory.jpg"
    legend="SSL Scan Pass" 
    width="550px"
%}
