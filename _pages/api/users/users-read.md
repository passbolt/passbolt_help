---
title: View a users record 
date: 2019-04-23 14:00:00 Z
layout: api
category: api,users,read
slug: users-read
permalink: /api/users/read
---

You can request information for a given user using:
```
GET /users/<userId>.json?api-version=v2
```

Alternatively you can request information about the current user using:
```
GET /users/me.json?api-version=v2
```

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
            Response includes the user object.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
            The user id supplied is not a valid UUID</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found<br/>
            The users either does not exist.</td>
        </tr>
    </tbody>
</table>

## Examples
### Success response

{% include api/json/users/users-read-success.md %}
