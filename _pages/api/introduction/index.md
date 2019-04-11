---
title: Introduction
layout: api
category: api
notsearchable: true
slug: introduction
permalink: /api/introduction
---
Passbolt provides a bunch of REST API endpoints that can be used to access and interact with almost all the aspects of it. Below are detailed documentation of these endpoints, their request/response schema and some relevant code examples to get you started. 

If you are familiar with the APIs and only looking for their implementation details, there is a repo with our latest OpenAPI 2.0 specifications published at:

[https://github.com/passbolt/passbolt_openapi_specs](https://github.com/passbolt/passbolt_openapi_specs)


## Structure of this document

The APIs are grouped around the data that they interact with.

## Getting Started

To get started with the passbolt REST API (hence referred to as “APIs”) you need 



*   a running passbolt server instance
*   Ability to use GnuPG (directly or via GpgMe) or an independant OpenPGP implementation in your favorite language. There are various language libraries available that let you do it, like OpenPGP.js for Javascript and Php Gnupg/Openpgp-php for PHP.
*   A passbolt user account if you want to access protected data. Their public, private keys as well as their passphrase.

## Response Schema

passbolt API endpoints return data in an envelope with “header” and “body” properties. The “header” contains response metadata like response code, server_time, error messages etc. and the “body” contains the actual payload. So for example requesting a single resource by id will result in something like

```json
{
  "header": {
    "id": "bc8a85a7-bde8-48d5-8749-827c9185db15",
    "status": "success",
    "servertime": 1554907370,
    "title": "app_resources_view_success",
    "action": "83bb8bd8-2006-5546-a3bb-9319ae6e8f9d",
    "message": "The operation was successful.",
    "url": "/resources/ecf0ed85-3bfc-5f45-b11d-74e9a86aa313.json?api-version=v2",
    "code": 200
  },
  "body": {
    "id": "ecf0ed85-3bfc-5f45-b11d-74e9a86aa313",
    "name": "Grogle",
    "username": "googleusername",
    "uri": "http://fr.groland.wikia.com/wiki/Grogle",
    "description": "",
    "deleted": false,
    "created": "2019-04-04T12:05:58+00:00",
    "modified": "2019-04-08T09:16:09+00:00",
    "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
    "modified_by": "f848277c-5398-58f8-a82a-72397af2d450"
  }
}
```

## Error response schema

An unsuccessful operation will result in an error response. The error response will follow the same as above mentioned “header” and “body” properties scheme. Only this time the body will have the error details. The response body will be a json object with key for each data item that failed validation. 

```json
{
    "header": {
        "id": "965c9f17-18ae-48fd-a36e-e42f04a30442",
        "status": "error",
        "servertime": 1554907648,
        "title": "app_resources_add_error",
        "action": "ad8bbc35-6435-538e-b1a7-80b87bcedb6a",
        "message": "Could not validate resource data.",
        "url": "\/resources.json?api-version=v2",
        "code": 400
    },
    "body": {
        "name": {
            "_required": "A name is required."
        },
        "secrets": {
            "_required": "A secret is required."
        }
    }
}
```

As you can see, the response body contains two keys, “name” and “secrets” as they failed some validation rules. Further, they also have their own json object with a key (_required) that represents the validation rule that failed and a value (“A name is required”) the actual error message.


## API Versions

Historically passbolt supports two different formats for interacting with the API in order to maintain backward compatibility. 

Passbolt APIs are versioned. It currently supports version 2 and 1, where v1 is the default, and both are supported to ensure backward compatibility. However this will change in the future so please use (or switch) to API version 2 as soon as possible to minimize future refactoring in your application.

You can  target a specific API version by including a query string `api-version` in your requests. For example to get a list of all resources using version 1, you can do

```
GET /resources.json?api-version=v1
```

It’ll result in something like

```json
{
    "header": {
        "id": "b8ab8696-e5a1-4a06-bfbc-a7b77efd8f10",
        "status": "success",
        "servertime": 1554897334,
        "title": "app_resources_index_success",
        "action": "c506210f-7866-5691-8fc1-58772e8f49f1",
        "message": "The operation was successful.",
        "url": "\/resources.json?api-version=v1",
        "code": 200
    },
    "body": [
        {
            "Resource": {
                "id": "603ac201-d5cb-4097-98b7-ac59d5269a4e",
                "name": "      f",
                "username": null,
                "uri": null,
                "description": null,
                "deleted": false,
                "created": "2019-04-06 09:41:33",
                "modified": "2019-04-06 09:41:33",
                "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
                "modified_by": "f848277c-5398-58f8-a82a-72397af2d450"
            }
        },
        {
            "Resource": {
                "id": "8e3874ae-4b40-590b-968a-418f704b9d9a",
                "name": "apache",
                "username": "www-data",
                "uri": "http:\/\/www.apache.org\/",
                "description": "Apache is the world\u0027s most used web server software.",
                "deleted": false,
                "created": "2019-04-02 12:05:58",
                "modified": "2019-04-03 12:05:58",
                "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
                "modified_by": "f848277c-5398-58f8-a82a-72397af2d450"
            }
        }
    ]
}
```

Notice how the associated objects like “Modifier”, “Creator” and “Tag” are on the same level as “Resource”. 

Whereas the same request using V2 will look like

```
GET /resources.json?api-version=v2
```

And will return a response body like

```json
{
    "header": {
        "id": "58e1d35d-d6cb-4cb7-94b9-f43bae176bfa",
        "status": "success",
        "servertime": 1554897573,
        "title": "app_resources_index_success",
        "action": "c506210f-7866-5691-8fc1-58772e8f49f1",
        "message": "The operation was successful.",
        "url": "\/resources.json?api-version=v2",
        "code": 200
    },
    "body": [
        {
            "id": "603ac201-d5cb-4097-98b7-ac59d5269a4e",
            "name": "      f",
            "username": null,
            "uri": null,
            "description": null,
            "deleted": false,
            "created": "2019-04-06T09:41:33+00:00",
            "modified": "2019-04-06T09:41:33+00:00",
            "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "modified_by": "f848277c-5398-58f8-a82a-72397af2d450"
        },
        {
            "id": "8e3874ae-4b40-590b-968a-418f704b9d9a",
            "name": "apache",
            "username": "www-data",
            "uri": "http:\/\/www.apache.org\/",
            "description": "Apache is the world\u0027s most used web server software.",
            "deleted": false,
            "created": "2019-04-02T12:05:58+00:00",
            "modified": "2019-04-03T12:05:58+00:00",
            "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "modified_by": "f848277c-5398-58f8-a82a-72397af2d450"
        }
    ]
}
```

This time the associated fields like “modifier”, “creator” and “tags” are all part of the single “Resource” object they belong to. This is just one of the major changes over `v1`. To see  the complete changelog please visit the repo.