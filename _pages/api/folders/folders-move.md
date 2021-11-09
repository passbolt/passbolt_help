---
title: Folders Move
date: 2021-04-29 14:00:00 Z
layout: api
pro: true
category: api,folders,move
slug: folders-move
permalink: /api/folders/move
---

To move a Folder, e.g. change the `folder_parent_id`, you can make a `PUT` request to `/move/folder/<folderUuid>.json`
with the folder parent id in the body. 

If you want to change the `folder_parent_id`, you need to use the "move" endpoint (as it
can affect multiple folder relations, for other users).

Similarly If you want to change the folder permission, you need to use the "share" endpoint.

```
PUT /move/folder/<folderId>.json
```

A similar endpoint exists to move a resource:
```
PUT /move/resource/<resourceId>.json
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
        <td>The new parent folder</td>
        <td>Yes</td>
        <td><ol>
            <li>Valid UUID</li>
            <li>Not empty</li>
            <li>Folder exists</li>
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
   <td>OK<br/>The Folder was moved.</td>
  </tr>
  <tr>
   <td>400</td>
   <td>Bad Request<br/>Some of the data validation failed.</td>
  </tr>
  <tr>
   <td>403</td>
   <td>Authentication Failure<br/>The user making the request is not authenticated</td>
  </tr>
  <tr>
   <td>404</td>
   <td>Not found<br/>The resource does not exist or has been deleted.</td>
  </tr>
</tbody>
</table>

## Examples
### Successful request

And a valid request body will look like:

```
POST /move/folder/d4ed8049-7aaa-43e3-88dd-113f6a73dbb8.json
```
```json
{
  "folder_parent_id":"8ddbf87e-b66d-4ebd-a026-47d0f4120db9"
}
```

### Success  response

A response to a valid request will look like this:

```json
{
     "header": {
         "id": "f943858c-a395-4f38-8d95-3bfff68d7f5e",
         "status": "success",
         "servertime": 1619793763,
         "action": "d91341f2-9672-5f4d-b7f5-d82020faa47e",
         "message": "The folder has been moved successfully.",
         "url": "\/move\/folder\/d4ed8049-7aaa-43e3-88dd-113f6a73dbb8.json",
         "code": 200
     },
     "body": null
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
        "url": "\/move\/folder\/d4ed8049-7aaa-43e3-88dd-113f6a73dbb8.json",
        "code": 400
    },
    "body": {
        "folder_parent_id": {
            "folder_exists": "The folder parent does not exist."
        }
    }
}
```
