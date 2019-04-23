---
title: List all groups
date: 2019-04-23 14:00:00 Z
layout: api
category: api,groups,read-index
slug: groups-read-index
permalink: /api/groups/read-index
---

To fetch a list of all the groups the current user making the request has access to, you can make 
a `GET` request to `/groups.json`

```
GET /groups.json?api-version=v2
```
### Parameters

The endpoint takes the following parameters:

<table class="table-parameters">
<thead>
  <tr>
   <th>Param
   </th>
   <th>Description
   </th>
   <th>Required
   </th>
   <th>Type
   </th>
  </tr>
</thead>
<tbody>
  <tr>
   <td>api-version
   </td>
   <td>The API version to target
   </td>
   <td>No
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td>filter
   </td>
   <td>Filters the result
   </td>
   <td>No
   </td>
   <td>Array
   </td>
  </tr>
  <tr>
   <td>filter[has-users]
   </td>
   <td>List all the groups that contain a specific user.
   </td>
   <td>No
   </td>
   <td>Array of user UUID
   </td>
  </tr>
  <tr>
   <td>filter[has-manager]
   </td>
   <td>List all the groups that contain a specific user as their group manager.
   </td>
   <td>No
   </td>
   <td>Array of user UUID
   </td>
  </tr>
  <tr>
   <td>contain[modifier]
   </td>
   <td>Passing 1 will include the info of the user that last modified the group
   </td>
   <td>No
   </td>
   <td>Boolean
   </td>
  </tr>
  <tr>
     <td>contain[user]
     </td>
     <td>Passing 1 will include the info of the users belonging to the group
     </td>
     <td>No
     </td>
     <td>Boolean
     </td>
  </tr>
  <tr>
   <td>contain[group_user]
   </td>
   <td>Passing 1 will include the info of the relationship of the users with the group.
    Usefull to know if they are admin or not for example.
   </td>
   <td>No
   </td>
   <td>Boolean
   </td>
  </tr>
  <tr>
   <td>order[Group.name]
   </td>
   <td>Sort by group name
   </td>
   <td>No
   </td>
   <td>ASC|DESC
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
Request went through. The response payload will contain a list of matching users.
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>
The user making the request is not authenticated.
   </td>
  </tr>
  </tbody>
</table>

## Examples
### Request with filters

So a request to fetch list of groups and to 

*   include **Users**
*   Sort ASCending by group name
*   Using api-version v2

will look like this:

```
GET /groups.json?api-version=v2
  &contain[user]=1
  &order[]=Group.name+ASC
  
```

### Response success
A successful response will have an array of json objects. Each representing a single group. 
Something like this example below:

```json
{
    "header": {
        "id": "f5f4aceb-6919-4b7d-8b33-2c22f463192d",
        "status": "success",
        "servertime": 1554983137,
        "title": "app_groups_index_success",
        "action": "3cffe6ef-ea4c-5bc3-869b-945f26e2601a",
        "message": "The operation was successful.",
        "url": "\/groups.json?contain%5Buser%5D=1\u0026order%5B%5D=Group.name+ASC\u0026api-version=v2",
        "code": 200
    },
    "body": [
        {
            "id": "b7cbce9f-6a20-545b-b20a-fcf4092307df",
            "name": "Resource planning",
            "deleted": false,
            "created": "2016-01-29T13:39:25+00:00",
            "modified": "2016-01-29T13:39:25+00:00",
            "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
            "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
            "users": [
                {
                    "id": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                    "role_id": "0d51c3a8-5e67-5e3d-882f-e1868966d817",
                    "username": "admin@passbolt.com",
                    "active": true,
                    "deleted": false,
                    "created": "2019-04-04T12:05:44+00:00",
                    "modified": "2019-04-04T12:05:44+00:00",
                    "_joinData": {
                        "id": "d100fc5d-6685-50aa-897b-87ac816e28c8",
                        "group_id": "b7cbce9f-6a20-545b-b20a-fcf4092307df",
                        "user_id": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                        "is_admin": true,
                        "created": "2019-04-04T12:05:52+00:00"
                    },
                    "last_logged_in": ""
                }
            ]
        }
    ]
}
```

