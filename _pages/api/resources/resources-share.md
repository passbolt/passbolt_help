---
title: Share
date: 2019-04-23 14:00:00 Z
layout: api
category: api,resources,share
slug: resources-share
permalink: /api/resources/share
---

A [Resource](/api/resources) can be shared with another [User](/api/users) or [Group](/api/groups). Which essentially means adding permissions to the Resource for the User/Group.

Permissions in passbolt use some Access Control List (ACL) lingo. Mostly two concepts:
- Access Control Object (ACO) that represents something that is wanted, like a resource and its secrets.
- Access Request Object (ARO) represents something that wants an ACO, so a user or a group.

### Get all AROs

In order to know the list of AROs with whom a Resource can be shared, you can use the `search-aros` endpoint.

To get the ARO list make a GET request to /share/search-aros.json

```
GET /share/search-aros.json?api-version=v2
```

The response returned will have an array of json objects, each representing either a Group or a User.

```json
{
    "header": {
        "id": "1e0b7ca1-8427-4ec4-a46e-b3dc4f11f878",
        "status": "success",
        "servertime": 1554968444,
        "title": "app_share_searchArosToShareWith_success",
        "action": "10807e9e-d525-5acc-b05d-cccbbd252a93",
        "message": "The operation was successful.",
        "url": "\/share\/search-aros.json?api-version=v2",
        "code": 200
    },
    "body": [
        {
            "user_count": "18",
            "id": "bda0a05c-b1fa-58be-b5b9-446e65ace052",
            "name": "Group Name",
            "deleted": false,
            "created": "2018-01-08T13:39:25+00:00",
            "modified": "2018-01-08T13:39:25+00:00",
            "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
            "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856"
        },
        {
            "id": "f848277c-5398-58f8-a82a-72397af2d450",
            "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
            "username": "ada@passbolt.com",
            "active": true,
            "deleted": false,
            "created": "2019-02-04T12:05:44+00:00",
            "modified": "2019-03-04T12:05:44+00:00",
            "profile": {}, // User profile object
            "groups_users": [
                {
                    "id": "4f2a3f6e-1a3f-4f4a-a523-46c6b6d0f763",
                    "group_id": "05b68bd2-e4e8-4838-ac21-4661b27fb23b",
                    "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                    "is_admin": true,
                    "created": "2019-04-08T12:44:44+00:00"
                },
                {
                    "id": "6809e727-1219-4cfa-a201-1d3e997ca351",
                    "group_id": "73479f22-b387-4d4e-b625-b1cc0b7ed116",
                    "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                    "is_admin": true,
                    "created": "2019-04-08T12:10:03+00:00"
                }
            ],
            "role": {
                "id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                "name": "user",
                "description": "Logged in user",
                "created": "2012-07-04T13:39:25+00:00",
                "modified": "2012-07-04T13:39:25+00:00"
            },
            "gpgkey": {
                "id": "04481719-5d9d-5e22-880a-a6b9270601d2",
                "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----",
                "bits": 4096,
                "uid": "Ada Lovelace \u003Cada@passbolt.com\u003E",
                "key_id": "5D9B054F",
                "fingerprint": "03F60E958F4CB29723ACDF761353B5B15D9B054F",
                "type": "RSA",
                "expires": "2019-08-09T12:48:31+00:00",
                "key_created": "2015-08-09T12:48:31+00:00",
                "deleted": false,
                "created": "2019-04-04T12:05:49+00:00",
                "modified": "2019-04-04T12:05:49+00:00"
            },
            "last_logged_in": ""
        }
    ]
}
```

{% include messages/notice.html
    content="Take a note of the <code>user_count</code> key under group type AROs as that's the exact number of secrets you'll need to send in order to share a resource with that group."
%}

## Sharing a Resource

Sharing a Resource involves the following steps.

1. Get the id of the Resource you want to share.
2. Get the id of the ARO you want to share it with.
3. Encrypt the plaintext secret for all users using their public keys.
4. Send the ASCII armored encrypted message for each of the affected users to the API.

The payload takes a json object with keys for "permissions" and "secrets". The "permission" key contains a json array where each object represents a [Permission](/api/permissions) object for a user. While the "secrets" key contains a json array where each object represents a Secret object. At the very least, it contains the user_id and OpenPGP encrypted armored message. 

To generate the encrypted message, you can use 

```bash
$ echo <plaintext_password> | gpg -r <gpg_uid> -e -a
```

The `search-aros` endpoint described above outputs the gpg details for individual users like their `armored_key`, `uid`, `key_id` and `fingerprint`. For Groups, you can make a GET request to `/groups/<group_id>.json` endpoint. For more info, check the [View a group](/api/groups/read) page.

{% include messages/notice.html
    content="Based on the trust level of the public key gpg might complain about <code>There is no assurance this key belongs to the named user</code> If you trust the key, you can proceed by responding 'y'"
%}

