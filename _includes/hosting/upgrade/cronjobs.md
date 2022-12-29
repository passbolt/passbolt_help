As you are upgrading from CE to Pro you will need to make sure you don't have duplicate cronjobs. 

You can do this by checking `/etc/cron.d/`

You may see:
```
/etc/cron.d/passbolt-ce-server
/etc/cron.d/passbolt-pro-server 
```

If this is the case you'll want to run:
```
rm /etc/cron.d/passbolt-ce-server
```

As this will clear out the no longer needed CE job to send emails. If you leave this you may experience receiving duplicate emails.

The other regularly occuring job which you can remove will be under `/etc/logrotate.d/`

You may see:
```
/etc/logrotate.d/passbolt-ce-server
/etc/logrotate.d/passbolt-pro-server
```

If this is the case you'll want to run:
```
rm /etc/logrotate.d/passbolt-ce-server
```

This will clean up the no longer needed log rotation job.