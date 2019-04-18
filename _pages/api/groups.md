---
title: Groups
layout: api
category: api
slug: groups
permalink: /api/groups/index.html
---

Groups are logical collection of users. Think of them like departments in an organization. They are useful when you want to share/unshare a resource with multiple users at once.

## The Group object

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
                Unique ID of the group in UUID format.
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
                Datetime when the group was created
            </td>
            <td>
                <a 
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                            8601</a>Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                created_by
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the user who created the group
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                deleted
            </td>
            <td>
                Boolean
            </td>
            <td>
                Whether the group has been deleted
            </td>
            <td>
                true/false
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
                Datetime when the group was last modified
            </td>
            <td>
                <a
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
                            8601</a>&nbsp;Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                modified_by
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the user who last modified the group
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                name
            </td>
            <td>
                String
            </td>
            <td>
                Group Name
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>

## List all groups

To fetch a list of all the groups the current user making the request has access to, you can make a **GET** request to **/groups.json**


### Example Request:

So a request to fetch list of groups and to 



*   include **Users**
*   Sort ASCending by group name
*   Using api-version v2

will look like this:

```
https://api.passbolt.com/groups.json?
  contain[user]=1&
  order[]=Group.name+ASC&
  api-version=v2
```

A successful response will have an array of json objects. Each representing a single group. Something like this example below

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
        },
    ]
}
```


### Possible Responses:


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
   Request went through. The response payload will contain a list of matching groups.
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



## Creating a new Group

Please note that only users with Admin role can create a group. To create a new group, make a POST request to /groups.json with the user data in request body. The request body expects the following parameters


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


A successful request must pass all the validation checks. For example sending a blank request body will return


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


will still result in error



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


And a valid request body will look like

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


### Possible Responses:


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
   Some of the data validation failed. Check debug headers for more info
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



## Find a Group by ID

Returns a single group identified by the unique UUID. To query a single group make a GET request to /groups/<groupId>.json

```
GET /groups/<groupId>.json
```

### Possible Responses:


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
   Response includes the group object.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   The groupId supplied is not a valid UUID
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>
   The user making the request does not have the Admin role.
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found<br/>
   The group either does not exist or the user making the request does not have access permission.
   </td>
  </tr>
  </tbody>
</table>



## Update a Group

A Group can be updated by sending the PUT request to /groups/<groupId>.json.

The request body contains the new data to be updated. The request body schema is same as that of [creating a new Group](#creating-a-new-group).

When you update a group which has passwords shared with you also need to provide secrets for the new users. The dry-run gives information about this.

### Dry Run

A dry run can also be performed before actually attempting to update a group. This works by sending a PUT request to /groups/<groupId>/dry-run.json. This will check all the constraints and return a 200 OK response if the group can be updated safely.

```
PUT /groups/<groupId>/dry-run.json
```


### Possible Responses

Same as [creating a new Group](#possible-responses-1)


## Delete a Group

A Group can be deleted subject to relevant permissions by sending a DELETE request to /groups/<groupId>.json

```
DELETE /groups/<groupId>.json
```

### Group Deletion Constraints:

A Group CAN NOT be deleted as long as It’s the **sole owner** of a shared resource.


### Dry Run

A dry run can also be performed before actually attempting to delete a group. This works by sending a DELETE request to /groups/<groupId>/dry-run.json. This will check all the constraints and return a 200 OK response if the group can be deleted safely.


### Possible Responses:


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
   Group deleted successfully.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   The groupId supplied is not a valid UUID
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>
   The user making the request does not have the Admin role.
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found<br/>
   The group either does not exist or the user making the request does not have delete permission.
   </td>
  </tr>
  </tbody>
</table>


