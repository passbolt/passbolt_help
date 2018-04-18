Let's install passbolt tables and data in the database.

```shell
$ ./bin/cake passbolt install
```

The install script will ask you to create an admin user. Enter your first name, last name and email. In return, the script will
provide you with an activation link that you will user later to activate and configure your user. You can go to this url now or later, but we
recommend that you configure SSL before.

Optionally you can also run the health check to see if everything is fine.

```shell
$ ./bin/cake passbolt healthcheck
```

You should see a majority of green ok. However, some SSL related alerts should still appear.