Upon confirmation, gpg outputs the ascii armored message

```bash
$ echo <plaintext_password> | gpg -r <gpg_uid> -e -a

-----BEGIN PGP MESSAGE-----

hQIMAxWrZ+ffF0kbARAAxGsQGv+ev9YNepCSmZKgVyLz9wtGmdy9In/nbVDPds3k
RSIrq5w9bNEx2h3HCdoR1tb5mii57GZ4kkqj/vN0dZRxbMJi7GAZuoPq+0N/KyKW
8MUlauobLsPmRW5HNbR5qMr8M3362nYsqDfDq+hJYng6Dg50Jpo3nTZmDqiLfcgz
n8x4i8BlNjZcy1DYOuQPP9CYSAnaK3QiFPIlaW3eJl9lkgpzlBirJLqPkwNcrB2V
BsVjjqIUnYFMZMe6ttm+JYNX4x8jjOAxOTWJeT8Do4nwyAuXgMoUL7YpDrPMb93F
AhNZs9WlF43Fh5UhpaZo0fagc3nNWPIXlNL7zGBPhM1U53oOer+CqGWlrEFaFfaf
+ImVZkiodITchymABK5CW4/YvwBQec7uLQcj+JC2IpsHKflar+43q6wVI5lwTvb7
p499DLdFmRyGZtbtgX5FhKWJWLvRxhGq3b5D5Wfix8S9kq4lyQArM4kkb1AT3u1j
diriLrRuJRz6BpRSat2WiAxh1moBf9/E7ymZe2Goi0F4sdtBoRwWbMoG3QMAWxNd
pHufLw57IjasIE8b4zlVnyodVrfaNAKnuQfCIl0Ocq6QP+FkQPZ9p2g3V/DIjh1h
qaEoKyzbQ83IGXyas5hYXJQtdJRiQCdBxpME00BFV+Gcsay2JPmjndsA/8U21E/S
QQG/c0kJXrdOsSwhDuu1ssCn79ayjoWo1OT70+Mg0yygeEgokVGHdp1O5vS9BTmo
NUYjWplniE9MhkzVaYqjng8n
=2F87
-----END PGP MESSAGE-----
```

This needs to be done for each user gaining access to the secret
So the request body will look like

```json
{
  "permissions": [
    {
      "is_new": true,
      "aro": "Group",
      "aro_foreign_key": "36563004-3f25-50c0-b22e-6554c3ccc4e7",
      "aco": "Resource",
      "aco_foreign_key": "8e3874ae-4b40-590b-968a-418f704b9d9a",
      "type": 7
    }],
  "secrets": [
    {
      "user_id": "8d04cf98-716b-5f6d-9fe8-c130f8992646",
      "data":"-----BEGIN PGP MESSAGE-----"
    }
  ]
}
```

### Simulate Sharing

Passbolt API allows you to simulate a share before actually going through with this. This way you can see if the 
params pass the validation checks. To simulate sharing a resource 
you can make a `POST` request to `/share/simulate/resource/<resourceId>.json` where `resourceId` is the id of the 
[Resource](/api/resources) you wish to share.

```
POST /share/simulate/resource/<resourceId>.json?api-version=v2
```

If the resource can be shared safely, this returns an associative array that contains a list of new users who 
will have access to the resource and a list of users who will lose their access. These lists can be used to 
encrypt the secrets for the users who get access and to remove the secrets of the users who lost their access.

```json
{
    "header": {
        "id": "499657b1-463c-49e3-99d0-7d4bca7392c2",
        "status": "success",
        "servertime": 1554972001,
        "title": "app_share_dryRun_success",
        "action": "7df37cb5-cfb9-57c2-a7a5-b65c9f573de0",
        "message": "The operation was successful.",
        "url": "\/share\/simulate\/resource\/8e3874ae-4b40-590b-968a-418f704b9d9a.json?api-version=v2",
        "code": 200
    },
    "body": {
        "changes": {
            "added": ["<uuid1>", "<uuid2>"],
            "removed": ["<uuid3>", "<uuid4>"]
        }
    }
}
```

### Final sharing

If the simulation returns a success response, you can go ahead with sharing your resource. To share a resource 
you can make a `PUT` request to `/share/simulate/resource/<resourceId>.json` where `resourceId` is the id of the 
[Resource](/api/resources) you wish to share.

```
PUT /share/resource/<resourceId>.json?api-version=v2
```

The request schema is same as above while the response can be either of the following.

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
            The resource is shared successfully.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
            The resourceId supplied is not a valid UUID</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found<br/>
            The resource either does not exist or<br/>
            The user does not have access permission or<br/>
            Invalid number of secrets sent.
            </td>
        </tr>
    </tbody>
</table>