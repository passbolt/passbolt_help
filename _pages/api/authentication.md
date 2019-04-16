---
title: Authentication in passbolt
layout: api
category: api
slug: authentication
permalink: /api/authentication
---

## gpgAuth

Instead of a conventional form based login system, passbolt uses the [gpgAuth](https://gpgauth.org/) protocol for authenticating its clients. It is a challenge based authentication similar to what you would find in protocol such as SSH. You can read more about the authentication process [here](https://help.passbolt.com/tech/auth).

{% include messages/warning.html
    content="<b>Notice:</b> At the time of writing, the gpgAuth website was found to have some issues with it's HTTPS certificate. If you wish to access their website, you can do so by adding an exception in your browser."
%}


### gpgAuth response headers

GpgAuth uses a set of custom HTTP headers to send information to the client.


<table class="table-parameters">
  <thead>
    <tr>
      <th>Header</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
   <td>X-GPGAuth-Verify-Response
   </td>
   <td>The solved challenge that the server decrypted. The client compares it with the one stored locally and confirms server’s identity.
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Progress
   </td>
   <td>The current login stage number. Possible values are verify, stage0, stage1, complete and logout.
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-User-Auth-Token
   </td>
   <td>An encrypted token sent from the server for the client to decrypt and hence confirm it’s identity.
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Refer
   </td>
   <td>URI of the last location which triggered the login process. Used to redirect back after a successful login.
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Error
   </td>
   <td>Any information with regards to an authentication error
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Pubkey
   </td>
   <td>The server public key url
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Logout-Url
   </td>
   <td>The logout URL
   </td>
  </tr>
  <tr>
   <td>X-GPGAuth-Version
   </td>
   <td>GPGAuth version
   </td>
  </tr>
  </tbody>
</table>

### Verify Step

The verify step is used the verify your passbolt server's integrity. It is recommended, but optional, for a client to verify the server key. It involves 

1. Creating a cryptographically secure random token and store it locally.
2. Encrypt it for the server using the [broadcasted public key](/api#accessing-passbolt-server-public-key).
3. Make a POST request to /auth/verify.json and send the token in request body under gpg_auth[‘server_verify_token’] 

        ```php
        'data' => [
            'gpg_auth' => [
                'keyid' => <fingerprint_of_the_user>,
                'server_verify_token' => <Encrypted_token>
            ]
        ]
        ```



4. In the response look for the `X-GPGAuth-Verify-Response` header and check if it’s value matches with the locally stored value in step 1.


5. Proceed to the login step only if they match. 

### Login Steps

Step 1: The user sends their key fingerprint.

To get your GPG key fingerprint, you can use `gpg --fingerprint` command. It'll output a list of fingerprint the current user has access to.

```shell
$ gpg --fingerprint

/Users/abhinav/.gnupg/pubring.kbx
---------------------------------
pub   dsa2048 2010-08-19 [SC] [expires: 2020-06-15]
      85E3 8F69 046B 44C1 EC9F  B07B 76D7 8F05 00D0 26C4
uid           [ unknown] GPGTools Team <team@gpgtools.org>
sub   elg2048 2010-08-19 [E] [expires: 2020-06-15]
sub   rsa4096 2014-04-08 [S] [expires: 2024-01-02]

pub   rsa4096 2019-03-13 [SC] [expires: 2023-03-13]
      E240 E31A FE3D 92A8 33A7  F2FE C98B E203 3795 B6B6
uid           [ultimate] Abhinav Kumar <abhinav@passbolt.com>
sub   rsa4096 2019-03-13 [E] [expires: 2023-03-13]
```

The client sends the fingerprint of the user’s key via a POST request. 


```
POST /auth/login.json
```


The request body looks like 

```php
'data' => [
    'gpg_auth' => [
        'keyid' => <fingerprint_of_the_user>
    ]
]
```


Step 1.1: A matching key is not found. The server returns a `HTTP NOT FOUND` response meaning the user with the given fingerprint does not access to your passbolt server.

Step 1.2: A matching key is found. The server then generates a random token, stores it locally and then encrypts it with the user’s public key found in the previous step. The encrypted token is then sent in the `X-GPGAuth-User-Auth-Token` header to the client. An example response looks like this.

```
x-frame-options: sameorigin
X-GPGAuth-Authenticated: false
X-GPGAuth-Login-URL: /auth/login
X-GPGAuth-Logout-URL: /auth/logout
X-GPGAuth-Progress: stage1
X-GPGAuth-Pubkey-URL: /auth/verify.json
X-GPGAuth-User-Auth-Token: -----BEGIN\+PGP\+MESSAGE-----
X-GPGAuth-Verify-URL: /auth/verify
X-GPGAuth-Version: 1.3.0
x-permitted-cross-domain-policies: all
x-xss-protection: 1; mode=block
```

{% include messages/notice.html
    content="For better readability the usual response headers like <code>Cache-Control, Content-Type, Date, Expires</code> etc. are omitted above."
%}


Step 1.3: The client then decrypts the encrypted token

```bash
echo "<encrypted_token_from_server>" | gpg -d
```


Hence verifying the ownership of the fingerprint sent in step 1. You’ll require to enter your GPG key passphrase to decrypt the token.

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


Step 1.4: Finally the server verifies the plaintext token against the one stored locally in step 1.2 and upon success

*   Initiates a session
*   Logs the user in
*   Generates a secure token and sends to the client as a cookie called “csrfToken”


### Working with CSRF token

To prevent [Cross Site Request Forgery or CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) attacks a CSRF token must be included in all future requests that affects the integrity of the data (e.g. a resource edit or a user delete action for example). This makes sure that an attaquer can not create a malicious website that would trigger an action in passbolt, e.g prevent “clickjacking”. 

You can access this CSRF when accessing any read endpoint using the cookie `csrfToken`. In addition to request data parameters, CSRF tokens can be submitted through a special `X-CSRF-Token` header. Using a header often makes it easier to integrate a CSRF token with applications consuming the API.


### Working with MFA

Passbolt Pro Edition currently supports logging in using multi factor authentication. Your script will need to cater for these scenarios, if the account you are using has MFA enabled.