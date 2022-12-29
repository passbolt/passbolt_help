[Official Debian Documentation](https://wiki.debian.org/NTP)

A fresh Debian installation should already be properly configured for this. You can confirm this by running:
```
timedatectl status
```
The output should be something like this:
```
               Local time: Tue 2022-12-06 14:30:52 UTC
           Universal time: Tue 2022-12-06 14:30:52 UTC
                 RTC time: Tue 2022-12-06 14:30:53
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
