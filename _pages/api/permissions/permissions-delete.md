---
title: Delete a permission
date: 2019-04-23 14:00:00 Z
layout: api
category: api,permissions,delete
slug: permissions-delete
permalink: /api/permissions/delete
---

To remove a resource from your permission list, you can make the following request:

```
DELETE /permissions/<permissionId>.json?api-version=v2
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
            Request went through. Given resource has been added to permission</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
                If the given permissionId is not a uuid
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
                If the permission does not exist.
            </td>
        </tr>
    </tbody>
</table>

## Response examples
### Success

Upon success this will return a json response like:

```json
{
    "header": {
        "id": "baae23fe-5ee9-46fa-8e19-1d6dc5fb2dd1",
        "status": "success",
        "servertime": 1555067661,
        "title": "app_permissions_delete_success",
        "action": "8fb44391-6155-5bff-a3d5-57dea22c9894",
        "message": "The permission was deleted.",
        "url": "/permissions/288050d2-25b0-4c04-a959-2fc6f4011208.json?api-version=v2",
        "code": 200
    },
    "body": null
}
```
