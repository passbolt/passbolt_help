---
title: Add a resource to favorites
date: 2019-04-23 14:00:00 Z
layout: api
category: api,favorites,create
slug: favorites-create
permalink: /api/favorites/create
---

To add a resource to your favorite list:

```
POST /favorites/resource/<resourceId>.json?api-version=v2
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

## Response examples
### Success

Upon success this will return a json response like below

{% include api/json/favorites/favorites-create-success.md %}
