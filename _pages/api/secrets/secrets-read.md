---
title: View a secret
date: 2019-04-23 14:00:00 Z
layout: api
category: api,secrets,read
slug: secrets-read
permalink: /api/secrets/read
---

To query a resource’s secrets (encrypted password in an ASCII armored format) you can make the following request:

```
GET /secrets/resource/<resourceId>.json?api-version=v2
```

Please note that the returned payload is encrypted using the user making the request public key. 
To retrieve the plaintext password, you must decrypt it using the associated secret key.

### Example Request

So to get secret for the resource identified by `8e3874ae-4b40-590b-968a-418f704b9d9a` will look like 

```
http://www.passbolt.test/secrets/resource/8e3874ae-4b40-590b-968a-418f704b9d9a.json?api-version=v2
```

Upon success this will return a payload like this

{% include api/json/secrets/secrets-view-success.md %}

Here the string under the key “data” is the encrypted plaintext password.
