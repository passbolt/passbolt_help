---
title: Users Create
date: 2019-04-23 14:00:00 Z
layout: api
category: api,users,create
slug: users-create
permalink: /api/users/create
---

Only users with Admin role can create other users.
To create a new User, make a `POST` request to `/users.json?api-version=v2` with the user data in 
request body.

```
POST /users.json?api-version=v2
```

### Request data
The request body expects the following request data

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
        <td>username
        </td>
        <td>Username for this login. This is also their email address
        </td>
        <td>Yes
        </td>
        <td>
            <ol>
                <li>Valid utf8 string</li>
                <li>Valid email address</li>
                <li>Must be unique</li>
                <li>Must not exceed 255 characters</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td>role_id
        </td>
        <td>ID of the role to be assigned to this user.
        </td>
        <td>No
        </td>
        <td>
          <ol>
            <li>Valid UUID</li>
            <li>Must exist in the database.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td>profile
        </td>
        <td>Profile data for the new user
        </td>
        <td>Yes
        </td>
        <td>
        </td>
    </tr>
    <tr>
        <td>profile.first_name
        </td>
        <td>First name for the new user
        </td>
        <td>Yes
        </td>
        <td>
          <ol>
            <li>Valid utf8 string</li>
            <li>Must not exceed 255 characters</li>
          </ol>
        </td>
    </tr>
    <tr>
        <td>profile.last_name
        </td>
        <td>Last name for the new user
        </td>
        <td>Yes
        </td>
        <td>
          <ol>
            <li>Valid utf8 string</li>
            <li>Must not exceed 255 characters</li>
          </ol>
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
The User was created. The response body will contain the newly created user object
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
The user making the request is not authenticated
   </td>
  </tr>
</tbody>
</table>

## Examples
### Successful request
And a valid request body will look like:

```
POST /users.json?api-version=v2
```
```json
{
  "username": "user@domain.com",
  "profile": {
    "first_name": "John",
    "last_name": "Doe"
  },
  "role_id": "<uuid_of_the_role_object>"
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
        "title": "app_users_addPost_error",
        "action": "a1a15b91-72f6-5708-8d7f-6940e51d8595",
        "message": "Could not validate user data.",
        "url": "\/users.json?api-version=v2",
        "code": 400
    },
    "body": {
        "username": {
            "_required": "A username is required."
        },
        "profile": {
            "_required": "This field is required"
        }
    }
}
```
