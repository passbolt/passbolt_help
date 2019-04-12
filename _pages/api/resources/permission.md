---
title: Permission
layout: api
category: api
slug: permissions
permalink: /api/resources/permissions/index.html
---

Permission endpoints are used to manage permissions on a Resource.

## The Permission object

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
                Unique ID of the permission object in UUID format.
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                aco
            </td>
            <td>
                String
            </td>
            <td>
                The ACO for this permisison. Always "Resource"
            </td>
            <td>
                String
            </td>
        </tr>
        <tr>
            <td>
                aco_foreign_key
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the Resource for this permission
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                aro
            </td>
            <td>
                String
            </td>
            <td>
                The ARO for this permisison. Can be "User" or "Group"
            </td>
            <td>
                String
            </td>
        </tr>
        <tr>
            <td>
                aro_foreign_key
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the User/Group for this permission
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                type
            </td>
            <td>
                Number
            </td>
            <td>
                Permission type<br/>
                <ul>
                    <li>1 = Read</li>
                    <li>7 = Update</li>
                    <li>15 = Owner</li>
                </ul>
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

## Get permissions on a Resource

To get a list of permissions applied on a Resource, you can make a GET request to /permissions/resource/{resourceId}.json

```
GET /permissions/resource/{resourceId}.json
```

Upon success this will return a json response like below

```json
{
    "header": {
        "id": "b41a75a3-4139-44fb-87b8-beea815dc650",
        "status": "success",
        "servertime": 1555068081,
        "title": "app_permissions_viewAcoPermissions_success",
        "action": "1df624ae-eea2-5055-a202-d1068feefe04",
        "message": "The operation was successful.",
        "url": "\/permissions\/resource\/4d7adb92-0d85-56d7-8b92-e2b919ef8eb8.json?api-version=v2",
        "code": 200
    },
    "body": [
        {
            "id": "0718ec88-a867-57b8-ad9f-671237554469",
            "aco": "Resource",
            "aco_foreign_key": "4d7adb92-0d85-56d7-8b92-e2b919ef8eb8",
            "aro": "User",
            "aro_foreign_key": "f848277c-5398-58f8-a82a-72397af2d450",
            "type": 1,
            "created": "2019-04-04T12:06:01+00:00",
            "modified": "2019-04-04T12:06:01+00:00"
        },
        {
            "id": "2208a4bb-9c47-5c07-a0ba-2d7344a3a9ae",
            "aco": "Resource",
            "aco_foreign_key": "4d7adb92-0d85-56d7-8b92-e2b919ef8eb8",
            "aro": "Group",
            "aro_foreign_key": "36563004-3f25-50c0-b22e-6554c3ccc4e7",
            "type": 7,
            "created": "2019-04-04T12:06:02+00:00",
            "modified": "2019-04-04T12:06:02+00:00"
        }
    ]
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
            Request went through. The response body contains a list of permission objects.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
                If the given resourceId is not a uuid
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
                If the resource does not exist
            </td>
        </tr>
    </tbody>
</table>

## Remove a resource from permissions

To remove a resource from your permission list, you can make a DELETE request to /permissions/{permissionId}.json.

```
DELETE /permissions/{permissionId}.json
```

Upon success this will return a json response like below

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
