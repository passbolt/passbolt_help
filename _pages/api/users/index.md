---
title: Users
layout: api
category: api
slug: users
permalink: /api/users/index.html
---

User are entities with the ability to interact with the passbolt backend with their unique username and passwords. They are usually represented by one person. The User object returned by the API hence contains the relevant associated fields like `gpgkey`, `profile`, `role` etc.

## The User object

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
                Unique ID of the user in UUID format.
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
                Datetime when the user was created
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
                active
            </td>
            <td>
                Boolean
            </td>
            <td>
                Whether the user is active
            </td>
            <td>
                true/false
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
                Whether the user has been deleted
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
                Datetime when the user was last modified
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
                username
            </td>
            <td>
                String
            </td>
            <td>
                User's username/email
            </td>
            <td>
            Email
            </td>
        </tr>
        <tr>
            <td>
                role_id
            </td>
            <td>
                String
            </td>
            <td>
                UUID of user's role
            </td>
            <td>
            UUID
            </td>
        </tr>
        <tr>
            <td>
                profile
            </td>
            <td>
                Object
            </td>
            <td>
                User's profile object
            </td>
            <td>
            Check Profile object
            </td>
        </tr>
        <tr>
            <td>
                role
            </td>
            <td>
                Object
            </td>
            <td>
                User's role object
            </td>
            <td>
            Check Role object
            </td>
        </tr>
        <tr>
            <td>
                gpgKey
            </td>
            <td>
                Object
            </td>
            <td>
                User's key object
            </td>
            <td>
            Check GPGKey object
            </td>
        </tr>
        <tr>
            <td>
                last_logged_in
            </td>
            <td>
                String
            </td>
            <td>
                Datetime of last successful login
            </td>
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                            8601</a>Datetime format<br>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
    </tbody>
</table>

## List all users

To fetch a list of all the users the current user making the request has access to, you can make a **GET** request to **/users.json**

```
GET /users.json
```


### Request Parameters:

The endpoint takes the following parameters


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

### Example Request:

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

## Creating a new User

{% include messages/notice.html
    content="**Important:** Only users with Admin role can create other users."
%}

To create a new User, make a POST request to /users.json?api-version=v2 with the user data in request body.

```
POST /users.json?api-version=v2
```

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


A successful request must pass all the validation checks. For example sending a blank request body will return

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

Similarly sending only a name 

```json
{
  "username": "user@domain.com"
}
```

will still result in error

```json
{
    "header": {
        "id": "5e29d338-7d44-4905-846a-59d5b1676d3b",
        "status": "error",
        "servertime": 1554981702,
        "title": "app_users_addPost_error",
        "action": "a1a15b91-72f6-5708-8d7f-6940e51d8595",
        "message": "Could not validate user data.",
        "url": "\/users.json?api-version=v2",
        "code": 400
    },
    "body": {
        "profile": {
            "_required": "This field is required"
        }
    }
}
```

And a valid request body will look like

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
The User was created. The response body will contain the newly created user object
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
The user making the request is not authenticated
   </td>
  </tr>
</tbody>
</table>



## Find a User by ID

Returns a single user identified by the unique UUID. To query a single user make a GET request to /users/<userId>.json

```
GET /users/<userId>.json
```

{% include messages/notice.html
    content="**Pro Tip:** Making a GET request to /users/me.json will return the currently logged in user."
%}



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

Response includes the user object.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   The userId supplied is not a valid UUID
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>
   The user making the request is not authenticated
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found<br/>
   The user either does not exist or the user making the request does not have access permission.
   </td>
  </tr>
  </tbody>
</table>



## Update a User

A User can be updated by sending the PUT request to /users/<userId>.json 

