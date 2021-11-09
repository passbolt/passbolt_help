---
title: Folders Create
date: 2021-04-29 14:00:00 Z
layout: api
pro: true
category: api,folders,create
slug: folders-create
permalink: /api/folders/create
---

To create a new Folder, make a `POST` request to `/folders.json` with the folder data in 
request body.

```
POST /folders.json
```

### Request data
The request body expects the following request data

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
        <td>folder_parent_id</td>
        <td>Folder parent id</td>
        <td>Yes</td>
        <td><ol>
            <li>Valid UUID</li>
            <li>Folder exists</li>
        </ol></td>
    </tr>
    <tr>
        <td>name</td>
        <td>The name of the new folder</td>
        <td>Yes</td>
        <td><ol>
            <li>Valid UTF8 string</li>
            <li>Not empty</li>
            <li>Maximum 64 chars</li>
        </ol></td>
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
   <td>OK<br/>The Folder was created. The response body will contain the newly created folder object</td>
  </tr>
  <tr>
   <td>400</td>
   <td>Bad Request<br/>Some of the data validation failed.</td>
  </tr>
  <tr>
   <td>403</td>
   <td>Authentication Failure<br/>The folder making the request is not authenticated</td>
  </tr>
</tbody>
</table>

## Examples
### Successful request

A valid request body, to create a folder at the root, will look like:

```
POST /folders.json?contain[permission]=1
```
```json
{
  "folder_parent_id":null,
  "name":"New folder"
}
```

### Success  response
```json
{
    "header": {
        "id": "88124489-f8e6-44f7-b985-87c5b26c9b4c",
        "status": "success",
        "servertime": 1619761096,
        "action": "02e18a01-42f6-5e5d-b18f-2ee9070e3b9d",
        "message": "The folder `New folder` has been added successfully.",
        "url": "\/folders.json?contain%5Bpermission%5D=1",
        "code": 200
    },
    "body": {
        "id": "b6cfc5e5-138d-467a-a615-a852f1c747ae",
        "name": "New folder",
        "created": "2021-04-30T05:38:16+00:00",
        "modified": "2021-04-30T05:38:16+00:00",
        "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
        "modified_by": "f848277c-5398-58f8-a82a-72397af2d450",
        "permission": {
            "id": "66269af3-ddf1-4778-88ad-cc44573a097b",
            "aco": "Folder",
            "aco_foreign_key": "b6cfc5e5-138d-467a-a615-a852f1c747ae",
            "aro": "User",
            "aro_foreign_key": "f848277c-5398-58f8-a82a-72397af2d450",
            "type": 15,
            "created": "2021-04-30T05:38:16+00:00",
            "modified": "2021-04-30T05:38:16+00:00"
        },
        "folder_parent_id": null,
        "personal": true
    }
}
```

### Validation error response

A successful request must pass all the validation checks. 
For example sending a blank request body will return:

```json
{
    "header": {
        "id": "a91e1c30-568f-4889-8eec-dd78c0a00543",
        "status": "error",
        "servertime": 1554981597,
        "action": "a1a15b91-72f6-5708-8d7f-6940e51d8595",
        "message": "Could not validate folder data.",
        "url": "\/folders.json",
        "code": 400
    },
    "body": {
        "name": {
            "_required": "A name is required"
        }
    }
}
```
