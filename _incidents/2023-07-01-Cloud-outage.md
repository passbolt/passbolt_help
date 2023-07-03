---
title: Cloud outage
date: 2023-07-03 00:00:00 Z
description: Cloud outage due to routine network component upgrade
categories: [incidents]
layout: incidents
slug: 20230701_cloud-outage
permalink: /incidents/20230701_cloud-outage
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

This report explains the timeline and resolution for the issue that led to a 1h30m downtime of the cloud service 
on the morning of Saturday the 1st of July, 2023.

## What happened
During a routine maintenance of our internal infrastructure the engineering introduced a configuration change that 
rendered some of our proxies unusable.

The incident started at 10:52 AM CET on 01/07/2023 and was confirmed as fixed at 12.26 PM CET.

## Root cause
A minor update of one of our core networking components included a breaking configuration change that was overlooked 
and that should have triggered a different deployment process (where a new component is deployed with the new 
configuration and then the old service is swapped with the new one).

This configuration change was tested on our staging/testing environments but our engineering teams failed to see a 
production specific configuration issue during the code review, triggered by a previous production-only deployment.

Due to the nature of the issue the updated service stopped working and could not get downgraded. A new service with 
the old configuration was then rebuilt and swapped with the non working one. This strategy required changes in the 
DNS which took some time to propagate, thus extending the downtime.

## Lesson learned
Rest assured that our team strives to make passbolt cloud a trusted, resilient and best in class service.

In order to prevent this situation from happening again we have changed the deployment process to promote changes 
tested on staging in a shorter life cycle and better documentation of production-only configuration items to 
mitigate missing information during deployment handovers.

We are also making more strict the policy to make blue green deployments for critical components even for minor 
updates to catch these issues without affecting our customers.


## Event Timeline

- 01/07/2023 - 10:50 - Maintenance starts
- 01/07/2023 - 10:51 - Deployment of the network component update, outage starts
- 01/07/2023 - 11:00 - Attempt to rollback fails
- 01/07/2023 - 11:10 - New service setup starts
- 01/07/2023 - 12:26 - New service is operational, outage ends

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}
<div class="tldr message success">
    <h4>Current status:</h4>
    1. Acknowledge issue with reporter<br/>
    2. Get a fix/patch prepared<br/>
    3. Prepare a report about the issue<br/>
    <strong>4. Feature the incident report</strong>
    <h5>Last updated: 2023-07-03 12:20:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}