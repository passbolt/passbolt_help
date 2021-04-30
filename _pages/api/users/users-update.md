---
title: Users Update
date: 2019-04-23 14:00:00 Z
layout: api
category: api,users,update
slug: users-update
permalink: /api/users/update
---

## Update a User

A User can be updated by sending the `PUT` request to `/users/<userId>.json`.
```
PUT /users/<userId>.json
```

The request body contains the new data to be updated. The request body schema is same as that 
of creating a new User with the exception of the email/username field which can not be updated.

A user can update themselves. Then can change their first name and last name but not their role.
An administrator can update their role. No one can update the username. If a user need to change
their username, one will need to create a new user for this given email.

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
   <td>OK<br/>The User was created. The response body will contain the newly created user object</td>
  </tr>
  <tr>
   <td>400</td>
   <td>Bad Request<br/>Some of the data validation failed.
   </td>
  </tr>
  <tr>
   <td>403</td>
   <td>Authentication Failure<br/>The user making the request is not authenticated</td>
  </tr>
</tbody>
</table>
