---
title: Resources
layout: api
category: api
slug: resources
permalink: /api/resources/index.html
---

In passbolt, passwords are split into two different entities: Resources and Secrets. Passwords metadata are internally known as Resources and are represented as one object containing the name, username, the URL amongst other fields. While the actual password is part of the “Secrets” entity. The API allows you to create, delete, and update your passwords. You can retrieve individual passwords as well as a list of all your passwords.


## The Resource object

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
                Unique ID of the resource in UUID format.
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
                Datetime when the resource was created
            </td>
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
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
                UUID of the user who created the resource
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                creator
            </td>
            <td>
                Object
            </td>
            <td>
                Object containing the user details of the creator
            </td>
            <td>
                Check User object
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
                Whether the resource has been deleted
            </td>
            <td>
                true/false
            </td>
        </tr>
        <tr>
            <td>
                description
            </td>
            <td>
                String
            </td>
            <td>
                Resource description
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                favorite
            </td>
            <td>
                Object
            </td>
            <td>
                Favorite details of the resource
            </td>
            <td>
                Check Favorite object
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
                Datetime when the resource was last modified
            </td>
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
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
                UUID of the user who last modified the resource
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                modifier
            </td>
            <td>
                Object
            </td>
            <td>
                Object containing the user details of the modifier 
            </td>
            <td>
                Check User object
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
                Resource Name
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                permission
            </td>
            <td>
                Object
            </td>
            <td>
                Permission details as applied on the resource
            </td>
            <td>
                Check Permission object
            </td>
        </tr>
        <tr>
            <td>
                uri
            </td>
            <td>
                String
            </td>
            <td>
                URL/URI for this login
            </td>
            <td>
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
                Username to be used for this login
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>





## Get all resources:

To fetch a list of all the password the user has access to, you can make a **GET** request to **/resources.json**


### Request Parameters:

The endpoint takes the following parameters


<table class="table-parameters">
    <thead>
        <tr>
            <th>Param</th>
            <th>Description</th>
            <th>Required</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>api-version</td>
            <td>The API version to target</td>
            <td>No</td>
            <td>string</td>
        </tr>
        <tr>
            <td>contain[]</td>
            <td>Controls the fields that must be returned</td>
            <td></td>
            <td>Array</td>
        </tr>
        <tr>
            <td>contain[creator]</td>
            <td>Whether or not to include the resource creator</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[favorite]</td>
            <td>Whether or not to include the favorite detail for this resource</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[modifier]</td>
            <td>Whether or not to include the modifier detail for this resource</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permission]</td>
            <td>Whether or not to include the permission detail for this resource</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[tag]</td>
            <td>Whether or not to include the tags for this resource</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>order[]</td>
            <td>How should the results be sorted. For example Resource.modified DESC</td>
            <td>No</td>
            <td>String</td>
        </tr>
    </tbody>
</table>



### Example Request:

So a request to fetch list of resources and to 



*   include **creator**, **favorite**, **modifier**, **permission** and **tag**
*   Sort DESC by resource modification datetime
*   Using api-version v2

will look like this:

```
https://api.passbolt.com/resources.json?
        contain[creator]=1&
        contain[favorite]=1&
        contain[modifier]=1&
        contain[permission]=1&
        contain[tag]=1&
        order[]=Resource.modified DESC&
        api-version=v2
```

A successful response will have an array of json objects. Each representing a single resource. Something like this example below

