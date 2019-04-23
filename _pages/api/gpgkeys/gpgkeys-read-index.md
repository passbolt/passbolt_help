---
title: List all the OpenPGP Keys
date: 2019-04-23 14:00:00 Z
layout: api
category: api,gpgkeys,read-index
slug: gpgkeys-read-index
permalink: /api/gpgkeys/read-index
---

You can get a list of all the GPG keys by making a `GET` request to `/gpgkeys.json` endpoint.

```
GET /gpgkeys.json?api-version=v2
```

### Request Parameters:

The endpoint takes the following parameters

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
   <td>api-version
   </td>
   <td>The API version to target
   </td>
   <td>No
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td>filter
   </td>
   <td>Filters the result based on child params
   </td>
   <td>No
   </td>
   <td>Array
   </td>
  </tr>
  <tr>
   <td>filter[modified-after]
   </td>
   <td>Will only include comments modified after the given date
   </td>
   <td>No
   </td>
   <td>Unix Timestamp
   </td>
  </tr>
</tbody>
</table>

## Examples
### Request with filters

So a request fetch all the OpenPGP Keys
*   That were modified after a given date
*   Using api version v2

Will look like this:

```
GET /gpgkeys.json?api-version=v2
  &filter[modified-after]=1554681600
```

## Success response
A successful response will have an array of json objects. Each representing a GPG Key.

{% include api/json/gpgkeys/gpgkeys-index-success.md %}
