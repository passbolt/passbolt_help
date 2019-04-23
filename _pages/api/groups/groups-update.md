---
title: Update a group
date: 2019-04-23 14:00:00 Z
layout: api
category: api,groups,update
slug: groups-update
permalink: /api/groups/update
---

A Group can be updated by sending the `PUT` request to `/groups/<groupId>.json`.

```
PUT /groups/<groupId>.json?api-version=v2
```
```json
{
  "name": "newgroup",
  "groups_users": [{
    "user_id": "<existing_userId>",
    "is_admin": true
  }, {
    "user_id": "<new_userId>",
    "is_admin": false
  }],
  "secrets":[{
    "resource_id":"<resource_shared_with_group",
    "user_id":"<new_userId>",
    "data":"-----BEGIN PGP MESSAGE-----"
  }]
}
```

When you update a group which has passwords shared with you also need to provide secrets for the new users. 
The dry-run gives information about this.

A dry run can also be performed before actually attempting to update a group:
```
PUT /groups/<groupId>/dry-run.json?api-version=v2
```

This will check all the constraints and return a 200 OK response if the group can be updated safely.

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
            The group was updated.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
            Some of the data validation failed.</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
    </tbody>
</table>
