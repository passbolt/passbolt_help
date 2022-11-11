---
title: Resources Types
date: 2021-05-26 14:00:00 Z
layout: api
category: api,resource-types
slug: resources
permalink: /api/resource-types
---
The API allows you to know more about the schema of a given [resource](/api/resources) and 
it's associated [secret](/api/secrets).

In passbolt, passwords are split into two different entities: Resources (the metada in clear) and Secrets (the encrypted data).
The resource types define what is included in the resource and what is included in the secret.
This definition, that is part of the resource type, takes the form of [JSON schemas](https://json-schema.org/). 

Since passbolt is end-to-end encrypted the server cannot validate the content of the secrets.
Therefore, it is the responsibility of the clients to check if the secret is deserializable according to
the resource type schema associated with the resource and to choose how to handle that case.

## The Resource Type object

<table class="table-parameters">
    <thead>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
        <th>Format</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique ID of the resource type in UUID format.</td>
        <td>UUID</td>
    </tr>
    <tr>
        <td>slug</td>
        <td>String</td>
        <td>A machine and human readable identifier for the resource type.</td>
        <td>Example: "password-string"</td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>A human readable description of the purpose of the resource type.</td>
        <td>Example: "The original passbolt resource type, where the secret is a non empty string"</td>
    </tr>
    <tr>
        <td>definition</td>
        <td>String</td>
        <td>A description of the schema, e.g. properties and rules.</td>
        <td><a href="https://json-schema.org/">JSON schemas</a></td>
    </tr>
    <tr>
        <td>created</td>
        <td>String</td>
        <td>Datetime when the resource type was created</td>
        <td>
            <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                8601</a>Datetime format<br/>
            2014-02-01T09:28:56.321-10:00
        </td>
    </tr>
    <tr>
        <td>modified</td>
        <td>String</td>
        <td>Datetime when the resource type was last modified</td>
        <td>
            <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
                8601</a>&nbsp;Datetime format<br/>
            2014-02-01T09:28:56.321-10:00
        </td>
    </tr>
    </tbody>
</table>

For example this is the "legacy" default resource type definition, compatible with Passbolt since v1 up to v3:
```
{
    "resource":{
        "type":"object",
        "required":["name"],
        "properties":{
            "name":{
                "type":"string",
                "maxLength":64
            },
            "username":{
                "anyOf":[
                    {"type":"string","maxLength":64},
                    {"type":"null"}]
                },
            "uri":{
                "anyOf":[
                    {"type":"string","maxLength":1024},
                    {"type":"null"}]
                },
            "description":{
                "anyOf":[
                    {"type":"string","maxLength":10000},
                    {"type":"null"}
                ]
            }
        }
    },
    "secret":{
        "type":"string",
        "maxLength":4064
    }
}
```
