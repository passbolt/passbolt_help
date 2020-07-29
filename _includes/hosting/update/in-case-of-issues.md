## Troubleshooting

#### Verifying the status of the application
Optionally, you can login as an administrator and check the status on the healthcheck page:

{% include articles/figure.html
    url="/assets/img/screenshots/AD_healthcheck.jpg"
    legend="Example of healthcheck screen"
%}

You can also run the following command:
```bash
$ sudo -H -u www-data bash -c "./bin/cake passbolt healthcheck"
```

#### If you run into some issues

If you run into some issues:
* Make a copy or screenshot of the errors messages displayed on the screen
* Check for error message in the `logs` directory
* Check for error message in the browser console 
* Checkout the previous working version using git
* Drop the database and load your backup data to restore to a previously working version
* Note down the the details of you environment: your OS, php, mysql environment versions.

Where to get help:
* If you are a Passbolt Pro Edition subscriber send us an [email](mailto:contact@passbolt.com) with the details.
* If you are a Passbolt Community Edition user you can open new thread on the [community forum](https://community.passbolt.com/c/installation-issues).

The more information you provide about what you did, what you tried, how your environment look like,
the easiest it will be for people to help you.
