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
    <tbody>
        <tr>
            <td>
                Attribute
            </td>
            <td>
                Type
            </td>
            <td>
                Description
            </td>
            <td>
                Format
            </td>
        </tr>
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

To fetch a list of all the users the current user making the request has access to, you can make a **GET** request to **/users.json?api-version=v2**

```
GET /users.json?api-version=v2
```


### Request Parameters:

The endpoint takes the following parameters


<table class="table-parameters">
  <tr>
   <td>Param
   </td>
   <td>Description
   </td>
   <td>Required
   </td>
   <td>Type
   </td>
  </tr>
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
                "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----\n
                <--- rest of the key data --->
                -----END PGP PUBLIC KEY BLOCK-----",
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
  <tr>
   <td>Code
   </td>
   <td>Description
   </td>
  </tr>
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
    <tr>
        <td>Parameter
        </td>
        <td>Description
        </td>
        <td>Required
        </td>
        <td>Validation Constraints
        </td>
    </tr>
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
  <tr>
   <td>Code
   </td>
   <td>Description
   </td>
  </tr>
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
</table>



## Find a User by ID

Returns a single user identified by the unique UUID. To query a single user make a GET request to /users/<resourceId>.json

```
GET /users/<resourceId>.json
```

{% include messages/notice.html
    content="**Pro Tip:** Making a GET request to /users/me.json will return the currently logged in user."
%}



### Possible Responses:


<table class="table-parameters">
  <tr>
   <td>Code
   </td>
   <td>Description
   </td>
  </tr>
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
</table>



## Update a User

A User can be updated by sending the PUT request to /users/<userId>.json 

The request body contains the new data to be updated. The request body schema is same as that of [Creating a new User](#creating-a-new-user) with the exception of the email/username field which can not be updated .

In order to be able to update, the user making the request must have sufficient permission to update it.


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


### Possible Responses:


<table class="table-parameters">
  <tr>
   <td>Code
   </td>
   <td>Description
   </td>
  </tr>
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
   <td>Authentication Failure

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
</table>