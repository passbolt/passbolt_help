---
title: API Versions
layout: api
category: api
slug: api-versions
permalink: /api/introduction/api-versions
---

Historically passbolt supports two different formats for interacting with the API in order to maintain backward compatibility. 

Passbolt APIs are versioned. It currently supports version 2 and 1, where v1 is the default, and both are supported to ensure backward compatibility. However this will change in the future so please use (or switch) to API version 2 as soon as possible to minimize future refactoring in your application.

You can  target a specific API version by including a query string `api-version` in your requests. For example to get a list of all resources using version 1, you can do

```
GET /resources.json?api-version=v1
```

It’ll result in something like

```
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

`GET /resources.json?api-version=v2`

And will return a response body like

```
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