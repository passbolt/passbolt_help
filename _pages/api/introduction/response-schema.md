---
title: Response Schema
layout: api
category: api
slug: response-schema
permalink: /api/introduction/response-schema
---

passbolt API endpoints return data in an envelope with “header” and “body” properties. The “header” contains response metadata like response code, server_time, error messages etc. and the “body” contains the actual payload. So for example requesting a single resource by id will result in something like


{% include articles/figure.html
    url="/assets/img/help/2019/04/image1.png"
    legend="HTTP Response Schema"
%}

## Error response schema

An unsuccessful operation will result in an error response. The error response will follow the same as above mentioned “header” and “body” properties scheme. Only this time the body will have the error details. The response body will be a json object with key for each data item that failed validation. 

{% include articles/figure.html
    url="/assets/img/help/2019/04/image12.png"
    legend="HTTP Error Schema"
%}

As you can see, the response body contains two keys, “name” and “secrets” as they failed some validation rules. Further, they also have their own json object with a key (_required) that represents the validation rule that failed and a value (“A name is required”) the actual error message.