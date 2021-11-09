---
title: View a resource type
date: 2021-05-26 14:00:00 Z
layout: api
category: api,resource-types,read
slug: resource-types-read
permalink: /api/resource-types/read
---

To fetch a resource type user has access to, make the following request:
```
GET /resource-types/<UUID>.json
```

### Request Parameters

The endpoint does not take any additional parameter.

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
            Request went through. The response payload will contain a list of resources.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad request<br/>
            For example if the resource type id is not a uuid.</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not found<br/>
            If the resource type is not found, if it does not exist or have been deleted.</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated.</td>
        </tr>
    </tbody>
</table>

### Success response
A successful response will return a resource type.
It will look something like this example:
```
GET /resource-types/600f5f81-d99f-4763-80fc-5168561010d7.json
```
```
{
    "header": {
        "id": "600f5f81-d99f-4763-80fc-5168561010d7",
        "status": "success",
        "servertime": 1622043241,
        "action": "e2aa01a9-84ec-55f8-aaed-24ee23259339",
        "message": "The operation was successful.",
        "url": "\/resource-types.json",
        "code": 200
    },
    "body": {
        "id": "669f8c64-242a-59fb-92fc-81f660975fd3",
        "slug": "password-string",
        "name": "Simple password",
        "description": "The original passbolt resource type, where the secret is a non empty string.",
        "definition": {
            "resource": {
                "type": "object",
                "required": [
                    "name"
                ],
                "properties": {
                    "name": {
                        "type": "string",
                        "maxLength": 64
                    },
                    "username": {
                        "anyOf": [
                            {
                                "type": "string",
                                "maxLength": 64
                            },
                            {
                                "type": "null"
                            }
                        ]
                    },
                    "uri": {
                        "anyOf": [
                            {
                                "type": "string",
                                "maxLength": 1024
                            },
                            {
                                "type": "null"
                            }
                        ]
                    },
                    "description": {
                        "anyOf": [
                            {
                                "type": "string",
                                "maxLength": 10000
                            },
                            {
                                "type": "null"
                            }
                        ]
                    }
                }
            },
            "secret": {
                "type": "string",
                "maxLength": 4096
            }
        },
        "created": "2021-05-05T11:06:31+00:00",
        "modified": "2021-05-05T11:06:31+00:00"
    }
}
```