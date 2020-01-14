---
title: View one resource
date: 2019-04-23 14:00:00 Z
layout: api
category: api,resources,read
slug: resources-read
permalink: /api/resources/read
---
It is possible to get data for a single resource identified by the unique UUID. All you need is to make a GET request to /resources/<resourceId>.json.

```
GET /resources/<resourceId>.json?api-version=v2
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
            Response includes the resource metadata object.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request<br/>
            The resourceId supplied is not a valid UUID</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found<br/>
            The resource either does not exist or the user does not have access permission.</td>
        </tr>
    </tbody>
</table>

## Examples
### Success response

{% include api/json/resources/resources-view-success.md %}