The request body contains the new data to be updated. The request body schema is same as that of [Creating a new User](#creating-a-new-user) with the exception of the email/username field which can not be updated .

A user can update itself also. First name and Last name but not the username and role. An admin can update first name last name and role. No one can update the username.


### Possible Responses

Same as [Creating a new User](#possible-responses)

## Delete a User

A User can be deleted subject to relevant permissions by sending a DELETE request to /users/<userId>.json

```
DELETE /usres/<userId>.json
```


### User Deletion Constraints:

A User CAN NOT be deleted as long as 

* It’s the **sole owner** of a shared resource.
* It’s a manager of a non empty group.


### Dry Run

A dry run can also be performed before actually attempting to delete a user. This works by sending a DELETE request to /users/<userId>/dry-run.json. This will check all the constraints and return a 200 OK response if the user can be deleted safely.

```
DELETE /users/<userId>/dry-run.json
```

For example deleting a user when she is the sole owner of a resource will return `400 Bad Request` with a response body like this

```json
{
    "header": {
        "id": "8e3347b0-9069-421d-ae07-1faf256df1e9",
        "status": "error",
        "servertime": 1555070408,
        "title": "app_users_dryrun_error",
        "action": "bec65e6e-9c29-5217-aabc-49fe2256cfce",
        "message": "The user cannot be deleted. You need to transfer the user group manager role to other users before deleting this user.You need to transfer the ownership for the shared passwords owned by this user before deleting this user.",
        "url": "\/users\/f848277c-5398-58f8-a82a-72397af2d450\/dry-run.json?api-version=v2",
        "code": 400
    },
    "body": {
        "errors": {
            "groups": {
                "sole_manager": [
                    {
                        "id": "73479f22-b387-4d4e-b625-b1cc0b7ed116",
                        "name": "New Group",
                        "deleted": false,
                        "created": "2019-04-08T12:10:03+00:00",
                        "modified": "2019-04-08T12:10:03+00:00",
                        "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                        "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                        "groups_users": [
                            {
                                "id": "6809e727-1219-4cfa-a201-1d3e997ca351",
                                "group_id": "73479f22-b387-4d4e-b625-b1cc0b7ed116",
                                "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                                "is_admin": true,
                                "created": "2019-04-08T12:10:03+00:00",
                                "user": {
                                    "id": "f848277c-5398-58f8-a82a-72397af2d450",
                                    "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                                    "username": "ada@passbolt.com",
                                    "active": true,
                                    "deleted": false,
                                    "created": "2019-02-04T12:05:44+00:00",
                                    "modified": "2019-03-04T12:05:44+00:00",
                                    "profile": {
                                        "id": "99522cc9-0acc-5ae2-b996-d03bded3c0a6",
                                        "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                                        "first_name": "Ada",
                                        "last_name": "Lovelace",
                                        "created": "2019-04-04T12:05:45+00:00",
                                        "modified": "2019-04-04T12:05:45+00:00"
                                    },
                                    "last_logged_in": ""
                                }
                            },
                            {
                                "id": "95829003-4753-424a-90e7-38dade39d902",
                                "group_id": "73479f22-b387-4d4e-b625-b1cc0b7ed116",
                                "user_id": "e97b14ba-8957-57c9-a357-f78a6e1e1a46",
                                "is_admin": false,
                                "created": "2019-04-08T12:10:03+00:00",
                                "user": {
                                    "id": "e97b14ba-8957-57c9-a357-f78a6e1e1a46",
                                    "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                                    "username": "betty@passbolt.com",
                                    "active": true,
                                    "deleted": false,
                                    "created": "2019-03-21T12:05:44+00:00",
                                    "modified": "2019-03-28T12:05:44+00:00",
                                    "profile": {
                                        "id": "cbce5d22-46c1-51d1-b851-36b174e40611",
                                        "user_id": "e97b14ba-8957-57c9-a357-f78a6e1e1a46",
                                        "first_name": "Betty",
                                        "last_name": "Holberton",
                                        "created": "2019-04-04T12:05:45+00:00",
                                        "modified": "2019-04-04T12:05:45+00:00"
                                    },
                                    "last_logged_in": ""
                                }
                            }
                        ]
                    }
                ]
            },
            "resources": {
                "sole_owner": [
                    {
                        "id": "8e3874ae-4b40-590b-968a-418f704b9d9a",
                        "name": "apache",
                        "username": "www-data",
                        "uri": "http:\/\/www.apache.org\/",
                        "description": "Apache is the world\u0027s most used web server software.",
                        "deleted": false,
                        "created": "2019-04-02T12:05:58+00:00",
                        "modified": "2019-04-03T12:05:58+00:00",
                        "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
                        "modified_by": "f848277c-5398-58f8-a82a-72397af2d450",
                        "permissions": [
                            {
                                "id": "898ce1d0-601f-5194-976b-147a680dd472",
                                "aco": "Resource",
                                "aco_foreign_key": "8e3874ae-4b40-590b-968a-418f704b9d9a",
                                "aro": "User",
                                "aro_foreign_key": "640ebc06-5ec1-5322-a1ae-6120ed2f3a74",
                                "type": 1,
                                "created": "2019-04-04T12:06:00+00:00",
                                "modified": "2019-04-04T12:06:00+00:00",
                                "group": null,
                                "user": {
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
                                            "path": "Avatar\/53\/57\/25\/31134496e2af4f1eadc07d03523d8eef\/31134496e2af4f1eadc07d03523d8eef.png",
                                            "adapter": "Local",
                                            "created": "2019-04-04T12:05:47+00:00",
                                            "modified": "2019-04-04T12:05:47+00:00",
                                            "url": {
                                                "medium": "img\/public\/Avatar\/53\/57\/25\/31134496e2af4f1eadc07d03523d8eef\/31134496e2af4f1eadc07d03523d8eef.a99472d5.png",
                                                "small": "img\/public\/Avatar\/53\/57\/25\/31134496e2af4f1eadc07d03523d8eef\/31134496e2af4f1eadc07d03523d8eef.65a0ba70.png"
                                            }
                                        }
                                    },
                                    "last_logged_in": ""
                                }
                            },
                            {
                                "id": "6f65173d-a5e8-5014-9659-e1bb4f19707d",
                                "aco": "Resource",
                                "aco_foreign_key": "8e3874ae-4b40-590b-968a-418f704b9d9a",
                                "aro": "User",
                                "aro_foreign_key": "e97b14ba-8957-57c9-a357-f78a6e1e1a46",
                                "type": 7,
                                "created": "2019-04-04T12:06:00+00:00",
                                "modified": "2019-04-04T12:06:00+00:00",
                                "group": null,
                                "user": {
                                    "id": "e97b14ba-8957-57c9-a357-f78a6e1e1a46",
                                    "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                                    "username": "betty@passbolt.com",
                                    "active": true,
                                    "deleted": false,
                                    "created": "2019-03-21T12:05:44+00:00",
                                    "modified": "2019-03-28T12:05:44+00:00",
                                    "profile": {
                                        "id": "cbce5d22-46c1-51d1-b851-36b174e40611",
                                        "user_id": "e97b14ba-8957-57c9-a357-f78a6e1e1a46",
                                        "first_name": "Betty",
                                        "last_name": "Holberton",
                                        "created": "2019-04-04T12:05:45+00:00",
                                        "modified": "2019-04-04T12:05:45+00:00",
                                        "avatar": {
                                            "id": "53ed32f4-349b-4ab9-ac0b-5ca6b3f1c6fb",
                                            "user_id": "e97b14ba-8957-57c9-a357-f78a6e1e1a46",
                                            "foreign_key": "cbce5d22-46c1-51d1-b851-36b174e40611",
                                            "model": "Avatar",
                                            "filename": "betty.png",
                                            "filesize": 115942,
                                            "mime_type": "image\/png",
                                            "extension": "png",
                                            "hash": "820a0cb765217a0e765f3a0abbb2e98b62ddecc1",
                                            "path": "Avatar\/13\/c2\/3d\/53ed32f4349b4ab9ac0b5ca6b3f1c6fb\/53ed32f4349b4ab9ac0b5ca6b3f1c6fb.png",
                                            "adapter": "Local",
                                            "created": "2019-04-04T12:05:48+00:00",
                                            "modified": "2019-04-04T12:05:48+00:00",
                                            "url": {
                                                "medium": "img\/public\/Avatar\/13\/c2\/3d\/53ed32f4349b4ab9ac0b5ca6b3f1c6fb\/53ed32f4349b4ab9ac0b5ca6b3f1c6fb.a99472d5.png",
                                                "small": "img\/public\/Avatar\/13\/c2\/3d\/53ed32f4349b4ab9ac0b5ca6b3f1c6fb\/53ed32f4349b4ab9ac0b5ca6b3f1c6fb.65a0ba70.png"
                                            }
                                        }
                                    },
                                    "last_logged_in": ""
                                }
                            },
                            {
                                "id": "c953dc56-86ee-5932-ae24-a2df7003c906",
                                "aco": "Resource",
                                "aco_foreign_key": "8e3874ae-4b40-590b-968a-418f704b9d9a",
                                "aro": "User",
                                "aro_foreign_key": "54c6278e-f824-5fda-91ff-3e946b18d994",
                                "type": 1,
                                "created": "2019-04-04T12:06:00+00:00",
                                "modified": "2019-04-04T12:06:00+00:00",
                                "group": null,
                                "user": {
                                    "id": "54c6278e-f824-5fda-91ff-3e946b18d994",
                                    "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                                    "username": "dame@passbolt.com",
                                    "active": true,
                                    "deleted": false,
                                    "created": "2019-04-04T10:05:44+00:00",
                                    "modified": "2019-04-04T11:05:44+00:00",
                                    "profile": {
                                        "id": "2766ff6b-87f1-53a9-98fd-72cd32a3df69",
                                        "user_id": "54c6278e-f824-5fda-91ff-3e946b18d994",
                                        "first_name": "Dame Steve",
                                        "last_name": "Shirley",
                                        "created": "2019-04-04T12:05:45+00:00",
                                        "modified": "2019-04-04T12:05:45+00:00",
                                        "avatar": {
                                            "id": "875e3a82-1dd9-4308-b5cf-814e4a7b7eea",
                                            "user_id": "54c6278e-f824-5fda-91ff-3e946b18d994",
                                            "foreign_key": "2766ff6b-87f1-53a9-98fd-72cd32a3df69",
                                            "model": "Avatar",
                                            "filename": "dame steve.png",
                                            "filesize": 20676,
                                            "mime_type": "image\/png",
                                            "extension": "png",
                                            "hash": "f2695972b9009970ac85aae95f907693268cd249",
                                            "path": "Avatar\/b6\/60\/0b\/875e3a821dd94308b5cf814e4a7b7eea\/875e3a821dd94308b5cf814e4a7b7eea.png",
                                            "adapter": "Local",
                                            "created": "2019-04-04T12:05:46+00:00",
                                            "modified": "2019-04-04T12:05:46+00:00",
                                            "url": {
                                                "medium": "img\/public\/Avatar\/b6\/60\/0b\/875e3a821dd94308b5cf814e4a7b7eea\/875e3a821dd94308b5cf814e4a7b7eea.a99472d5.png",
                                                "small": "img\/public\/Avatar\/b6\/60\/0b\/875e3a821dd94308b5cf814e4a7b7eea\/875e3a821dd94308b5cf814e4a7b7eea.65a0ba70.png"
                                            }
                                        }
                                    },
                                    "last_logged_in": ""
                                }
                            },
                            {
                                "id": "8dfd59a7-852d-5c57-bd45-75c28bbb3f6c",
                                "aco": "Resource",
                                "aco_foreign_key": "8e3874ae-4b40-590b-968a-418f704b9d9a",
                                "aro": "User",
                                "aro_foreign_key": "f848277c-5398-58f8-a82a-72397af2d450",
                                "type": 15,
                                "created": "2019-04-04T12:06:00+00:00",
                                "modified": "2019-04-04T12:06:00+00:00",
                                "group": null,
                                "user": {
                                    "id": "f848277c-5398-58f8-a82a-72397af2d450",
                                    "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                                    "username": "ada@passbolt.com",
                                    "active": true,
                                    "deleted": false,
                                    "created": "2019-02-04T12:05:44+00:00",
                                    "modified": "2019-03-04T12:05:44+00:00",
                                    "profile": {
                                        "id": "99522cc9-0acc-5ae2-b996-d03bded3c0a6",
                                        "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                                        "first_name": "Ada",
                                        "last_name": "Lovelace",
                                        "created": "2019-04-04T12:05:45+00:00",
                                        "modified": "2019-04-04T12:05:45+00:00",
                                        "avatar": {
                                            "id": "fd3c78ad-50b4-4968-b0d7-f609ddcb0498",
                                            "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                                            "foreign_key": "99522cc9-0acc-5ae2-b996-d03bded3c0a6",
                                            "model": "Avatar",
                                            "filename": "ada.png",
                                            "filesize": 170049,
                                            "mime_type": "image\/png",
                                            "extension": "png",
                                            "hash": "97e36ab6528e26e3b9f988444ef490f125f49a39",
                                            "path": "Avatar\/90\/6f\/a1\/fd3c78ad50b44968b0d7f609ddcb0498\/fd3c78ad50b44968b0d7f609ddcb0498.png",
                                            "adapter": "Local",
                                            "created": "2019-04-04T12:05:48+00:00",
                                            "modified": "2019-04-04T12:05:48+00:00",
                                            "url": {
                                                "medium": "img\/public\/Avatar\/90\/6f\/a1\/fd3c78ad50b44968b0d7f609ddcb0498\/fd3c78ad50b44968b0d7f609ddcb0498.a99472d5.png",
                                                "small": "img\/public\/Avatar\/90\/6f\/a1\/fd3c78ad50b44968b0d7f609ddcb0498\/fd3c78ad50b44968b0d7f609ddcb0498.65a0ba70.png"
                                            }
                                        }
                                    },
                                    "last_logged_in": ""
                                }
                            }
                        ]
                    }
                ]
            }
        },
        "groups_to_delete": [
            {
                "id": "05b68bd2-e4e8-4838-ac21-4661b27fb23b",
                "name": "Another Group",
                "deleted": false,
                "created": "2019-04-08T12:44:44+00:00",
                "modified": "2019-04-08T12:44:44+00:00",
                "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856"
            }
        ]
    }
}
```

As you can see there are two problems with this operation.

- User is sole owner of a Resource
- User is sole manager of a Group

The response body also details those gorups and resources so you can do the needful. Like in this case transfer ownership of those groups and resources.

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
   User deleted successfully.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   The userId supplied is not a valid UUID
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>
   The user making the request is not authenticated
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found<br/>
   The user either does not exist or the user making the request does not have delete permission.
   </td>
  </tr>
  </tbody>
</table>