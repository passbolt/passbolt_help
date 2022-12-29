[Official Ubuntu Documentation](https://ubuntu.com/server/docs/network-ntp)

Ubuntu uses `chrony` for time synchronization. This package is not installed by default so you'll need to install it.

You can check that your server doesn't have this enabled by running the following:
```
timedatectl status
```
The output should look something like the following:
```
               Local time: Tue 2022-12-06 09:26:53 UTC
           Universal time: Tue 2022-12-06 09:26:53 UTC
                 RTC time: Tue 2022-12-06 09:26:52
                Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: no
              NTP service: inactive
          RTC in local TZ: no
```

The two most important lines here being:
```
System clock synchronized: no
              NTP service: inactive
```

To install `chrony` you'll need to run this command:
```
sudo apt install chrony
```

You can configure which time servers you want to use by editing `/etc/chrony/chrony.conf`

After you are done editing this file run the following to restart `chrony`
```
sudo systemctl restart chrony.service
```

To ensure this is running correctly you can once again run:
```
timedatectl status
```
Your output should now be something like:
```
               Local time: Tue 2022-12-06 09:30:40 UTC
           Universal time: Tue 2022-12-06 09:30:40 UTC
                 RTC time: Tue 2022-12-06 09:30:40
                Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
```
The important lines are:
```
System clock synchronized: yes
              NTP service: active
```
If only one of these has changed try running `timedatectl status` after another minute or two to give it time to be fully correct.
Once those are both correct, congratulations you've gotten NTP correctly set up!
