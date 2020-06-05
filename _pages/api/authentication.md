---
title: Authentication in passbolt
date: 2019-04-23 14:00:00 Z
layout: api
category: api,authentication
slug: authentication
permalink: /api/authentication
---

Instead of a conventional form based login system, passbolt uses the GpgAuth protocol 
for authenticating its clients. It is a challenge based authentication similar to what you would find in protocol 
such as SSH. You can read more about the authentication process and how it differs from traditional 
authentication method [here](https://help.passbolt.com/tech/auth).

For a practical example, you can also have a look at our simple [implementation example written in PHP](https://github.com/passbolt/passbolt_api_php_example)

### Sequence diagram

The process works by the two-way exchange of encrypted and signed tokens between the user and the service.
The authentication process is as follow:

{% include articles/figure.html
    url="/assets/img/diagrams/sequence_diagram_gpg_authenticate.png"
    legend="Sequence diagram of a GPGAuth based authentication"
    width='640px'
%}

### Custom response headers

The server uses a set of custom HTTP headers to send information to the client related to the authentication.

<table class="table-parameters">
  <thead>
    <tr>
      <th style="min-width:220px">Header</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
   <td>X-GPGAuth-Verify-Response</td>
   <td>
    The challenge response, e.g. the secret the server needed to decrypt. The client compares it with the one 
    stored locally and confirms server’s identity.
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Progress</td>
   <td>The current login stage number. Possible values are verify, stage0, stage1, complete and logout.
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-User-Auth-Token</td>
   <td>An encrypted token sent from the server for the client to decrypt and hence confirm it’s identity.
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Refer</td>
   <td>URI of the last location which triggered the login process. Used to redirect back after a successful login.
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Error</td>
   <td>Any information with regards to an authentication error
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Pubkey</td>
   <td>The server public key url
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Logout-Url</td>
   <td>The logout URL
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Version</td>
   <td>GPGAuth version
   </td>
  </tr>
  </tbody>
</table>

### Verify Step

The verify step is used the verify your passbolt server identity. It is useful in some security cases such as
when a domain name is seized. This server identity verification should not be understood as an end to end server 
authentication, e.g. it does not protect against an attacker performing a man in the middle attack. 

It is recommended, but optional, for a client to verify the server key. It involves:

1. The client generates an encrypted token of random data (encrypted with the server public key), and stores 
    the unencrypted version locally.
2. That encrypted token is sent to the server along with the user key fingerprint.
3. Based on the user key fingerprint the server check if the user exist and is active. 
    If it is the case the server decrypts the nonce and check if it is in the valid format.
4. The server sends back the decrypted nonce.
5. The client check if the nonce match the previously recorded one. If it does not match the client warns the user that the server identity cannot be verified.

In practice you must:
- Create a cryptographically secure random token and store it locally. Encrypt it for the server using the [broadcasted public key](/api#accessing-passbolt-server-public-key).
- Make a POST request to /auth/verify.json and send the token in request body under gpg_auth[‘server_verify_token’] 
```php
'data' => [
    'gpg_auth' => [
        'keyid' => <fingerprint_of_the_user>,
        'server_verify_token' => <Encrypted_token>
    ]
]
```

- In the response look for the `X-GPGAuth-Verify-Response` header and check if it’s value matches with the locally 
    stored value in step 1.
- Proceed to the login step only if they match. 

### Login Steps

1. The user sends their key fingerprint.
2. The server checks to see if the fingerprint and user associated with are valid. It then generates an encrypted token of random data, and stores the unencrypted version locally.
3. The server sends the unencrypted signed user token, and the encrypted server token to the user.
4. The user enter their private key passphrase, the client decrypt the nonce and check the token format.
5. The client send back the decrypted nonce along with the user key fingerprint.
6. The server compares the un-encrypted signed token sent from the client to make sure it matches. If the server is satisfied, the authentication is completed as with a normal form based login: session is started.

#### Step 1
To get your GPG key fingerprint, you can use `gpg --fingerprint` command. It will output a list of fingerprint the 
current user has access to.

```shell
$ gpg --fingerprint
﻿/home/ada/.gnupg/pubring.kbx
-----------------------------
pub   rsa4096 2015-10-26 [SC] [expires: 2019-10-26]
      03F6 0E95 8F4C B297 23AC  DF76 1353 B5B1 5D9B 054F
uid           [ unknown] Ada Lovelace <ada@passbolt.com>
sub   rsa4096 2015-10-26 [E] [expires: 2019-10-26]

```

The client sends the fingerprint of the user’s key via a POST request. 

```
POST /auth/login.json
```
```php
'data' => [
    'gpg_auth' => [
        'keyid' => <fingerprint_of_the_user>
    ]
]
```

#### Step 2

Step 2a: A matching key is found. The server then generates a random token, stores it locally and then encrypts it 
with the user’s public key found in the previous step. 

Step 2b: A matching key is not found. The server returns a `HTTP 404 NOT FOUND` response meaning the user with the 
given fingerprint does not access to your passbolt server.

### Step 3
The encrypted token is then sent in the 
`X-GPGAuth-User-Auth-Token` header to the client. An example response looks like this.

```
X-GPGAuth-Authenticated: false
X-GPGAuth-Login-URL: /auth/login
X-GPGAuth-Logout-URL: /auth/logout
X-GPGAuth-Progress: stage1
X-GPGAuth-Pubkey-URL: /auth/verify.json
X-GPGAuth-User-Auth-Token: -----BEGIN\+PGP\+MESSAGE-----
X-GPGAuth-Verify-URL: /auth/verify
X-GPGAuth-Version: 1.3.0
```

{% include messages/notice.html
    content="For readability the usual response headers like <code>Cache-Control, Content-Type, Date, Expires</code> etc. are omitted above."
%}

#### Step 4
The token is returned encoded as a url. To be used, it first needs to be decoded. If you have php installed, you can use this command:
```bash
echo "<token>" | php -r "echo stripslashes(urldecode(file_get_contents('php://stdin')));" 
```

The client then decrypts the encrypted token:

```bash
echo "<encrypted_token_from_server>" | gpg -d
```

The client must verify the token format. Otherwise there is a risk than an attacker uses this channel to decrypt other
content. The token format must look like:

`gpgauthv1.3.0|36|10e2074b-f610-42be-8525-100d4e68c481|gpgauthv1.3.0`

Hence verifying the ownership of the fingerprint sent in step 1. The passphrase will be required to decrypt the token.
After decrypting, the client will send the decrypted (plaintext) data back to the server for verification.

```
POST /auth/login.json
```
```php
'data' => [
    'gpg_auth' => [
        'keyid' => <same_fingerprint_as_step1>,
        'user_token_result' => <decrypted_token_in_plaintext> 
    ]
]
```
#### Step 5
Finally the server verifies the plaintext token against the one stored locally in step 2 and upon success.
*   Initiates a session
*   Logs the user in
*   Generates a secure token and sends to the client as a cookie called “csrfToken”

### Working with CSRF token

To prevent [Cross Site Request Forgery or CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) attacks a 
CSRF token must be included in all future requests that affects the integrity of the data (e.g. a resource edit or a 
user delete action for example). This makes sure that an attaquer can not create a malicious website that would 
trigger an action in passbolt, e.g prevent “clickjacking”. 

You can access this CSRF when accessing any read endpoint using the cookie `csrfToken`. In addition to request 
data parameters, CSRF tokens can be submitted through a special `X-CSRF-Token` header. Using a header often makes 
it easier to integrate a CSRF token with applications consuming the API.

### Working with MFA

Passbolt Pro Edition currently supports logging in using multi factor authentication (MFA). Your script will need to 
cater for these scenarios, if the account you are using has MFA enabled. After login or when the current MFA 
authorisation session expires, if MFA is required the current request will be redirected using the `HTTP 403 FORBIDDEN`
code. 

{% include api/json/mfa/mfa-verify-get-error.md %}

The response list the available options. It is possible to redirect the user there or for some providers, such as
TOTP (Google Authenticator) or HOTP (Yubikey) to implement this logic directly inside your 
application the additional interactions. 

For example you can post the MFA credentials for TOTP provider as follow:
```js
fetch('/mfa/verify/totp.json?api-version=v2', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'X-CSRF-Token': crsfToken
  },
  body: {'totp': otp}
});
```

For some other providers like Duo you will require the ability to embed an iframe, which depending on your context 
may not be possible.
