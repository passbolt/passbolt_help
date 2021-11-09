---
title: Folders Share
date: 2021-04-29 14:00:00 Z
layout: api
pro: true
category: api,folders,share
slug: folders-update
permalink: /api/folders/share
---

To update a Folder permissions, e.g. share a folder, you can make a request with the updated folder permission in 
request body. The current user must have the "owner" permission on the folder. There must always at least be one 
owner of the folder, e.g. if the current user give up this right they must appoint another owner.

```
PUT /share/folder/<folderId>.json
```

Permissions in passbolt use some Access Control List (ACL) lingo. Mostly two concepts:
- Access Control Object (ACO) that represents something that is wanted, like a folder, or a resource.
- Access Request Object (ARO) represents something that wants an ACO, so a user or a group.

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
        <td>permissions</td>
        <td>The permissions to update</td>
        <td>Yes</td>
        <td>Array of permission. See permissions endpoints for more info.</td>
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
   <td>OK<br/>The Folder permission where updated. The response body will contain the newly updated user object</td>
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

When sharing you only need to send the permissions that have changed. When you want to delete a permission
you can set the `delete` option to `true`. So when you are deleting a user and adding a group a valid request 
body will look like:

```
POST /share/folder/c2613ff5-a5bd-47e6-b748-386fc84e9b30.json
```
```json
{
  "permissions": [
    {
      "id": "1e8501b0-800f-4d2b-810f-38977743cafa",
      "delete": true,
      "aco": "Folder",
      "aro": "User",
      "aco_foreign_key": "c2613ff5-a5bd-47e6-b748-386fc84e9b30",
      "aro_foreign_key": "e97b14ba-8957-57c9-a357-f78a6e1e1a46",
      "type": 1
    },
    {
      "aco": "Folder",
      "aro": "Group",
      "aco_foreign_key": "c2613ff5-a5bd-47e6-b748-386fc84e9b30",
      "aro_foreign_key": "1ebc0060-9274-5451-aa12-ad0f31bc29dd",
      "type": 1
    }
  ]
}
```

### Success  response

A response to a valid request will look like this:

```json
{
    "header": {
        "id": "8a91b9bd-da00-4f95-905d-1ea706413a39",
        "status": "success",
        "servertime": 1619794170,
        "action": "d161a38f-c522-5984-85ff-17c78b2a3bb5",
        "message": "The folder `test` has been updated successfully.",
        "url": "\/share\/folder\/c2613ff5-a5bd-47e6-b748-386fc84e9b30.json?api-version=v2",
        "code": 200
    },
    "body": {
        "id": "c2613ff5-a5bd-47e6-b748-386fc84e9b30",
        "name": "test",
        "created": "2021-04-30T14:48:54+00:00",
        "modified": "2021-04-30T14:48:54+00:00",
        "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
        "modified_by": "f848277c-5398-58f8-a82a-72397af2d450",
        "folder_parent_id": null,
        "personal": false
    }
}
```
