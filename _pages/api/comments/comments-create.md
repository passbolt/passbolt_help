---
title: Create a comment
date: 2019-04-23 14:00:00 Z
layout: api
category: api,comments,create
slug: comments-create
permalink: /api/comments/create
---

To create a new comment on a resource, make a POST request with the comment data in request body. 
And a valid request will look like:

```
POST /comments/resource/<resourceId>.json?api-version=v2
```
```json
{
  "content": "Comment posted via passbolt API"
}
```

## Request data

The request body expects the following parameters:

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
   <td>Bad Request<br/>

Some of the data validation failed.
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>

The user making the request is not authenticated
   </td>
  </tr>
</tbody>
</table>

## Examples

### Validation error response

A successful request must pass all the validation checks. For example sending a blank request body will return

{% include api/json/comments/comments-create-validation-error.md %}
