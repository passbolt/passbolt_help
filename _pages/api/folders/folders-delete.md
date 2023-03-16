---
title: Delete a folder
date: 2021-04-29 14:00:00 Z
layout: api
category: api,folders,delete
slug: folders-delete
permalink: /api/folders/delete
---

A Folder can only be deleted if the current user has the owner permission on the folder.
A Folder can be deleted by sending a `DELETE` request to `/folders/<folderUuid>.json`

```
DELETE /folders/<folderUuid>.json
```

When doing a cascade delete, if the user does not have permission to delete one or more children, they
will be ignored and send back at the root.

### Request 

The request can contain optionally:

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
        <td>cascade</td>
        <td>If contained elements should also be deleted</td>
        <td>False</td>
        <td>Boolean (default false)</td>
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
   <td>OK<br/>Folder deleted successfully.</td>
  </tr>
  <tr>
   <td>400</td>
   <td>Bad Request<br/>The folderId supplied is not a valid UUID</td>
  </tr>
  <tr>
   <td>403</td>
   <td>Authentication Failure<br/>The user making the request is not authenticated</td>
  </tr>
  <tr>
   <td>404</td>
   <td>Not Found<br/>The folder either does not exist or the user making the request does not have delete permission.</td>
  </tr>
</tbody>
</table>

## Examples
### Successful request
And a valid request body will look like:

```
DELETE /folders/b6cfc5e5-138d-467a-a615-a852f1c747ae.json?cascade=1
```

### Success  response
```json
{
    "header": {
        "id": "90b88f52-47ef-43a2-b245-32f01ab497da",
        "status": "success",
        "servertime": 1619764339,
        "action": "370391a0-e18e-53ee-b8af-f8583d9a61b5",
        "message": "The folder has been deleted successfully.",
        "url": "\/folders\/b6cfc5e5-138d-467a-a615-a852f1c747ae.json?cascade=1",
        "code": 200
    },
    "body": null
}
```
