---
title: Browse all Folders
date: 2021-04-29 14:00:00 Z
layout: api
pro: true
category: api,folders,read-index
slug: folders-read-index
permalink: /api/folders/read-index
---

To fetch a list of all the folders the user has access to, make the following request:
```
GET /folders.json
```

### Request Parameters

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
            <td>filter[ ]</td>
            <td>Controls the fields that could be returned</td>
            <td>No</td>
            <td>Array</td>
        </tr>
        <tr>
            <td>filter[has-id][ ]</td>
            <td>Return the results for the given folder UUID(s)</td>
            <td>No</td>
            <td>UUID</td>
        </tr>
        <tr>
            <td>filter[has-parent][ ]</td>
            <td>Return the results for the given folder parent UUID(s)</td>
            <td>No</td>
            <td>UUID</td>
        </tr>
        <tr>
            <td>filter[search]</td>
            <td>Return the folder name matching the search term</td>
            <td>No</td>
            <td>String</td>
        </tr>
        <tr>
            <td>contain[ ]</td>
            <td>Controls the fields that must be returned</td>
            <td>No</td>
            <td>Array</td>
        </tr>
        <tr>
            <td>contain[children_resources]</td>
            <td>Whether or not to include the resources included in the folder (direct children only)</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[children_folders]</td>
            <td>Whether or not to include the folders included in the folder (direct children only)</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[creator]</td>
            <td>Whether or not to include the folder creator user record</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[creator]</td>
            <td>Whether or not to include the folder creator user record</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[creator.profile]</td>
            <td>Whether or not to include the folder creator profile</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[modifier]</td>
            <td>Whether or not to include the modifier user record</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[modifier.profile]</td>
            <td>Whether or not to include the modifier profile </td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permission]</td>
            <td>Whether or not to include the permission for the current user for this folder</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permissions]</td>
            <td>Whether or not to include the all the permissions for this folder</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permissions.user.profile]</td>
            <td>Whether or not to include the user profile associated with the permissions</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permissions.group]</td>
            <td>Whether or not to include the group details with the permissions</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
    </tbody>
</table>

### Possible responses

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
            Request went through. The response payload will contain a list of folders.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>
                Bad Request<br/>
                If one parameter or more are invalid.
            </td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated.</td>
        </tr>
    </tbody>
</table>


## Examples
### Filtered request

It is possible to adjust the request response for example to
*   include `permission`, `permission.user.profile`, `permissions.group`
*   Filter by `has-id`

Such a request will look like this:

```
GET /folders.json
    ?filter[has-id][]=616caedc-14a2-4403-821a-0e11c40fc846
    &contain[permission]=1
    &contain[permissions.user.profile]=1
    &contain[permissions.group]=1
```

### Success response
A successful response will have an array of json objects with each representing a single folder.
It will look something like this example:

```
{
    "header": {
        "id": "b26ba81b-937f-4dfa-a14b-954fcd80b5d3",
        "status": "success",
        "servertime": 1619762222,
        "action": "1cd53591-cb6b-5b03-b0be-05a54644263d",
        "message": "The operation was successful.",
        "url": "\/folders.json?api-version=v2&filter[has-id][]=616caedc-14a2-4403-821a-0e11c40fc846&contain[permission]=1&contain[permissions.user.profile]=1&contain[permissions.group]=1",
        "code": 200
    },
    "body": [
        {
            "id": "616caedc-14a2-4403-821a-0e11c40fc846",
            "name": "Test",
            "created": "2021-04-30T05:56:06+00:00",
            "modified": "2021-04-30T05:56:06+00:00",
            "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "modified_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "permissions": [
                {
                    "id": "2e4d4009-1763-4d36-b625-6dcdae8f73f1",
                    "aco": "Folder",
                    "aco_foreign_key": "616caedc-14a2-4403-821a-0e11c40fc846",
                    "aro": "User",
                    "aro_foreign_key": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                    "type": 15,
                    "created": "2021-04-30T05:56:07+00:00",
                    "modified": "2021-04-30T05:56:07+00:00",
                    "group": null,
                    "user": {
                        "id": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                        "role_id": "0d51c3a8-5e67-5e3d-882f-e1868966d817",
                        "username": "admin@passbolt.com",
                        "active": true,
                        "deleted": false,
                        "created": "2021-04-30T05:36:49+00:00",
                        "modified": "2021-04-30T05:36:49+00:00",
                        "profile": {
                            "id": "92ccfd1b-6eb8-5e1c-a022-cf22463e8361",
                            "user_id": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
                            "first_name": "Admin",
                            "last_name": "User",
                            "created": "2021-04-30T05:36:49+00:00",
                            "modified": "2021-04-30T05:36:49+00:00",
                            "avatar": {
                                "url": {
                                    "medium": "https:\/\/localhost:8443\/img\/avatar\/user_medium.png",
                                    "small": "https:\/\/localhost:8443\/img\/avatar\/user.png"
                                }
                            }
                        },
                        "last_logged_in": null
                    }
                },
                {
                    "id": "b5f44bc7-ff41-4605-a0c6-4f1b65ee5383",
                    "aco": "Folder",
                    "aco_foreign_key": "616caedc-14a2-4403-821a-0e11c40fc846",
                    "aro": "User",
                    "aro_foreign_key": "f848277c-5398-58f8-a82a-72397af2d450",
                    "type": 15,
                    "created": "2021-04-30T05:56:06+00:00",
                    "modified": "2021-04-30T05:56:06+00:00",
                    "group": null,
                    "user": {
                        "id": "f848277c-5398-58f8-a82a-72397af2d450",
                        "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                        "username": "ada@passbolt.com",
                        "active": true,
                        "deleted": false,
                        "created": "2021-03-02T05:36:49+00:00",
                        "modified": "2021-03-30T05:36:49+00:00",
                        "profile": {
                            "id": "99522cc9-0acc-5ae2-b996-d03bded3c0a6",
                            "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
                            "first_name": "Ada",
                            "last_name": "Lovelace",
                            "created": "2021-04-30T05:36:49+00:00",
                            "modified": "2021-04-30T05:36:49+00:00",
                            "avatar": {
                                "url": {
                                    "medium": "https:\/\/localhost:8443\/img\/avatar\/user_medium.png",
                                    "small": "https:\/\/localhost:8443\/img\/avatar\/user.png"
                                }
                            }
                        },
                        "last_logged_in": null
                    }
                }
            ],
            "permission": {
                "id": "b5f44bc7-ff41-4605-a0c6-4f1b65ee5383",
                "aco": "Folder",
                "aco_foreign_key": "616caedc-14a2-4403-821a-0e11c40fc846",
                "aro": "User",
                "aro_foreign_key": "f848277c-5398-58f8-a82a-72397af2d450",
                "type": 15,
                "created": "2021-04-30T05:56:06+00:00",
                "modified": "2021-04-30T05:56:06+00:00"
            },
            "folder_parent_id": "907c3f61-f416-5834-86d2-e721501ee493",
            "personal": false
        }
    ]
}
```