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

In passbolt, passwords are split into two different entities: Resources and Secrets. The Resource entity is an object which represents a password's metadata and contains items such as the searchable password name, the associated username, the URL where the password is used, in addition to other fields.

The [Secret](/api/secrets) entity is the actual password. It can be accessed via its associated Resource object or individually. In either case, the access will be logged in the system.

## The Resource object

{% include api/tables/resources/object.html %}
