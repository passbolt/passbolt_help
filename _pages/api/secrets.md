---
title: Secret
date: 2019-05-20 14:00:00 Z
layout: api
category: api,secrets,read
slug: secrets-read
permalink: /api/secrets
---

Secret endpoints are used to manage secrets on a Resource.

## The Secret object

<table class="table-parameters">
    <thead>
        <tr>
            <th>
                Attribute
            </th>
            <th>
                Type
            </th>
            <th>
                Description
            </th>
            <th>
                Format
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                id
            </td>
            <td>
                String
            </td>
            <td>
                Unique ID of the secret object in UUID format.
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                user_id
            </td>
            <td>
                String
            </td>
            <td>
                The target user id in UUID format.<br/> This is the user whose public key was used to encrypt the plaintext password.
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                resource_id
            </td>
            <td>
                String
            </td>
            <td>
                The target resource id in UUID format.
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                data
            </td>
            <td>
                String
            </td>
            <td>
                PGP encrypted plaintext password.
            </td>
            <td>
                <a href="https://en.m.wikipedia.org/wiki/Binary-to-text_encoding">ASCII Armored</a> binary to textual format.
            </td>
        </tr>
        <tr>
            <td>
                created
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the resource was created
            </td>
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                modified
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the resource was last modified
            </td>
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
    </tbody>
</table>

## View a resource's secret

To get a resource’s secret you can make the following request:

```
GET /secrets/resource/<resourceId>.json?api-version=v2
```

### Possible responses

<table class="table-parameters">
    <thead>
        <tr>
            <th>Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>200</td>
            <td>OK<br/>
            Response includes the Secret object.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
            The resource id is not valid.</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated.</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found<br/>
            The secret does not exist.</td>
        </tr>
    </tbody>
</table>

### Example Request

So a request to get secret for a resource identified by `8e3874ae-4b40-590b-968a-418f704b9d9a` will look like 

```
https://www.passbolt.test/secrets/resource/8e3874ae-4b40-590b-968a-418f704b9d9a.json?api-version=v2
```

Upon success this will return a payload like this

{% include api/json/secrets/secrets-view-success.md %}

### Retrieving the plaintext password

Please note that the returned secret is encrypted using the public key of the user making the request. To retrieve the plaintext password, you must decrypt it using the associated secret key.

{% include messages/notice.html
    content="The plaintext password is encrypted using the user's public key it's shared with. So to decrypt it, you must have secret/private key of that user in your keyring."
%}

In the example above, the string under the key `data` is the encrypted plaintext password. To decrypt it to retrieve the plaintext password, you can use `gpg -d` or `gpg --decrypt` command. Here is an example

```bash
$ echo "<encrypted_token_from_server>" | gpg -d
```

It should output the plaintext password on the console.

```bash
$ echo "<encrypted_token_from_server>" | gpg -d
gpg: encrypted with 4096-bit RSA key, ID 7A8E6D66F5DC4C49, created 2019-03-13
      "Abhinav Kumar <abhinav@passbolt.com>"
hello 

 ```

 In the example above "hello" is the plaintext password.