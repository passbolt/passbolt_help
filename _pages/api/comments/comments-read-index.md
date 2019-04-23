---
title: Browse comments
date: 2019-04-23 14:00:00 Z
layout: api
category: api,comments,read-index
slug: comments-read-index
permalink: /api/comments/read-index
---

To fetch a list of all the comments posted on a Resource:

```
GET /comments/resource/<resourceId>.json?
  api-version=v2
```

### Request parameters

The endpoint accept the following parameters:

<table class="table-parameters">
<thead>
  <tr>
   <th>Param
   </th>
   <th>Description
   </th>
   <th>Required
   </th>
   <th>Type
   </th>
  </tr>
</thead>
<tbody>
  <tr>
   <td>contain
   </td>
   <td>Dictates the fields to be included in the search result
   </td>
   <td>No
   </td>
   <td>Array
   </td>
  </tr>
  <tr>
   <td>contain[creator]
   </td>
   <td>Whether to include the User Id of the user who created the comment.
   </td>
   <td>No
   </td>
   <td>Boolean
   </td>
  </tr>
  <tr>
   <td>contain[modifier]
   </td>
   <td>Whether to include the User Id of the user who modified the comment last.
   </td>
   <td>No
   </td>
   <td>Boolean
   </td>
  </tr>
  </tbody>
</table>

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

Request went through. The response payload will contain a list of matching comments.
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>

The user making the request is not authenticated.
   </td>
  </tr>
  </tbody>
</table>

## Examples
### Request with filters

Arequest to fetch all comments posted on a Resource identified by id ecf0ed85-3bfc-5f45-b11d-74e9a86aa313 and that 
includes information about who created and modified will look like this:

```bash
GET /comments/resource/ecf0ed85-3bfc-5f45-b11d-74e9a86aa313.json?api-version=v2
    &contain[creator]=1
    &contain[modifier]=1
```

### Success response
A successful response will have an array of json objects.
Something like this example below

{% include api/json/comments/comments-index-success.md %}
