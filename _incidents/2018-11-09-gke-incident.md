---
title:
date: 2018-11-09 00:00:00 Z
description:
categories: [incidents]
layout: incidents
slug: 2018-11-09 XSS on resource URLs
permalink: /incidents/20181109_gke_incident
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}
## Summary

### What happened?

On Friday 9th of November 2018 6.00 AM, a routinary update operation of a minor version of our Kubernetes 
infraestructure reported unexpected errors leading to passbolt.com and demo.passbolt.com being unaccessible. 
The cluster update process is automated as part of Google Kubernetes Engine service that we use. Our team 
contacted Google support team to fix the issue without success leading us to fail over a completely new cluster. 
At 11.27 AM passbolt.com comes back online.

### What is the current status?

We are still working actively with Google Engineers to identify the root cause of the problem and will publish 
updates as soon as we have them.

### Why was this happening?

It is still uncertain what happened. There are a few hypothesis on several kubernetes components we use were 
conflicting and preventing the cluster to update and locking it on a "repair" mode endlessly. GKE and GCP were 
experiencing [service disruptions](https://status.cloud.google.com/incident/container-engine/18005) that could be 
related with our affected resources. Again we will post more information as we know it.

### What does it mean for passbolt security?

Essentially nothing as it was an update problem.

### What are we doing to prevent this to happen again?

We are improving our disaster recovery processes and architecture in order to reduce the downtime in events like these.

### Event timeline

*   2018-11-09 6:00 AM CET: Unusual number of alerts
*   2018-11-09 6:08 AM CET: Pingdom services reporting sites down
*   2018-11-09 6:08 AM CET: On call engineer checks that the GKE update process is ongoing and waits for a few minutes until situation is stabilized
*   2018-11-09 6:10 AM CET: After a few a minutes on call engineer checks unusual spike of containers restarting and crashinglooping
*   2018-11-09 6.30 AM CET: the problem is escalated to SRE team
*   2018-11-09 7:30 AM CET: First strategy is to try to fix the current cluster
*   2018-11-09 8:00 AM CET: Start called google support engineers
*   2018-11-09 8:45 AM CET: Started failover process to a new cluster
*   2018-11-09 11:27 AM CET: Services back online

{% include date/updated.html %}
{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

<div class="tldr message success">
    <h4>Current status:</h4>
    1. Restore passbolt.com and demo.passbolt.com services<br>
    2. Pairing with Google support for further investigation on the root cause<br>
    3. Investigation closed.
    <h5>Last updated: 2018-11-09 11:27:00 CET</h5>
</div>

{% include layout/col_end.html %}
{% include layout/row_end.html %}
