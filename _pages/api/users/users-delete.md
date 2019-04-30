---
title: Delete a user
date: 2019-04-23 14:00:00 Z
layout: api
category: api,users,delete
slug: users-delete
permalink: /api/users/delete
---

A User can be deleted subject to relevant permissions by sending a `DELETE` request to `/users/<userId>.json`

```
DELETE /users/<userId>.json?api-version=v2
```

Only a user with an administrator role can delete users. A User can not be deleted as long as:
* They are the sole owner of a shared resource.
* They are a manager of a non empty group.

In this case you will need to transfer the ownership of the shared resources and appoint a new manager
to the group in order to proceed.

### Dry run
A dry run can also be performed before actually attempting to delete a user. This works by sending a 
`DELETE` request to `/users/<userId>/dry-run.json`. This will check all the constraints and return a `200 OK`
response if the user can be deleted safely.

```
DELETE /users/<userId>/dry-run.json?api-version=v2
```

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
   User deleted successfully.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   The userId supplied is not a valid UUID or the user cannot be deleted because it is the unique owner
   of shared resources, or the unique manager of a non empty group.
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

## Examples
### Error response

For example deleting a user when she is the sole owner of a resource will return `400 Bad Request` with a 
response body like:

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

The response body also details those groups and resources so you can do needed changes.
Like in this case transfer ownership of those groups and resources.

