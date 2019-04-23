---
title: Update a resource
date: 2019-04-23 14:00:00 Z
layout: api
category: api,resources,update
slug: resources-update
permalink: /api/resources/update
---

A Resource can be updated by sending a `PUT` request to `/resources/<resourceId>.json`:
The request body contains the new data to be updated. The request body schema is same than when creating a resource.

```
PUT /resources/<resourceId>.json?api-version=v2
```
```json
{
  "name": "<string>",
  "description": "<string>",
  "secrets": [{
    "user_id": "<userId-1>",
    "data": "<encrypted_password_using_user_1_public_key>"
  }, {
    "user_id": "<userId-n>",
    "data": "<encrypted_password_using_user_n_public_key>"
  }]
}
```

If the password you are updating has been shared with 7 users, the “secrets” key will need to be an array of 7 objects:
You must encrypt and sign the new plaintext passwords using the recipient public key and the current user secret key.
You can then create a list which include one object per user: the `data` key holds the encrypted plaintext password 
and `user_id` holds the user UUID.

### Possible Responses

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
            The Resource was created. The response body will contain the newly created resource object.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
            Some of the data validation failed.</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
    </tbody>
</table>
