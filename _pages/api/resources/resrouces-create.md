---
title: Create a resource
date: 2019-04-23 14:00:00 Z
layout: api
category: api,resources,create
slug: resources-create
permalink: /api/resources/create
---

To create a new Resource, make a `POST` request to `/resources.json` with the encrypted secret data in request body.
You must encrypt the data with the current user public key. And a valid request body will look like:

```
POST /resources.json?api-version=v2
```
```json
{ 
  "name": "<string>",
  "description": "<string>",
  "secrets": [{
    "user_id": "<UUID>",
    "data": "<encrypted_password>"
  }]
}
```

{% include messages/notice.html
    content="<strong>Note:</strong> even if secrets is an array, you can only push the secret for the current user
    at the moment."
%}

## Parameters

The request body expects the following parameters:

<table class="table-parameters">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
            <th>Required</th>
            <th>Validation Constraints</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>Name for the new resource.</td>
            <td>Yes</td>
            <td>Valid utf8 string.<br>
                Must not exceed 64 characters.<br>
                Empty string not allowed.</td>
        </tr>
        <tr>
            <td>description</td>
            <td>Description for the new resource.</td>
            <td>No</td>
            <td>Valid utf8 string. <br>
                Must not exceed 10000 characters</td>
        </tr>
        <tr>
            <td>username</td>
            <td>Username for this login</td>
            <td>No</td>
            <td>Valid utf8 string.<br>
                Must not exceed 64 characters</td>
        </tr>
        <tr>
            <td>uri</td>
            <td>URI/URL for the new resource.</td>
            <td>String</td>
            <td>Valid utf8 string.<br>
                Must not exceed 1024 characters.
            </td>
        </tr>
        <tr>
            <td>secrets</td>
            <td>An array of secrets in object format</td>
            <td>Array</td>
            <td>Exactly one secret must be provided.</td>
        </tr>
        <tr>
            <td>secrets.user_id</td>
            <td>User ID of the user</td>
            <td>String</td>
            <td>UUID</td>
        </tr>
        <tr>
            <td>secrets.data</td>
            <td>Encrypted password.</td>
            <td>String</td>
            <td>Valid ASCII Armored OpenPGP block</td>
        </tr>
    </tbody>
</table>

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

## Examples
### Valid request

```json
{ 
  "name": "Apple developer ID",
  "description": "Official apple account to publish apps on the app store",
  "secrets": [{
    "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "data": "<encrypted_password>"
  }]
}
```

### Success response

A successful request will return a json response like below:
{% include api/json/resources/resources-create-success.md %}

## Error response

A request must pass all the validation checks. For example sending a blank request body will return

{% include api/json/resources/resources-create-error.md %}
