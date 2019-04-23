---
title: View resource permissions
date: 2019-04-23 14:00:00 Z
layout: api
category: api,permissions,read
slug: permissions-read
permalink: /api/permissions/read
---

To get a list of permissions applied on a Resource, you can make the following request:

```
GET /permissions/resource/<resourceId>.json?api-version=v2
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
            Request went through. The response body contains a list of permission objects.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
                If the given resourceId is not a uuid
            </td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found<br/>
                If the resource does not exist
            </td>
        </tr>
    </tbody>
</table>

## Examples
### Success response

Upon success this will return a json response such as:

{% include api/json/permissions/permissions-read-success.md %}
