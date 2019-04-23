---
title: Create a group
date: 2019-04-23 14:00:00 Z
layout: api
category: api,groups,create
slug: groups-create
permalink: /api/groups/create
---

Please note that only users with Admin role can create a group. 
To create a new group, make a `POST` request to `/groups.json` with the user data in request body. 

```
POST /groups.json?api-version=v2
```
```json
{
  "name": "newgroup",
  "groups_users": [{
    "user_id": "<uuid_of_the_user_to_add>",
    "is_admin": true
  }, {
    "user_id": "<user2_uuid>",
    "is_admin": false
  }]
}
```

### Parameters
The request body expects the following parameters

<table class="table-parameters">
<thead>
  <tr>
   <th>Parameter
   </th>
   <th>Description
   </th>
   <th>Required
   </th>
   <th>Validation Constraints
   </th>
  </tr>
</thead>
<tbody>
  <tr>
   <td>name
   </td>
   <td>Name for the new group
   </td>
   <td>Yes
   </td>
   <td>
   <ol>
    <li>Valid utf8 string</li>
    <li>Must be unique</li>
    <li>Must not exceed 255 characters</li>
   </ol>
   </td>
  </tr>
  <tr>
   <td>groups_users
   </td>
   <td>An array of GroupsUser objects.
   </td>
   <td>Yes
   </td>
   <td>1. At least one user must be provided
   </td>
  </tr>
  <tr>
   <td>groups_users[0].user_id
   </td>
   <td>User id of the user to be added to the new group
   </td>
   <td>Yes
   </td>
   <td>
    <ol>
        <li>A valid UUID</li>
        <li>A valid user id</li>
    </ol>
   </td>
  </tr>
  <tr>
   <td>groups_users[0].is_admin
   </td>
   <td>Passing “true” will make this user group admin
   </td>
   <td>Yes
   </td>
   <td>Boolean
   </td>
  </tr>
  </tbody>
</table>

### Possible responses

<table class="table-parameters">
<thead>
  <tr>
   <th>Code
   </th>
   <th>Description
   </th>
  </tr>
</thead>
<tbody>
  <tr>
   <td>200
   </td>
   <td>OK<br/>
   The Group was created. The response body will contain the newly created group object
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   Some of the data validation failed.
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>
   The user making the request does not have the Admin role.
   </td>
  </tr>
  </tbody>
</table>


## Examples

### Validation errors

A successful request must pass all the validation checks. For example sending a blank request
body will return:

```json
{
    "header": {
        "id": "30777f73-5b4d-402b-9855-36331611b4bd",
        "status": "error",
        "servertime": 1554983343,
        "title": "app_groups_addPost_error",
        "action": "5bd4ecae-da08-577d-ac32-ce7b13bd7b0f",
        "message": "Could not validate group data.",
        "url": "\/groups.json?api-version=v2",
        "code": 400
    },
    "body": {
        "name": {
            "_required": "A name is required."
        }
    }
}
```

Similarly sending only a name 

```json
{
  "name": "New Group"
}
```

will still result in error:

```json
{
    "header": {
        "id": "df12a670-b921-4db5-994f-22a84c36246a",
        "status": "error",
        "servertime": 1554983413,
        "title": "app_groups_addPost_error",
        "action": "5bd4ecae-da08-577d-ac32-ce7b13bd7b0f",
        "message": "Could not validate group data.",
        "url": "\/groups.json?api-version=v2",
        "code": 400
    },
    "body": {
        "groups_users": {
            "at_least_one_admin": "A group manager must be provided."
        }
    }
}
```



