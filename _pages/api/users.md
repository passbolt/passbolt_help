---
title: Users
date: 2019-04-23 14:00:00 Z
layout: api
category: api,users
slug: users
permalink: /api/users
---

User are entities with the ability to interact with the application.
They are usually represented by one person and have a unique username. 
The User object returned by the API hence contains the relevant associated fields like 
[Gpgkeys](/api/gpgkeys), [Roles](/api/roles), `profile`, `avatar`, etc.

## The User object

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
                Unique ID of the user in UUID format.
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
                Datetime when the user was created
            </td>
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                active
            </td>
            <td>
                Boolean
            </td>
            <td>
                Whether the user is active
            </td>
            <td>
                true/false
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
                Whether the user has been deleted
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
                Datetime when the user was last modified
            </td>
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                username
            </td>
            <td>
                String
            </td>
            <td>
                User's username/email
            </td>
            <td>
                Email
            </td>
        </tr>
        <tr>
            <td>
                role_id
            </td>
            <td>
                String
            </td>
            <td>
                UUID of user's role
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                profile
            </td>
            <td>
                Object
            </td>
            <td>
                User's profile object
            </td>
            <td>
                Check Profile object
            </td>
        </tr>
        <tr>
            <td>
                role
            </td>
            <td>
                Object
            </td>
            <td>
                User's role object
            </td>
            <td>
            Check Role object
            </td>
        </tr>
        <tr>
            <td>
                gpgKey
            </td>
            <td>
                Object
            </td>
            <td>
                User's key object
            </td>
            <td>
            Check GPGKey object
            </td>
        </tr>
        <tr>
            <td>
                last_logged_in
            </td>
            <td>
                String
            </td>
            <td>
                Datetime of last successful login
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
```jsonn
{
    "id": "f848277c-5398-58f8-a82a-72397af2d450",
    "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
    "username": "ada@passbolt.com",
    "active": true,
    "deleted": false,
    "created": "2019-02-17T14:45:22+00:00",
    "modified": "2019-03-17T14:45:22+00:00",
    "profile": {
        "id": "99522cc9-0acc-5ae2-b996-d03bded3c0a6",
        "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
        "first_name": "Ada",
        "last_name": "Lovelace",
        "created": "2019-04-17T14:45:23+00:00",
        "modified": "2019-04-17T14:45:23+00:00",
        "avatar": {
            "id": "6727ccef-a6c4-4c38-ac57-a1152784e0a1",
            "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
            "foreign_key": "99522cc9-0acc-5ae2-b996-d03bded3c0a6",
            "model": "Avatar",
            "filename": "ada.png",
            "filesize": 170049,
            "mime_type": "image\/png",
            "extension": "png",
            "hash": "97e36ab6528e26e3b9f988444ef490f125f49a39",
            "path": "Avatar\/f4\/18\/05\/6727ccefa6c44c38ac57a1152784e0a1\/6727ccefa6c44c38ac57a1152784e0a1.png",
            "adapter": "Local",
            "created": "2019-04-15T14:11:46+00:00",
            "modified": "2019-04-15T14:11:46+00:00",
            "url": {
                "medium": "img\/public\/Avatar\/f4\/18\/05\/6727ccefa6c44c38ac57a1152784e0a1\/6727ccefa6c44c38ac57a1152784e0a1.a99472d5.png",
                "small": "img\/public\/Avatar\/f4\/18\/05\/6727ccefa6c44c38ac57a1152784e0a1\/6727ccefa6c44c38ac57a1152784e0a1.65a0ba70.png"
            }
        }
    },
    "groups_users": [],
    "role": {
        "id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
        "name": "user",
        "description": "Logged in user",
        "created": "2012-07-04T13:39:25+00:00",
        "modified": "2012-07-04T13:39:25+00:00"
    },
    "gpgkey": {
        "id": "04481719-5d9d-5e22-880a-a6b9270601d2",
        "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
        "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----",
        "bits": 4096,
        "uid": "Ada Lovelace \u003Cada@passbolt.com\u003E",
        "key_id": "5D9B054F",
        "fingerprint": "03F60E958F4CB29723ACDF761353B5B15D9B054F",
        "type": "RSA",
        "expires": "2019-08-09T12:48:31+00:00",
        "key_created": "2015-08-09T12:48:31+00:00",
        "deleted": false,
        "created": "2019-04-17T14:45:26+00:00",
        "modified": "2019-04-17T14:45:26+00:00"
    }
}
```