---
title: Permission
date: 2019-04-23 14:00:00 Z
layout: api
category: api,permissions
slug: permissions
permalink: /api/permissions
---

Permission endpoints are used to manage permissions on a Resource.

## The Permission object

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
                Unique ID of the permission object in UUID format.
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                aco
            </td>
            <td>
                String
            </td>
            <td>
                The ACO for this permisison. Always "Resource"
            </td>
            <td>
                String
            </td>
        </tr>
        <tr>
            <td>
                aco_foreign_key
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the Resource for this permission
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                aro
            </td>
            <td>
                String
            </td>
            <td>
                The ARO for this permisison. Can be "User" or "Group"
            </td>
            <td>
                String
            </td>
        </tr>
        <tr>
            <td>
                aro_foreign_key
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the User/Group for this permission
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                type
            </td>
            <td>
                Number
            </td>
            <td>
                Permission type<br/>
                <ul>
                    <li>1 = Read</li>
                    <li>7 = Update</li>
                    <li>15 = Owner</li>
                </ul>
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