```json
{
    "header": {
        "id": "886a798f-11cd-4340-b488-70e57d56f5db",
        "status": "success",
        "servertime": 1555054043,
        "title": "app_resources_index_success",
        "action": "c506210f-7866-5691-8fc1-58772e8f49f1",
        "message": "The operation was successful.",
        "url": "\/resources.json?contain%5Bcreator%5D=1\u0026contain%5Bfavorite%5D=1\u0026contain%5Bmodifier%5D=1\u0026contain%5Bpermission%5D=1\u0026contain%5Btag%5D=1\u0026order%5B%5D=Resource.modified+DESC\u0026silentLoading=false\u0026api-version=v2",
        "code": 200
    },
    "body": [
        {
            "id": "daaf057e-7fc3-5537-a8a9-e8c151890878",
            "name": "cakephp",
            "username": "cake",
            "uri": "cakephp.org",
            "description": "The rapid and tasty php development framework",
            "deleted": false,
            "created": "2019-04-04T10:05:58+00:00",
            "modified": "2019-04-11T08:53:06+00:00",
            "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "modified_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "favorite": null,
            "modifier": {
                "id": "f848277c-5398-58f8-a82a-72397af2d450",
                "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                "username": "ada@passbolt.com",
                "active": true,
                "deleted": false,
                "created": "2019-02-04T12:05:44+00:00",
                "modified": "2019-03-04T12:05:44+00:00",
                "last_logged_in": ""
            },
            "creator": {
                "id": "f848277c-5398-58f8-a82a-72397af2d450",
                "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                "username": "ada@passbolt.com",
                "active": true,
                "deleted": false,
                "created": "2019-02-04T12:05:44+00:00",
                "modified": "2019-03-04T12:05:44+00:00",
                "last_logged_in": ""
            },
            "tags": [
                {
                    "id": "9a2d0c7e-8bf6-5a85-a733-ea737d9fdea2",
                    "slug": "#bravo",
                    "is_shared": true
                },
                {
                    "id": "54d4d6e4-982e-5b50-a739-313104c800df",
                    "slug": "firefox",
                    "is_shared": false
                },
                {
                    "id": "14ae2fc4-a235-588f-8f19-98cce08808aa",
                    "slug": "fox-trot",
                    "is_shared": false
                },
                {
                    "id": "0507cbbb-eb14-5121-9105-05380dbe64ff",
                    "slug": "\u092a\u0930\u0926\u0947\u0936\u0940-\u092a\u0930\u0926\u0947\u0936\u0940",
                    "is_shared": false
                }
            ],
            "permission": {
                "id": "972bf3fc-0d5b-579c-9097-56d86394c255",
                "aco": "Resource",
                "aco_foreign_key": "daaf057e-7fc3-5537-a8a9-e8c151890878",
                "aro": "User",
                "aro_foreign_key": "f848277c-5398-58f8-a82a-72397af2d450",
                "type": 15,
                "created": "2019-04-04T12:06:00+00:00",
                "modified": "2019-04-04T12:06:00+00:00"
            }
        },
        {
            "id": "ecf0ed85-3bfc-5f45-b11d-74e9a86aa313",
            "name": "Grogle",
            "username": "googleusername",
            "uri": "http:\/\/fr.groland.wikia.com\/wiki\/Grogle",
            "description": "",
            "deleted": false,
            "created": "2019-04-04T12:05:58+00:00",
            "modified": "2019-04-11T07:23:00+00:00",
            "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "modified_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "favorite": null,
            "modifier": {
                "id": "f848277c-5398-58f8-a82a-72397af2d450",
                "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                "username": "ada@passbolt.com",
                "active": true,
                "deleted": false,
                "created": "2019-02-04T12:05:44+00:00",
                "modified": "2019-03-04T12:05:44+00:00",
                "last_logged_in": ""
            },
            "creator": {
                "id": "f848277c-5398-58f8-a82a-72397af2d450",
                "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                "username": "ada@passbolt.com",
                "active": true,
                "deleted": false,
                "created": "2019-02-04T12:05:44+00:00",
                "modified": "2019-03-04T12:05:44+00:00",
                "last_logged_in": ""
            },
            "tags": [
                {
                    "id": "9a2d0c7e-8bf6-5a85-a733-ea737d9fdea2",
                    "slug": "#bravo",
                    "is_shared": true
                },
                {
                    "id": "1c8afebc-7e23-51bd-a0b6-2e695afeb32f",
                    "slug": "#charlie",
                    "is_shared": true
                },
                {
                    "id": "54d4d6e4-982e-5b50-a739-313104c800df",
                    "slug": "firefox",
                    "is_shared": false
                },
                {
                    "id": "14ae2fc4-a235-588f-8f19-98cce08808aa",
                    "slug": "fox-trot",
                    "is_shared": false
                }
            ],
            "permission": {
                "id": "36366a82-3d75-5e0e-97d3-0437ad4ee2cf",
                "aco": "Resource",
                "aco_foreign_key": "ecf0ed85-3bfc-5f45-b11d-74e9a86aa313",
                "aro": "User",
                "aro_foreign_key": "f848277c-5398-58f8-a82a-72397af2d450",
                "type": 15,
                "created": "2019-04-04T12:06:01+00:00",
                "modified": "2019-04-04T12:06:01+00:00"
            }
        },
    ]
}
```


