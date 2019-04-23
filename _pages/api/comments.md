---
title: Comments
date: 2019-04-23 14:00:00 Z
layout: api
category: api,comments
slug: comments
permalink: /api/comments
---

The Comments endpoint is used manage comments posted on Resources. 

## The Comment Object

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
                parent_id
            </td>
            <td>
                String
            </td>
            <td>
                Parent comment's UUID for child(nested) comment
            </td>
            <td>
                UUID
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
                UUID of the Resource where the comment is posted
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                content
            </td>
            <td>
                String
            </td>
            <td>
                The comment text.
            </td>
            <td>
                Plaintext
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
                Can only be "Resource"
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
                user_id
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the user
            </td>
            <td>
                UUID
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
                children
            </td>
            <td>
                Array
            </td>
            <td>
                Child(nested) comments
            </td>
            <td>
            Array of Comment objects
            </td>
        </tr>
    </tbody>
</table>
