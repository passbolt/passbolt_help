---
title: Find a OpenPGP Key by id
date: 2019-04-23 14:00:00 Z
layout: api
category: api,gpgkeys,read
slug: gpgkeys-read-index
permalink: /api/gpgkeys/read
---

You can also query one single GPG key by making a GET request to /gpgkeys/<gpgKeyId>.json.

```
GET /gpgkeys/<gpgKeyId>.json
```

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
   The request was successful. Response includes the single GPG Key object.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   When gpgKeyId is not valid UUID
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found<br/>
   A GPG Key for the given gpgKeyId is not found.
   </td>
  </tr>
  </tbody>
</table>

## Examples
### Success example
```json
{
    "header": {
        "id": "cc867d1d-a285-4caf-91dc-ea5b7423c198",
        "status": "success",
        "servertime": 1556048915,
        "title": "app_gpgkeys_view_success",
        "action": "f07aa7d7-410d-5c49-bd11-407788f0e1b4",
        "message": "The operation was successful.",
        "url": "\/gpgkeys\/0239c721-8b7d-59fc-9bff-69e75aff349c.json?api-version=v2",
        "code": 200
    },
    "body": {
        "id": "0239c721-8b7d-59fc-9bff-69e75aff349c",
        "user_id": "af5e1f70-a0ee-5b76-935b-c846f8a6a190",
        "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----",
        "bits": 2048,
        "uid": "Passbolt dummy \u003Cdummy@passbolt.com\u003E",
        "key_id": "9B09131B",
        "fingerprint": "3657D402E639639657E314D1EC7BBEFF9B09131B",
        "type": "RSA",
        "expires": "2022-11-29T05:26:48+00:00",
        "key_created": "2018-11-29T05:26:48+00:00",
        "deleted": false,
        "created": "2019-04-17T14:45:26+00:00",
        "modified": "2019-04-17T14:45:26+00:00"
    }
}
```