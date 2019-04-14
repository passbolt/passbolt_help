---
title: Resources
layout: api_resource
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
            <td>400</td>
            <td>
                Bad Request<br/>
                When either of the order parameters are invalid.
            </td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated.</td>
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