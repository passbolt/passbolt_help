---
title: Update a comment
date: 2019-04-23 14:00:00 Z
layout: api
category: api,comments,update
slug: comments-update
permalink: /api/comments/update
---

In order to be able to update, the user making the request must be the owner of that comment.
A Comment can be updated by sending the PUT request:

```
PUT /comments/<commentId>.json?api-version=v2
```
```json
{
  "content": "Updated comment content"
}
```

The request body contains the new data to be updated. 

### Request data

The request body schema is same as that of [creating a new Comment](/api/comments/create).

{% include api/tables/comments/request-data.html %}

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
The Comment was created. The response body will contain the newly created comment object
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request
      <ul>
        <li>The commentId is not a valid UUID</li>
        <li>Some of the data validation failed.</li>
      </ul>
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
   A Comment with the given commentId was not found.
   </td>
  </tr>
</tbody>
</table>

