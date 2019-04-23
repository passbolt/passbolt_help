---
title: Delete a comment
date: 2019-04-23 14:00:00 Z
layout: api
category: api,comments,delete
slug: comments-delete
permalink: /api/comments/delete
---

A Comment can only be deleted by it’s owner.
A Comment can be deleted subject to relevant permissions by sending a `DELETE` request to `/comments/commentId.json`

```
DELETE /comments/commentId.json?api-version=v2
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

Comment deleted successfully.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>

The commentId supplied is not a valid UUID
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

The comment either does not exist or the user making the request does not have delete permission.
   </td>
  </tr>
</tbody>
</table>