### Possible Responses:


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
            <td>OK<br/>
            Request went through. The response payload will contain a list of resources.</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
    </tbody>
</table>



## Create a new Resource:

To create a new Resource, make a POST request to /resources.json with the resource data in request body. The request body expects the following parameters


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
            <td>name[String]</td>
            <td>Name for the new resource.</td>
            <td>Yes</td>
            <td>1. Valid utf8 string2. Must not exceed 64 characters3. Empty string not allowed.</td>
        </tr>
        <tr>
            <td>description[String]</td>
            <td>Description for the new resource.</td>
            <td>No</td>
            <td>1. Valid utf8 string2. Must not exceed 10000 characters</td>
        </tr>
        <tr>
            <td>username</td>
            <td>Username for this login</td>
            <td>No</td>
            <td>Valid utf8 string2. Must not exceed 64 characters</td>
        </tr>
        <tr>
            <td>uri</td>
            <td>URI/URL for the new resource.</td>
            <td>String</td>
            <td>Valid utf8 string<sup><a href="#cmnt11" id="cmnt_ref11">[k]</a></sup>2. Must not exceed 1024 characters
            </td>
        </tr>
        <tr>
            <td>secrets</td>
            <td>An array of secrets in object format</td>
            <td>Array</td>
            <td>Exactly one secret must be provided.</td>
        </tr>
        <tr>
            <td>secrets.user_id</td>
            <td>User ID of the user</td>
            <td>String</td>
            <td>UUID</td>
        </tr>
        <tr>
            <td>secrets.data</td>
            <td>Encrypted plaintext password using client’s private keys</td>
            <td>String</td>
            <td></td>
        </tr>
    </tbody>
</table>


A successful request must pass all the validation checks. For example sending a blank request body will return

```json
{
    "header": {
        "id": "965c9f17-18ae-48fd-a36e-e42f04a30442",
        "status": "error",
        "servertime": 1554907648,
        "title": "app_resources_add_error",
        "action": "ad8bbc35-6435-538e-b1a7-80b87bcedb6a",
        "message": "Could not validate resource data.",
        "url": "\/resources.json?api-version=v2",
        "code": 400
    },
    "body": {
        "name": {
            "_required": "A name is required."
        },
        "secrets": {
            "_required": "A secret is required."
        }
    }
}
```


Similarly sending only a name 



```json
{ "name" : "New Resource" }
```


will still result in error



```json
{
    "header": {
        "id": "24ffc9e6-bd4b-4d3b-b55b-4bdeffee22f3",
        "status": "error",
        "servertime": 1554909377,
        "title": "app_resources_add_error",
        "action": "ad8bbc35-6435-538e-b1a7-80b87bcedb6a",
        "message": "Could not validate resource data.",
        "url": "\/resources.json?api-version=v2",
        "code": 400
    },
    "body": {
        "secrets": {
            "_required": "A secret is required."
        }
    }
}
```


And a valid request body will look like

```json
{ 
  "name": "Apple developer ID",
  "description": "Official apple account to publish apps on the app store",
  "secrets": [{
    "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "data": "<encrypted_password>"
  }]
}
```

and will return a json response like below

