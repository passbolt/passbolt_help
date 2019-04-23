---
title: OpenPGP Keys
date: 2019-04-23 14:00:00 Z
layout: api
category: api,gpgkeys
slug: gpgkeys
permalink: /api/gpgkeys
---

In order to encrypt information, the server (see [Authentication](/api/authentication)) and the clients needs the user public keys. 
These OpenPGP endpoints let you query the saved keys.

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
                armored_key
            </td>
            <td>
                String
            </td>
            <td>
                Key data
            </td>
            <td>
                The original OpenPGP key format is binary, which is not very readable.
                The ASCII armored is a binary-to-textual encoding.
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
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
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
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
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
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
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
                Key id shorthand. Not secure to be used as primary identifier, use fingerprint instead.
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
                Key generation algorithm. RSA by default.
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
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
    </tbody>
</table>

## Example
```json
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
}
```
