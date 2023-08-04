---
title: How can I check logs on my server?
slug: logs
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2023-05-22 00:00:00 Z
---

## The importance of the installation method
There are three main types of installations for Passbolt, and that's what you need to know before running one of these commands as they may not work for each installation.
- Package installation ([Debian](/hosting/install/ce/debian/debian.html), [Ubuntu](/hosting/install/ce/ubuntu/ubuntu.html), [OracleLinux](/hosting/install/ce/oraclelinux.html), and so on.)
- [From source](/hosting/install/ce/from-source.html)
- [Docker](/hosting/install/ce/docker.html)

With **package** installation, the files will be split into two different directories, */etc/passbolt* for the configuration files and */usr/share/php/passbolt* for every other files and the CakePHP CLI.

If you did a **from source** installation, the whole directory will be in */var/www/passbolt*.

If you are runnig **docker**, please, refer to the [Troubleshoot Docker](/faq/hosting/troubleshoot-docker) guide as all is explained there. 


## API
### Healthcheck
The healthcheck is used to check whether the Passbolt system is running as expected. It evaluates various aspects of the system to ensure that all components are working properly and configured correctly. It provides a detailed report about important information such as the gpg configuration, the ssl access, database configuration, etc. 

1. Package Installation 

    ```bash
    sudo su -s /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt healthcheck" www-data
    ```

2. From source

    ```bash
    sudo su -s /bin/bash -c "/var/www/passbolt/bin/cake passbolt healthcheck" www-data
    ```

{% include hosting/web-server-for-server-logs.md %}

### Datacheck 
The datacheck is a great tool as it aims to have a look at the data integrity for gpg keys, authentication tokens, groups, resources, etc.

1. Package Installation

    ```bash
    sudo su -s /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt datacheck" www-data
    ```

2. From source

    ```bash
    sudo su -s /bin/bash -c "/var/www/passbolt/bin/cake passbolt datacheck" www-data
    ```

{% include hosting/web-server-for-server-logs.md %}

### Status Report

The status report is in most case the best alternative if you need to gather information from the healthcheck, datacheck, do a cleanup dry-run and retrieve the server logs. 

On top of executing the healthcheck, datacheck and retrieving the server logs one after the other, it also gives important information about the system itself such as the passbolt edition and version, the version of CakePHP and PHP, composer version etc. 

1. Package Installation

    ```bash
    sudo su -s /bin/bash -c "/usr/share/php/passbolt/bin/status-report" www-data
    ```

2. From source

    ```bash
    sudo su -s /bin/bash -c "/var/www/passbolt/bin/status-report" www-data
    ```

{% include hosting/web-server-for-server-logs.md %}

### Server logs

The server logs contains mostly error and warnings such as bad request, invalid requests, applications errors, etc. 

1. Package Installation
    
    ```bash
    sudo su -s /bin/bash -c "cat /var/log/passbolt/error.log" www-data
    ```

2. From source
    ```bash
    sudo su -s /bin/bash -c "cat /var/www/passbolt/logs/error.log" www-data
    ```

{% include hosting/web-server-for-server-logs.md %}

## Browser Extension
### Google Chrome
1. You will need to navigate to your [extensions](chrome://extensions)
2. Activate the Developer mode in the top right corner
3. Look for Passbolt and click details button
4. Look for the Inspect views and the `index.html` link
5. A new window will appear this is the debugger of the browser extension
6. You can see from here, if there is any issue in the `console` tab
7. Go to the `network` tab
8. Try to reproduce the error
9. Export the logs by clicking the **down arrow**

{% include messages/warning.html
    content="**Warning:** HAR files are text files in json format. They contain sensitive data such as your Passbolt main url or your browser version. You can't check by opening them in a text editor."
%}

{%
    include articles/figure.html
    url="/assets/img/help/2023/05/browser-extension-logs.png"
    legend="Browser Extension Network Logs" width="900px"
%}

### Firefox
1. You will need to navigate to your [extensions](about:debugging#/runtime/this-firefox) 
2. Locate Passbolt and click Inspect
3. A new window will appear this is the debugger of the browser extension
4. You can see from here, if there is any issue in the `console` tab
7. Go to the `network` tab
8. Try to reproduce the error
9. Export logs by clicking right on the logs and select **Save all As HAR**

{% include messages/warning.html
    content="**Warning:** HAR files are text files in json format. They contain sensitive data such as your Passbolt main url or your browser version. You can't check by opening them in a text editor."
%}