```json
{
    "header": {
        "id": "799c69c7-1789-4d87-9fbf-02529b0d21dc",
        "status": "success",
        "servertime": 1554909967,
        "title": "app_secrets_view_success",
        "action": "ad71952e-7842-599e-a19e-3a82e6974b23",
        "message": "The operation was successful.",
        "url": "\/secrets\/resource\/8e3874ae-4b40-590b-968a-418f704b9d9a.json?api-version=v2",
        "code": 200
    },
    "body": {
        "id": "eede75ff-316a-511c-8317-51e8339b6dcc",
        "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
        "resource_id": "8e3874ae-4b40-590b-968a-418f704b9d9a",
        "data": "-----BEGIN PGP MESSAGE-----",
        "created": "2019-04-04T12:06:50+00:00",
        "modified": "2019-04-04T12:06:50+00:00"
    }
}
```

### Possible Responses:

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
            <td>OK<br/>
            The Resource was created. The response body will contain the newly created resource object.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
            Some of the data validation failed. Check debug headers for more info<sup><a href="#cmnt13"
                        id="cmnt_ref13">[m]</a></sup></td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
    </tbody>
</table>




## Find a Resource metadata by ID

Returns metadata for a single resource identified by the unique UUID. To query metadata for a single resource make a GET request to /resources/<resourceId>.json

```
GET /resource/<resourceId>.json
```


### Possible Responses:


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
            <td>OK<br/>
            Response includes the resource metadata object.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
            The resourceId supplied is not a valid UUID</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found<br/>
            The resource either does not exist or the user does not have access permission.</td>
        </tr>
    </tbody>
</table>



## Find a Resource secrets by ID:

To query a resource’ the secrets (plaintext password encrypted using client’s public key) you can make a GET request to /secrets/resource/<resourceId>.json

```
GET /secrets/resource/<resourceId>.json
```

Please note that the returned payload is encrypted using your(user making the request) public key. To retrieve the plaintext password, you must decrypt it using your private key.

### Example Request:

So to get secret for the resource identified by `8e3874ae-4b40-590b-968a-418f704b9d9a` will look like 

```
http://www.passbolt.test/secrets/resource/8e3874ae-4b40-590b-968a-418f704b9d9a.json?api-version=v2
```

Upon success this will return a payload like this

```json
{
    "header": {
        "id": "799c69c7-1789-4d87-9fbf-02529b0d21dc",
        "status": "success",
        "servertime": 1554909967,
        "title": "app_secrets_view_success",
        "action": "ad71952e-7842-599e-a19e-3a82e6974b23",
        "message": "The operation was successful.",
        "url": "\/secrets\/resource\/8e3874ae-4b40-590b-968a-418f704b9d9a.json?api-version=v2",
        "code": 200
    },
    "body": {
        "id": "eede75ff-316a-511c-8317-51e8339b6dcc",
        "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
        "resource_id": "8e3874ae-4b40-590b-968a-418f704b9d9a",
        "data": "-----BEGIN PGP MESSAGE-----",
        "created": "2019-04-04T12:06:50+00:00",
        "modified": "2019-04-04T12:06:50+00:00"
    }
}
```


Here the string under the key “data” is the encrypted plaintext password.


## Update a Resource

In order to be able to update, the user making the request must have sufficient permission to update it. Currently only the resource owner or the Admin can update it.


### Updating the resource metadata:

A Resource can be updated by sending a PUT request to /resources/<resourceId>.json 

```
PUT /resources/<resourceId>.json 
```

