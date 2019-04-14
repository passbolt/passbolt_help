---
title: Share
layout: api_resource
category: api
slug: sharing
permalink: /api/resources/sharing/index.html
---

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