---
title: Resources
date: 2019-04-23 14:00:00 Z
layout: api
category: api,resources
slug: resources
permalink: /api/resources
---
The API allows you to create, delete, and update your passwords. 
You can retrieve individual passwords as well as a list of all your passwords.

In passbolt, passwords are split into two different entities: Resources and Secrets. Passwords metadata are 
internally known as Resources and are represented as one object containing the name, username, the URL amongst 
other fields.

The actual password is part of the [Secrets](/api/secrets) entity. It can be accessed via the Resource object association or
individually. In any case the access will be logged in the system.

## The Resource object

{% include api/tables/resources/object.html %}
