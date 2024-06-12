---
title: Cloud outage June 10th
date: 2024-06-12 08:30:00 Z
description: Cloud Performance Degradation June 10th
categories: [incidents]
layout: incidents
slug: 20240610_cloud-performance-degradation
permalink: /incidents/20240610_cloud-performance-degradation
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

### Summary
On June 10th, 2024, a service degradation occurred on Passbolt Cloud between 4:00 PM and 5:15 PM UTC. 
This incident resulted in some users experiencing 404 errors and limited or no access to their organization 
workspace. This incident was triggered by a release performed on the same day that contained some performance 
improvements that proved to be problematic in conjunction with the underlying auto-scaling service configuration.

### Impact
We understand that this service degradation may have disrupted your daily operations, and we sincerely apologize 
for the inconvenience caused.

### Root Cause Analysis
A thorough investigation identified a combination of factors contributing to the incident:
- *Change of Resource Usage*: The deployed applications were experiencing a change in usual resource consumption.
- *Aggressive Scaling Policy*: The recently implemented scaling policy was overly aggressive in resource deallocation.
- *Cluster Topology*: The specific configuration of the underlying cluster exacerbated the resource constraints.

These factors, when combined, triggered a cascading series of failures across various system components, leading to 
the service degradation.

### Resolution
The engineering team promptly rolled back the new release and restarted the 
underlying services to restore service stability.

### Next steps
We are committed to providing a reliable and high-performing cloud service. We will continue to monitor system 
performance closely and implement new preventive measures.

In that purpose, the following internal actions will take place:
- Scaling Policy Review: Our team is actively reviewing and adjusting the scaling policy to ensure optimal resource allocation and prevent future resource contention.
- Application Resource Optimization: We are continuing to investigate opportunities to optimize resource utilization within our applications.
- Cluster Configuration Analysis: The underlying cluster configuration is being evaluated to identify any potential optimizations that could mitigate similar incidents in the future.

Thank you for your patience and understanding.

### Timeline

June 10th, 2024:
- 15:30 CEST: Deployment of a new release that includes performance improvements specific to the cloud.
- 16:05 CEST: Service degradation began.
- 16:10 CEST: Service degradation reported by customers and monitoring tools.
- 16:20 CEST: Incident response team mobilized
- 16:30 CEST: Incident response team starts rolling back the release
- 16:45 CEST: Rollback of the release completed
- 17:10 CEST: Public communication about the incident on public channels
- 17:15 CEST: Remaining affected components are restored in working state
- 17:20 CEST: Service is back to nominal performance.
- 17:40 CEST: End of incident communicated on public channels.

June 11th, 2024:
- 18:00 CEST: Incident response team investigation ends

June 12th, 2024
- 12:00 CEST: Incident report published on the website.

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}
<div class="tldr message success">
    <h4>Current status:</h4>
    1. Acknowledge issue with reporter<br/>
    2. Get a fix/patch prepared<br/>
    3. Prepare a report about the issue<br/>
    <strong>4. Feature the incident report</strong>
    <h5>Last updated: 2024-06-12 10:30:00 CET</h5>
</div>
{% include layout/col_end.html %}
{% include layout/row_end.html %}