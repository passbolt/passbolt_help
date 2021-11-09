---
title: Folders
date: 2021-04-30 14:00:00 Z
layout: api
category: api,folders
slug: folders
pro: true
permalink: /api/folders
---
The API allows you to create, update, delete, and share folders.
These endpoints are currently only available in the pro version.

Folders can be either shared or personal. Whether they are personal or shared depends on their permissions.
One folder (or resource) can only be in one folder for a given user perspective. However, a folder can be in 
multiple parent folder if you look at all users as a whole. This is to allow users to re-organize folders 
shared with them in a way that makes sense to them.

A given folder visibility in the tree is therefore dependent on multiple factors, including if the parent 
folder is also shared.

You can learn more about the folder dynamics in this 
[dedicated blog post](https://medium.com/passbolt/introducing-the-new-folders-feature-77366ae59315).

## The Folder object

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
        <td>Unique ID of the folder in UUID format.</td>
        <td>UUID</td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>Folder name</td>
        <td>Utf8 extended, Not unique, max 64 characters</td>
    </tr>
    <tr>
        <td>created</td>
        <td>String</td>
        <td>Datetime when the folder was created</td>
        <td>
            <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                8601</a>Datetime format<br/>
            2014-02-01T09:28:56.321-10:00
        </td>
    </tr>
    <tr>
        <td>modified</td>
        <td>String</td>
        <td>Datetime when the folder was modified</td>
        <td>
            <a href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                8601</a>Datetime format<br/>
            2014-02-01T09:28:56.321-10:00
        </td>
    </tr>
    <tr>
        <td>created_by</td>
        <td>String</td>
        <td>UUID of the user who created the folder</td>
        <td>UUID</td>
    </tr>
    <tr>
        <td>modified_by</td>
        <td>String</td>
        <td>UUID of the user who modified the folder</td>
        <td>UUID</td>
    </tr>
    <tr>
        <td>folder_parent_id</td>
        <td>String</td>
        <td>UUID of the folder contains this folder.</td>
        <td>UUID or null if at the root</td>
    </tr>
    <tr>
        <td>personal</td>
        <td>Boolean</td>
        <td>Whether the folder has been shared with someone.</td>
        <td>true/false</td>
    </tr>
    </tbody>
</table>

## The Resource object

On top of that, when the folder plugin is enabled the resource object also get decorated with 
an extra `folder_parent_id` field. Similarly there is `move` endpoint added for resources.

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
        <td>folder_parent_id</td>
        <td>String</td>
        <td>UUID of the folder contains this folder.</td>
        <td>UUID or null if at the root</td>
    </tr>
    </tbody>
</table>
