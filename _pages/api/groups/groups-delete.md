---
title: Delete a group
date: 2019-04-23 14:00:00 Z
layout: api
category: api,groups,delete
slug: groups-delete
permalink: /api/groups/delete
---

Only a group manager or a user with administrator role can delete a group.
A Group cannot be deleted as long as it is the **sole owner** of a shared resource.
A Group can be deleted subject to relevant permissions by sending a `DELETE` request to `/groups/<groupId>.json`

```
DELETE /groups/<groupId>.json?api-version=v2
```

A dry run can also be performed before actually attempting to delete a group. 
This works as follow:
```
DELETE /groups/<groupId>/dry-run.json?api-version=v2
```

This will check all the constraints and return a 200 OK response if the group can be deleted safely.

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
   Group deleted successfully.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   The groupId supplied is not a valid UUID
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>
   The user making the request does not have the Admin role.
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found<br/>
   The group either does not exist or the user making the request does not have delete permission.
   </td>
  </tr>
  </tbody>
</table>
