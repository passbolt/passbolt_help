## Prerequisites

For this tutorial, you will need:
{% if distributionLabel == 'Raspberry' %}
- Any Raspberry PI from zero to 4
- A minimal [Raspberry Pi OS Lite (formerly called Raspbian)](https://www.raspberrypi.com/software/operating-systems/) server or any OS based on Debian 11 Bullseye.
{% else %}
- A minimal {{ distributionLabel }} {{ distributionVersion }}  server.
{% endif %}
- A domain / host name pointing to your server, or at least being able to reach your server through a static IP address.
- a working SMTP server for email notifications
* a working NTP service to avoid GPG authentication issues

The recommended server requirements are:
- 2 cores
- 2GB of RAM

FAQ pages:

* [Set up NTP](/faq/hosting/set-up-ntp)
* [Firewall rules](/faq/hosting/firewall-rules){:target="_blank"}
* [Considerations about entropy](/faq/hosting/why-haveged-virtual-env){:target="_blank"}

{% include messages/warning.html
    content="**Please note:** It is important that you use a vanilla server with no other services or tools already installed on it. The install scripts could potentially damage any existing data on your server."
%}

{% include messages/notice.html
    content="<b>Pro tip:</b> If you are going to manually provision SSL certificates you may want to do that before beginning!"
%}