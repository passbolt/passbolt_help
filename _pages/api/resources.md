---
title: Resources
date: 2021-01-18 14:00:00 Z
layout: api
category: api,resources
slug: resources
permalink: /api/resources
---
The API allows you to create, update, delete, and share your passwords.
You can list of all your passwords as well as retrieve individual passwords.

In passbolt, passwords are split into two different entities: Resources and Secrets. 
The Resource entity is an object which represents a password's metadata and contains items such as 
the searchable password name, the associated username, the URL where the password is used, in addition to other fields.

The [Secret](/api/secrets) entity is the actual password and optionally other secret information such as the 
encrypted description. Secrets can be accessed via its associated Resource  object or individually. In either case, 
the access will be logged in the system.

The definition of what is included in the resource and what is included in the secret is described using 
[resource types](/api/resource-types) which take the form of JSON schemas. 

## The Resource object

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
        <td>Unique ID of the resource in UUID format.</td>
        <td>UUID</td>
    </tr>
    <tr>
        <td>created</td>
        <td>String</td>
        <td>Datetime when the resource was created</td>
        <td>
            <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                8601</a>Datetime format<br/>
            2014-02-01T09:28:56.321-10:00
        </td>
    </tr>
    <tr>
        <td>created_by</td>
        <td>String</td>
        <td>UUID of the user who created the resource</td>
        <td>UUID</td>
    </tr>
    <tr>
        <td>creator</td>
        <td>Object</td>
        <td>Object containing the user details of the creator</td>
        <td>
            <a href="/api/users#the-user-object">User object</a>
        </td>
    </tr>
    <tr>
        <td>deleted</td>
        <td>Boolean</td>
        <td>Whether the resource has been deleted</td>
        <td>true/false</td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>Resource description</td>
        <td>
        </td>
    </tr>
    <tr>
        <td>favorite</td>
        <td>Object</td>
        <td>Favorite details of the resource</td>
        <td>
            <a href="/api/favorites#the-favorite-object">Favorite object</a>
        </td>
    </tr>
    <tr>
        <td>modified</td>
        <td>String</td>
        <td>Datetime when the resource was last modified</td>
        <td>
            <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
                8601</a>&nbsp;Datetime format<br/>
            2014-02-01T09:28:56.321-10:00
        </td>
    </tr>
    <tr>
        <td>modified_by</td>
        <td>String</td>
        <td>UUID of the user who last modified the resource</td>
        <td>UUID</td>
    </tr>
    <tr>
        <td>modifier</td>
        <td>Object</td>
        <td>Object containing the user details of the modifier</td>
        <td>
            <a href="/api/users#the-user-object">User object</a>
        </td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>Resource Name</td>
        <td>
        </td>
    </tr>
    <tr>
        <td>permission</td>
        <td>Object</td>
        <td>Permission details as applied on the resource</td>
        <td>
            <a href="/api/permissions#the-permission-object">Permission object</a>
        </td>
    </tr>
    <tr>
        <td>uri</td>
        <td>String</td>
        <td>URL/URI for this login</td>
        <td></td>
    </tr>
    <tr>
        <td>username</td>
        <td>String</td>
        <td>Username to be used for this login</td>
        <td></td>
    </tr>
    <tr>
        <td>resource_type_id</td>
        <td>String</td>
        <td>The resource type id</td>
        <td>UUID</td>
    </tr>
    <tr>
        <td>folder_parent_id<span class="pill">PRO</span></td>
        <td>String|null</td>
        <td>The folder containing the resource</td>
        <td>UUID|null</td>
    </tr>
    </tbody>
</table>
