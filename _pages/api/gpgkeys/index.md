---
title: GPG Keys
layout: api
category: api
slug: gpgkeys
permalink: /api/gpgkeys/index.html
---

In order to encrypt information for it’s clients your passbolt server needs their public keys saved in it’s keychain. The keychain lives on the server’s filesystem and is accessed by the web server user. The gpgkeys endpoints let you query the saved keys.

## The GPGKey object

<table class="table-parameters">
    <thead>
        <tr>
            <th>
                Attribute
            </th>
            <th>
                Type
            </th>
            <th>
                Description
            </th>
            <th>
                Format
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                id
            </td>
            <td>
                String
            </td>
            <td>
                Unique ID of the group in UUID format.
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                created
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the record was created
            </td>
            <td>
                <a 
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                            8601</a>Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                key_created
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the key was created
            </td>
            <td>
                <a 
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                            8601</a>Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                bits
            </td>
            <td>
                Number
            </td>
            <td>
                How many bits does the key have
            </td>
            <td>
                e.g.2048
            </td>
        </tr>
        <tr>
            <td>
                deleted
            </td>
            <td>
                Boolean
            </td>
            <td>
                Whether the group has been deleted
            </td>
            <td>
                true/false
            </td>
        </tr>
        <tr>
            <td>
                modified
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the group was last modified
            </td>
            <td>
                <a
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
                            8601</a>&nbsp;Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                key_id
            </td>
            <td>
                String
            </td>
            <td>
                Key ID
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                fingerprint
            </td>
            <td>
                String
            </td>
            <td>
                Key fingerprint
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                type
            </td>
            <td>
                String
            </td>
            <td>
                Key generation algorithm
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                expires
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the key expires
            </td>
            <td>
            <a
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
                            8601</a>&nbsp;Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
    </tbody>
</table>

# GPG Keys:

In order to encrypt information for it’s clients your passbolt server needs their public keys saved in it’s keychain. The keychain lives on the server’s filesystem and is accessed by the web server user. The gpgkeys endpoints let you query the saved keys


## List all GPG keys

You can get a list of all the GPG keys by making a GET request to /gpgkeys.json endpoint.

```
GET /gpgkeys.json
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


Example Request:

So a request fetch all the GPG Keys 	



*   That were modified after a given date
*   Using api version v2

Will look like this

```
http://www.passbolt.test/gpgkeys.json?
  filter[modified-after]=1554681600&
  api-version=v2
```
A successful response will have an array of json objects. Each representing a GPG Key.

```json
{
    "header": {
        "id": "09253c7e-19d8-4638-9860-1c5c7fb13ed9",
        "status": "success",
        "servertime": 1554986192,
        "title": "app_gpgkeys_index_success",
        "action": "a8b75aae-cb86-5fda-a8b3-d36ae6155023",
        "message": "The operation was successful.",
        "url": "\/gpgkeys.json?api-version=v2",
        "code": 200
    },
    "body": [
        {
            "id": "0239c721-8b7d-59fc-9bff-69e75aff349c",
            "user_id": "af5e1f70-a0ee-5b76-935b-c846f8a6a190",
            "armored_key": "-----BEGIN PGP PUBLIC KEY-----",
            "bits": 2048,
            "uid": "Passbolt dummy \u003Cdummy@passbolt.com\u003E",
            "key_id": "9B09131B",
            "fingerprint": "3657D402E639639657E314D1EC7BBEFF9B09131B",
            "type": "RSA",
            "expires": "2022-11-29T05:26:48+00:00",
            "key_created": "2018-11-29T05:26:48+00:00",
            "deleted": false,
            "created": "2019-04-04T12:05:49+00:00",
            "modified": "2019-04-04T12:05:49+00:00"
        },
        {
            "id": "04481719-5d9d-5e22-880a-a6b9270601d2",
            "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
            "armored_key": "-----BEGIN PGP PUBLIC KEY-----",
            "bits": 4096,
            "uid": "Ada Lovelace \u003Cada@passbolt.com\u003E",
            "key_id": "5D9B054F",
            "fingerprint": "03F60E958F4CB29723ACDF761353B5B15D9B054F",
            "type": "RSA",
            "expires": "2019-08-09T12:48:31+00:00",
            "key_created": "2015-08-09T12:48:31+00:00",
            "deleted": false,
            "created": "2019-04-04T12:05:49+00:00",
            "modified": "2019-04-04T12:05:49+00:00"
        },
    ]
}
```

## Find a GPG Key by ID:

You can also query one single GPG key by making a GET request to /gpgkeys/<gpgKeyId>.json.

```
GET /gpgkeys/<gpgKeyId>.json
```


### Possible Responses:

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