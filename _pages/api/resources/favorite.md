---
title: Favorite
layout: api
category: api
slug: favorites
permalink: /api/resources/favorites/index.html
---

Favorite endpoints are used to add or remove a resource from your favorites.


## The Favorite object

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
                Unique ID of the favorite object in UUID format.
            </td>
            <td>
                UUID
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
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                            8601</a>Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                foreign_key
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the Resource to add
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                foreign_model
            </td>
            <td>
                String
            </td>
            <td>
                Can only be "Resource"
            </td>
            <td>
                String
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
                <a
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
                            8601</a>&nbsp;Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
    </tbody>
</table>

## Add a resource to favorites

To add a resource to your favorite list, you can make a POST request to /favorites/resource/{resourceId}.json.

```
POST /favorites/resource/{resourceId}.json
```

Upon success this will return a json response like below

```json
{
    "header": {
        "id": "0bade2b5-db54-4537-872e-b82f33dee3e6",
        "status": "success",
        "servertime": 1555055916,
        "title": "app_favorites_add_success",
        "action": "0ed6c4a8-8c1f-52c6-9859-67f37794a02e",
        "message": "The resource was marked as favorite.",
        "url": "/favorites/resource/4d7adb92-0d85-56d7-8b92-e2b919ef8eb8.json?api-version=v2",
        "code": 200
    },
    "body": {
        "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
        "foreign_key": "4d7adb92-0d85-56d7-8b92-e2b919ef8eb8",
        "foreign_model": "Resource",
        "created": "2019-04-12T07:58:36+00:00",
        "modified": "2019-04-12T07:58:36+00:00",
        "id": "288050d2-25b0-4c04-a959-2fc6f4011208"
    }
}
```

### Possible Responses:


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
            Request went through. Given resource has been added to favorite</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
                <ol>
                    <li>If the given resourceId is not a uuid</li>
                    <li>Given resource is alredy added to favorite</li>
                </ol>
            </td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found
                <ol>
                    <li>if the resource does not exist</li>
                    <li>if the resource is deleted</li>
                    <li>if the user does not have access to the resource</li>
                </ol>
            </td>
        </tr>
    </tbody>
</table>

## Remove a resource from favorites

To remove a resource from your favorite list, you can make a DELETE request to /favorites/{favoriteId}.json.

```
DELETE /favorites/{favoriteId}.json
```

Upon success this will return a json response like below

```json
{
    "header": {
        "id": "baae23fe-5ee9-46fa-8e19-1d6dc5fb2dd1",
        "status": "success",
        "servertime": 1555067661,
        "title": "app_favorites_delete_success",
        "action": "8fb44391-6155-5bff-a3d5-57dea22c9894",
        "message": "The favorite was deleted.",
        "url": "/favorites/288050d2-25b0-4c04-a959-2fc6f4011208.json?api-version=v2",
        "code": 200
    },
    "body": null
}
```

### Possible Responses:


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
            Request went through. Given resource has been added to favorite</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
                If the given favoriteId is not a uuid
            </td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found<br/>
                If the favorite does not exist.
            </td>
        </tr>
    </tbody>
</table>
