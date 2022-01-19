---
title: Cloud outage - december 2021
date: 2021-12-15 00:00:00 Z
description: Cloud outage - december 2021
categories: [incidents]
layout: incidents
slug: Cloud outage - december 2021
permalink: /incidents/220211215_Clout-outage
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction

This report explains the timeline and resolution for the issue that led to a 1h downtime of the cloud service on the 
morning of the 15th of December, 2021. 

### What happened

Following a schedule maintenance window for the rollout of v3.4, Passbolt cloud users started experiencing some
performance degradation. After increasing the server resources to give the site reliability engineer some room
to investigate the issue and take the service back online. 
Then the root cause was identified and a fix rolled out the next day.

### Root cause

The performance degradation was due to performance issues introduced by v3.4 which introduced a change of collation
for the primary keys. This triggers a new set of slow queries for some customers with a specific database data
topology, due to an index that was present but not previously in use by the engine. Removing the index solved the issue.

### Lesson learned

The development team is investigating setting up some new tools to work on performance with multiple data sets
that represent a more diverse usage of the cloud. 

### Event timeline

On the 15/12/21 (in CET):
- 6:00 - 8:00: maintenance on passbolt cloud (communicated in advance to customers).
- 9:30 - 10:30: High CPU usage triggering sporadic downtime. Team acknowledge issue on social media.
- From 10:30: Some performance degradations felt by some customers.
- 10:45: Development team starts investigating usage patterns and working on a fix.
- 21:00: A fix is tested. 

On the 16/12/21:
- 10:00: A fix is rolled out.
- 10:10: Service usage resumed to normal.

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}
<div class="tldr message success">
    <h4>Current status:</h4>
    1. Acknowledge issue with reporter<br/>
    2. Get a fix/patch prepared<br/>
    3. Release new version<br/>
    <strong>4. Prepare a report about the issue</strong>
    <h5>Last updated: 2022-01-19 08:30:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}
