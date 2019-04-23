---
title: Users Index
date: 2019-04-23 14:00:00 Z
layout: api
category: api,users,read-index
slug: users-read-index
permalink: /api/users/read-index
---

## List all users

To fetch a list of all the users use the request:

```
GET /users.json?api-version=v2
```

### Request Parameters:

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
   <td>filter[search]
   </td>
   <td>Does a wildcard text search. Will find users where either of the Username, First Name or Last Name contains the search term
   </td>
   <td>No
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td>filter[has-groups]
   </td>
   <td>UUID of the group to filter users by. Will include users that belong to the given group only.
   </td>
   <td>No
   </td>
   <td>UUID
   </td>
  </tr>
  <tr>
   <td>filter[has-access]
   </td>
   <td>UUID of a Resource. Will only includes users that have access to the given Resource
   </td>
   <td>No
   </td>
   <td>UUID
   </td>
  </tr>
  <tr>
   <td>filter[is-admin]
   </td>
   <td>Passing 1 will return only Admin users
   </td>
   <td>No
   </td>
   <td>Boolean(1/0)
   </td>
  </tr>
  <tr>
   <td>contain
   </td>
   <td>Dictates the fields to be included in the fetchsearch result
   </td>
   <td>No
   </td>
   <td>Array
   </td>
  </tr>
  <tr>
   <td>contain[LastLoggedIn]
   </td>
   <td>Passing 1 will include user’s last log in timestamp
   </td>
   <td>No
   </td>
   <td>Boolean
   </td>
  </tr>
  <tr>
   <td>order
   </td>
   <td>Sorts the result based on the param passed. The sorting order can also be specified as “ASC|DESC”. So “order[User.username] DESC” will sort the result by User’s username in descending order.
   </td>
   <td>No 
   </td>
   <td>Array
   </td>
  </tr>
  <tr>
   <td>order[User.username]
   </td>
   <td>Sort by Username
   </td>
   <td>No
   </td>
   <td>ASC|DESC
   </td>
  </tr>
  <tr>
   <td>order[User.created]
   </td>
   <td>Sort by when the user were first created
   </td>
   <td>No
   </td>
   <td>ASC|DESC
   </td>
  </tr>
  <tr>
   <td>order[User.modified]
   </td>
   <td>Sort by when the users were last modified
   </td>
   <td>No
   </td>
   <td>ASC|DESC
   </td>
  </tr>
  <tr>
   <td>order[Profile.first_name]
   </td>
   <td>Sorts by users’ first name
   </td>
   <td>No
   </td>
   <td>ASC|DESC
   </td>
  </tr>
  <tr>
   <td>order[Profile.last_name]
   </td>
   <td>Sorts by users’ last name
   </td>
   <td>No
   </td>
   <td>ASC|DESC
   </td>
  </tr>
  <tr>
   <td>order[Profile.created]
   </td>
   <td>Sorts by when the users’ profile were first created.
   </td>
   <td>No
   </td>
   <td>ASC|DESC
   </td>
  </tr>
  <tr>
   <td>order[Profile.modified]
   </td>
   <td>Sort by when the users’ profile were last modified
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

### Examples
### Request with filters
So a request to fetch list of resources and to 
*   include LastLoggedIn
*   Sort ASCending by Profile.first_name
*   Using api-version v2

will look like this:

```bash
https://api.passbolt.com/users.json?
  contain[LastLoggedIn]=1&
  order[]=Profile.first_name ASC&
  api-version=v2
```

### Success response
A successful response will have an array of json objects. Each representing a single user. Something like this example below

```json
{
    "header": {
        "id": "9f78d01c-f2df-453c-b1d4-aa600547ae93",
        "status": "success",
        "servertime": 1554976847,
        "title": "app_users_index_success",
        "action": "d7bc9044-a64e-5421-a4d7-7a94eaa39d37",
        "message": "The operation was successful.",
        "url": "\/users.json?api-version=v2",
        "code": 200
    },
    "body": [
        {
            "id": "640ebc06-5ec1-5322-a1ae-6120ed2f3a74",
            "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
            "username": "carol@passbolt.com",
            "active": true,
            "deleted": false,
            "created": "2019-04-02T12:05:44+00:00",
            "modified": "2019-04-03T12:05:44+00:00",
            "profile": {
                "id": "48bcd9ac-a520-53e0-b3a4-9da7e57b91aa",
                "user_id": "640ebc06-5ec1-5322-a1ae-6120ed2f3a74",
                "first_name": "Carol",
                "last_name": "Shaw",
                "created": "2019-04-04T12:05:45+00:00",
                "modified": "2019-04-04T12:05:45+00:00",
                "avatar": {
                    "id": "31134496-e2af-4f1e-adc0-7d03523d8eef",
                    "user_id": "640ebc06-5ec1-5322-a1ae-6120ed2f3a74",
                    "foreign_key": "48bcd9ac-a520-53e0-b3a4-9da7e57b91aa",
                    "model": "Avatar",
                    "filename": "carol.png",
                    "filesize": 733439,
                    "mime_type": "image\/png",
                    "extension": "png",
                    "hash": "7445a736df60a1ac1bfdab8fc5b842a95c495aec",
                    "path": "Avatar\/31134496e2af4f1eadc07d03523d8eef.png",
                    "adapter": "Local",
                    "created": "2019-04-04T12:05:47+00:00",
                    "modified": "2019-04-04T12:05:47+00:00",
                    "url": {
                        "medium": "img\/public\/Avatar\/31134496e2af4f1eadc07d03523d8eef.a99472d5.png",
                        "small": "img\/public\/Avatar\/31134496e2af4f1eadc07d03523d8eef.65a0ba70.png"
                    }
                }
            },
            "groups_users": [],
            "role": {
                "id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                "name": "user",
                "description": "Logged in user",
                "created": "2012-07-04T13:39:25+00:00",
                "modified": "2012-07-04T13:39:25+00:00"
            },
            "gpgkey": {
                "id": "1d3d0565-f075-50d4-b58a-cbb82700e79b",
                "user_id": "640ebc06-5ec1-5322-a1ae-6120ed2f3a74",
                "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----",
                "bits": 4096,
                "uid": "Carol Shaw \u003Ccarol@passbolt.com\u003E",
                "key_id": "82945D3E",
                "fingerprint": "57DE7D79ABE733A235EB1F84CDF8FC8682945D3E",
                "type": "RSA",
                "expires": "2019-07-02T11:25:12+00:00",
                "key_created": "2015-07-02T11:25:12+00:00",
                "deleted": false,
                "created": "2019-04-04T12:05:48+00:00",
                "modified": "2019-04-04T12:05:48+00:00"
            },
            "last_logged_in": ""
        }
    ]
}
```