The request body contains the new data to be updated. The request body schema is same as that of [Creating a new Resource](#create-a-new-resource)

### Updating resource secrets:

When updating the plaintext password.The following steps must be performed to make sure the change is synced well across all the sharing users.



1. Encrypt the new plaintext passwords using their public key for each user it’s shared with
2. Include one object per user with two keys “data” holding the encrypted plaintext password and “user_id” holding the unique user id in UUID format of the user. An example 

```json
{
  "name": "Apple developer ID",
  "description": "Official apple account to publish apps on the app store",
  "secrets": [{
    "user_id": "3fa85f64-...",
    "data": "<encrypted_password_using_user_1_public_key>"
  }, {
    "user_id": "3fa85f64-...",
    "data": "<encrypted_password_using_user_2_public_key>"
  }]

}
```


So if the password you’re updating has been shared with 7 users, the “secrets” key will be an array of 7 objects each containing the “user_id” and “data”.


### Possible Responses

Same as [creating a new Resource](#possible-responses-1)


## Share a Resource

A Resource can be shared with another user or group. passbolt provides the following endpoints to manage sharing of a Resource.


### Get all AROs

In ACL lingo, things (most often users) that want to use stuff are represented by access request objects, or AROs. You can request a list of AROs with whom a Resource can be shared. To get the list make a GET request to /share/search-aros.json

```
GET /share/search-aros.json
```

The response returned will have an array or json objects, each representing either a Group or a User.

```json
{
    "header": {
        "id": "1e0b7ca1-8427-4ec4-a46e-b3dc4f11f878",
        "status": "success",
        "servertime": 1554968444,
        "title": "app_share_searchArosToShareWith_success",
        "action": "10807e9e-d525-5acc-b05d-cccbbd252a93",
        "message": "The operation was successful.",
        "url": "\/share\/search-aros.json?api-version=v2",
        "code": 200
    },
    "body": [
        {
            "user_count": "18",
            "id": "bda0a05c-b1fa-58be-b5b9-446e65ace052",
            "name": "Group Name",
            "deleted": false,
            "created": "2018-01-08T13:39:25+00:00",
            "modified": "2018-01-08T13:39:25+00:00",
            "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
            "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856"
        },
        {
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
                    "path": "img\/public\/Avatar\/....a99472d5.png",
                    "adapter": "Local",
                    "created": "2019-04-04T12:05:48+00:00",
                    "modified": "2019-04-04T12:05:48+00:00",
                    "url": {
                        "medium": "img\/public\/Avatar\/....a99472d5.png",
                        "small": "img\/public\/Avatar\/....65a0ba70.png"
                    }
                }
            },
            "groups_users": [
                {
                    "id": "4f2a3f6e-1a3f-4f4a-a523-46c6b6d0f763",
                    "group_id": "05b68bd2-e4e8-4838-ac21-4661b27fb23b",
                    "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                    "is_admin": true,
                    "created": "2019-04-08T12:44:44+00:00"
                },
                {
                    "id": "6809e727-1219-4cfa-a201-1d3e997ca351",
                    "group_id": "73479f22-b387-4d4e-b625-b1cc0b7ed116",
                    "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                    "is_admin": true,
                    "created": "2019-04-08T12:10:03+00:00"
                }
            ],
            "role": {
                "id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                "name": "user",
                "description": "Logged in user",
                "created": "2012-07-04T13:39:25+00:00",
                "modified": "2012-07-04T13:39:25+00:00"
            },
            "gpgkey": {
                "id": "04481719-5d9d-5e22-880a-a6b9270601d2",
                "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----",
                "bits": 4096,
                "uid": "Ada Lovelace \u003Cada@passbolt.com\u003E",
                "key_id": "5D9B054F",
                "fingerprint": "03F60E958F4CB29723ACDF761353B5B15D9B054F",
                "type": "RSA",
                "expires": "2019-08-09T12:48:31+00:00",
                "key_created": "2015-08-09T12:48:31+00:00",
                "deleted": false,
                "created": "2019-04-04T12:05:49+00:00",
                "modified": "2019-04-04T12:05:49+00:00"
            },
            "last_logged_in": ""
        }
    ]
}
```
Your passwords can be shared with them.


### Simulate Sharing

passbolt API allows you to simulate a share before actually going through with this. This way you can see if the params pass the validation checks and also if it causes any side effect. To simulate sharing a resource you can make a POST request to /share/simulate/resource/{resourceId}.json where resourceId is the id of the Resource you wish to share.

```
POST /share/simulate/resource/{resourceId}.json
```

The paylod takes a json array where each object represents a permission. The `Permission` object may contain the following fields.

<table class="table-parameters">
<thead>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>id</td>
    <td>UUID</td>
    <td>ID of the permission object. Only required when updating an existing share/permission</td>
  </tr>
  <tr>
    <td>aco</td>
    <td>String</td>
    <td>Access Control Object<br/>Always "Resource"</td>
  </tr>
  <tr>
    <td>aco_foreign_key</td>
    <td>UUID</td>
    <td>UUID of the Resource to share</td>
  </tr>
  <tr>
    <td>aro</td>
    <td>String</td>
    <td>Access Resource Object<br/>Can be `User` or `Group`</td>
  </tr>
  <tr>
    <td>aro_foreign_key</td>
    <td>UUID</td>
    <td>UUID of the User/Group to share with</td>
  </tr>
  <tr>
    <td>type</td>
    <td>int</td>
    <td>Permission type<br/>
    1 => Read, 7 => Update and 15 => Owner
    </td>
  </tr>
  <tr>
    <td>delete</td>
    <td>Boolean</td>
    <td>Whether to delete this permission. Only required when deleting an existing permission.</td>
  </tr>
  </tbody>
</table>

So the request body will look like

```json
{
  "permissions": [
    {
      "is_new": true,
      "aro": "User",
      "aro_foreign_key": "1ebc0060-9274-5451-aa12-ad0f31bc29dd",
      "aco": "Resource",
      "aco_foreign_key": "daaf057e-7fc3-5537-a8a9-e8c151890878",
      "type": 7
    },
    {
      "id": "cb03409b-9cd6-5d64-8df5-ff60a8a38a41",
      "aco": "Resource",
      "aco_foreign_key": "daaf057e-7fc3-5537-a8a9-e8c151890878",
      "aro": "User",
      "aro_foreign_key": "904bcd9f-ff51-5cfd-9de8-d2c876ade498",
      "type": 1,
      "created": "2019-04-04T12:06:00+00:00",
      "modified": "2019-04-04T12:06:00+00:00",
      "user": {
        "id": "904bcd9f-ff51-5cfd-9de8-d2c876ade498",
        "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
        "username": "irene@passbolt.com",
        "active": true,
        "deleted": false,
        "created": "2019-04-04T12:05:44+00:00",
        "modified": "2019-04-04T12:05:44+00:00",
        "profile": {
          "id": "c551fc12-59b4-51ad-ae73-1659812e9ba5",
          "user_id": "904bcd9f-ff51-5cfd-9de8-d2c876ade498",
          "first_name": "Irene",
          "last_name": "Greif",
          "created": "2019-04-04T12:05:45+00:00",
          "modified": "2019-04-04T12:05:45+00:00",
          "avatar": {
            "url": {
              "medium": "img/avatar/user_medium.png",
              "small": "img/avatar/user.png"
            }
          }
        },
        "last_logged_in": ""
      },
      "group": null,
      "delete": true
    }
  ]
}
```

If the resource can be shared safely, this returns an associative array that contains a list of new users who will have access to the resource and a list of users who will lose their access. These lists will be used to encrypt the secrets for the users who get access and to remove the secrets of the users who lost their access.

```json
{
    "header": {
        "id": "499657b1-463c-49e3-99d0-7d4bca7392c2",
        "status": "success",
        "servertime": 1554972001,
        "title": "app_share_dryRun_success",
        "action": "7df37cb5-cfb9-57c2-a7a5-b65c9f573de0",
        "message": "The operation was successful.",
        "url": "\/share\/simulate\/resource\/8e3874ae-4b40-590b-968a-418f704b9d9a.json?api-version=v2",
        "code": 200
    },
    "body": {
        "changes": {
            "added": ["<uuid1>", "<uuid2>"],
            "removed": ["<uuid3>", "<uuid4>"]
        }
    }
}
```

### Share a Resource

After verifying the dry run and to go ahead with sharing, you can make a `PUT` request to `/share/resource/{resourceId}.json`. The request and response schema for this is same as [Simulate Sharing](#simulate-sharing)


## Delete a Resource

A Resource can be deleted subject to relevant permissions by sending a DELETE request to /resources/<resourceId>.json

```
DELETE /resources/<resourceId>.json
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
   Resource deleted successfully.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   The resourceId supplied is not a valid UUID
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
   The resource either does not exist or the user does not have delete permission.
   </td>
  </tr>
  </tbody>
</table>