---
title: List the OpenPGP Keys
date: 2019-04-23 14:00:00 Z
layout: api
category: api,gpgkeys,read-index
slug: gpgkeys-read-index
permalink: /api/gpgkeys/read-index
---

You can get a list of all the GPG keys by making a `GET` request to `/gpgkeys.json` endpoint.

```
GET /gpgkeys.json
```

### Request Parameters:

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
   <td>filter</td>
   <td>Filters the result based on child params</td>
   <td>No</td>
   <td>Array</td>
  </tr>
  <tr>
   <td>filter[modified-after]</td>
   <td>Will only include keys modified after the given date</td>
   <td>No</td>
   <td>Unix Timestamp</td>
  </tr>
  <tr>
    <td>filter[is-deleted]</td>
    <td>Will only include keys soft-deleted if true, or non soft-deleted otherwise</td>
    <td>No</td>
    <td>Boolean </td>
  </tr>
</tbody>
</table>

## Examples
### Request with filters

So a request which fetch all the OpenPGP Keys
*   That are not soft-deleted
*   That were modified after a given date

Will look like this:

```
GET /gpgkeys.json?
  &filter[modified-after]=1554681600
```

And a request which fetch all the OpenPGP Keys
*   That are soft-deleted

Will look like this:

```
GET /gpgkeys.json?
  &filter[is-deleted]=1
```

## Success response
A successful response will have an array of json objects. Each representing a GPG Key.

{% include api/json/gpgkeys/gpgkeys-index-success.md %}
