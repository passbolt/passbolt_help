---
title: Favorites
date: 2019-04-23 14:00:00 Z
layout: api
category: api,favorites
slug: favorites
permalink: /api/favorites
---

The Favorite endpoints are used to add or remove a [Resource](/api/resources) from your favorites.

## The Favorite object

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
                Unique ID of the favorite object in UUID format.
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
                Datetime when the resource was created
            </td>
           
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                foreign_key
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the Resource to add
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                foreign_model
            </td>
            <td>
                String
            </td>
            <td>
                The Object the favorites is associated with. This can only be "Resource" at the moment.
            </td>
            <td>
                String
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
                Datetime when the resource was last modified
            </td>
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
    </tbody>
</table>

### Examples
```json
{
    "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
    "foreign_key": "4d7adb92-0d85-56d7-8b92-e2b919ef8eb8",
    "foreign_model": "Resource",
    "created": "2019-04-12T07:58:36+00:00",
    "modified": "2019-04-12T07:58:36+00:00",
    "id": "288050d2-25b0-4c04-a959-2fc6f4011208"
}
```