---
title: Folders Update
date: 2021-04-29 14:00:00 Z
layout: api
pro: true
category: api,folders,update
slug: folders-update
permalink: /api/folders/update
---

To update a Folder name, e.g. rename a folder, you can make a `PUT` request to `/folders/<folderUuid>.json` with 
the folder data in request body. The current user must have the "update" or "owner" permission on the folder.

If you want to change the `folder_parent_id`, you need to use the "move" endpoint (as it
can affect multiple folder relations, for other users).

Similarly If you want to change the folder permission, you need to use the "share" endpoint.

```
PUT /folders/<folderId>.json
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
   <td>OK<br/>The Folder was updated. The response body will contain the newly updated folder object</td>
  </tr>
  <tr>
   <td>400</td>
   <td>Bad Request<br/>Some of the data validation failed.</td>
  </tr>
  <tr>
   <td>403</td>
   <td>Authentication Failure<br/>The user making the request is not authenticated</td>
  </tr>
</tbody>
</table>

## Examples
### Successful request

And a valid request body will look like:

```
POST /folders.json?contain[permission]=1
```
```json
{
  "name":"Updated folder"
}
```

### Success  response

A response to a valid request will look like this:

```json
{
    "header": {
        "id": "77c745af-e819-4a80-95c3-0c7f37c5529f",
        "status": "success",
        "servertime": 1619761990,
        "action": "8e8f6597-4bc4-5078-bc1e-a89cac44ed7c",
        "message": "The folder `Updated folder` has been updated successfully.",
        "url": "\/folders\/b6cfc5e5-138d-467a-a615-a852f1c747ae.json?api-version=v2\u0026contain%5Bpermission%5D=1",
        "code": 200
    },
    "body": {
        "id": "b6cfc5e5-138d-467a-a615-a852f1c747ae",
        "name": "Updated folder",
        "created": "2021-04-30T05:38:16+00:00",
        "modified": "2021-04-30T05:53:10+00:00",
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
        "url": "\/folders\/b6cfc5e5-138d-467a-a615-a852f1c747ae.json?",
        "code": 400
    },
    "body": {
        "name": {
            "_required": "A name is required"
        }
    }
}
```
