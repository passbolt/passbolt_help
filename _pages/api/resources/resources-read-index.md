---
title: Browse all resources
date: 2019-04-23 14:00:00 Z
layout: api
category: api,resources,read-index
slug: resources-read-index
permalink: /api/resources/read-index
---

To fetch a list of all the password the user has access to, make the following request:
```
GET /resources.json?api-version=v2
```

### Request Parameters

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
            <td>api-version</td>
            <td>The API version to target.</td>
            <td>No</td>
            <td>string</td>
        </tr>
        <tr>
            <td>filter[]</td>
            <td>Controls the fields that could be returned</td>
            <td>No</td>
            <td>Array</td>
        </tr>
        <tr>
            <td>filter[is-favorite]</td>
            <td>Return the results that are marked as favorite.</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>filter[is-shared-with-group]</td>
            <td>Return the results that are shared with the given Group UUID.</td>
            <td>No</td>
            <td>UUID</td>
        </tr>
        <tr>
            <td>filter[is-owned-by-me]</td>
            <td>Return the results that are owned by me.</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>filter[is-shared-with-me]</td>
            <td>Return the results that are shared with me.</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>filter[has-id][]</td>
            <td>Return the results for the given resource UUID(s).</td>
            <td>No</td>
            <td>UUID</td>
        </tr>
        <tr>
            <td>contain[]</td>
            <td>Controls the fields that must be returned.</td>
            <td>No</td>
            <td>Array</td>
        </tr>
        <tr>
            <td>contain[creator]</td>
            <td>Whether or not to include the resource creator.</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[modifier]</td>
            <td>Whether or not to include the modifier detail for this resource</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[favorite]</td>
            <td>Whether or not to include the favorite detail for this resource</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[permission]</td>
            <td>Whether or not to include the permission detail for this resource</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>contain[tag]</td>
            <td>Whether or not to include the tags for this resource</td>
            <td>No</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>order[]</td>
            <td>How should the results be sorted. For example Resource.modified DESC</td>
            <td>No</td>
            <td>ASC|DESC </td>
        </tr>
    </tbody>
</table>

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
            Request went through. The response payload will contain a list of resources.</td>
        </tr>
        <tr>
            <td>400</td>
            <td>
                Bad Request<br/>
                When either of the order parameters are invalid.
            </td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authentication Failure<br/>
            The user making the request is not authenticated.</td>
        </tr>
    </tbody>
</table>


## Examples
### Filtered request

It is possible to adjust the request response for example to 
*   include `creator`, `favorite`, `modifier`, `permission` and `tag`
*   Sort DESC by resource modification datetime
*   Filter by `is-favorite`, `is-shared-with-group`, `is-owned-by-me`, `is-shared-with-me` and `has-id`
*   Using api-version v2

Such request will look like this:

```
GET /resources.json?api-version=v2
        &contain[creator]=1
        &contain[favorite]=1
        &contain[modifier]=1
        &contain[permission]=1
        &contain[tag]=1
        &order[]=Resource.modified DESC
```

### Success response
A successful response will have an array of json objects. Each representing a single resource. Something like this example below

{% include api/json/resources/resources-index-success-contain.md %}
