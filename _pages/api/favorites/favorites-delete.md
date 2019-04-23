---
title: Remove a favorite
date: 2019-04-23 14:00:00 Z
layout: api
category: api,favorites,delete
slug: favorites-delete
permalink: /api/favorites/delete
---

To remove a resource from your favorite list:

```
DELETE /favorites/<favoriteId>.json?api-version=v2
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

## Response Example
### Success

{% include api/json/favorites/favorites-delete-success.md %}

