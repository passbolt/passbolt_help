---
title: Groups
date: 2019-04-23 14:00:00 Z
layout: api
category: api,groups
slug: groups
permalink: /api/groups
---

Groups are logical collection of users. They can be used for example to represents departments or projects in an organization. 
They are especially useful when you want to share [Resources](/api/resources) with multiple [Users](/api/users) at once.

## The Group object

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
                Datetime when the group was created
            </td>
            <td>
                <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO 8601</a>
                Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                created_by
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the user who created the group
            </td>
            <td>
                UUID
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
                modified_by
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the user who last modified the group
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                name
            </td>
            <td>
                String
            </td>
            <td>
                Group Name
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>
