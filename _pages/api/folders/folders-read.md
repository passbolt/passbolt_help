---
title: Browse all Folders
date: 2021-04-29 14:00:00 Z
layout: api
category: api,folders,read
slug: folders-read
permalink: /api/folders/read
---

To fetch a given folder the user has access to, one need to make the following request:
```
GET /folders/<foldersUuid>.json
```

### Request Parameters

The endpoint takes the following parameters

<table class="table-parameters">
    <thead>
        <tr>
            <th>Param</th>
            <th>Description</th>
            <th>Required</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>contain[children_resources]</td>
            <td>Whether or not to include the resources included in the folder (direct children only)</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[children_folders]</td>
            <td>Whether or not to include the folders included in the folder (direct children only)</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[creator]</td>
            <td>Whether or not to include the folder creator user record</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[creator.profile]</td>
            <td>Whether or not to include the folder creator profile</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[modifier]</td>
            <td>Whether or not to include the modifier user record</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[modifier.profile]</td>
            <td>Whether or not to include the modifier profile </td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permission]</td>
            <td>Whether or not to include the permission for the current user for this folder</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permissions]</td>
            <td>Whether or not to include the all the permissions for this folder</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permissions.user.profile]</td>
            <td>Whether or not to include the user profile associated with the permissions</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permissions.group]</td>
            <td>Whether or not to include the group details with the permissions</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
    </tbody>
</table>

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
            Request went through. The response payload will contain a list of folders.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>
                Bad Request<br/>
                If one parameter or more are invalid.
            </td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated.</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not found<br/> 
            The folder does not exist</td>
        </tr>
    </tbody>
</table>


## Examples
### Filtered request

Here is an example of request, to also fetch the children resources and folders and display the current
user permission:

```
GET /folders/9e03fd73-04c0-5514-95fa-1a6cf2c7c093.json
    ?contain[children_folders]=1
    &contain[children_resources]=1
    &contain[permission]=1
```

### Success response

A successful response will return a object representing the folder and the associated data.
It will look something like this, the previously mentioned request:

```
{
    "header": {
        "id": "bf15a987-2588-4b6f-8d7f-6e1f695fc09e",
        "status": "success",
        "servertime": 1619795346,
        "action": "ab13b3e0-eae8-5099-909f-8582a3c2ddae",
        "message": "The operation was successful.",
        "url": "\/folders\/9e03fd73-04c0-5514-95fa-1a6cf2c7c093.json?contain%5Bchildren_folders%5D=1\u0026contain%5Bchildren_resources%5D=1\u0026contain%5Bpermission%5D=1",
        "code": 200
    },
    "body": {
        "id": "9e03fd73-04c0-5514-95fa-1a6cf2c7c093",
        "name": "Accounting",
        "created": "2020-02-01T00:00:00+00:00",
        "modified": "2020-02-01T00:00:00+00:00",
        "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
        "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
        "children_resources": [],
        "children_folders": [
            {
                "id": "6592f71b-8874-5e91-bf6d-829b8ad188f5",
                "name": "Bank",
                "created": "2020-02-01T00:00:00+00:00",
                "modified": "2020-02-01T00:00:00+00:00",
                "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                "folder_parent_id": "9e03fd73-04c0-5514-95fa-1a6cf2c7c093",
                "personal": false
            },
            {
                "id": "1ccd70c8-14dc-59ec-9c06-60ce613c6f1d",
                "name": "VAT",
                "created": "2020-02-01T00:00:00+00:00",
                "modified": "2020-02-01T00:00:00+00:00",
                "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                "folder_parent_id": "9e03fd73-04c0-5514-95fa-1a6cf2c7c093",
                "personal": false
            },
            {
                "id": "a5f0d94d-0fa3-5d82-9800-dda68820ec7c",
                "name": "Credit Cards",
                "created": "2020-02-01T00:00:00+00:00",
                "modified": "2020-02-01T00:00:00+00:00",
                "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                "folder_parent_id": "9e03fd73-04c0-5514-95fa-1a6cf2c7c093",
                "personal": false
            }
        ],
        "permission": {
            "id": "6aada140-fe8b-5e69-a90f-ae0cec6d3dcf",
            "aco": "Folder",
            "aco_foreign_key": "9e03fd73-04c0-5514-95fa-1a6cf2c7c093",
            "aro": "User",
            "aro_foreign_key": "f848277c-5398-58f8-a82a-72397af2d450",
            "type": 1,
            "created": "2021-04-30T05:36:58+00:00",
            "modified": "2021-04-30T05:36:58+00:00"
        },
        "folder_parent_id": null,
        "personal": false
    }
}
```