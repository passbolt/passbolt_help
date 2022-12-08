[Official Fedora Documentation](https://docs.fedoraproject.org/en-US/fedora/latest/system-administrators-guide)

The `chrony` suite is installed by default on some versions of Fedora, but you have two choices the other one being `ntpd`.

Chrony should be considered as best match for the systems which are frequently suspended or otherwise intermittently disconnected from a network.

The NTP daemon (ntpd) should be considered for systems which are normally kept permanently on.

#### Install `chrony` on Fedora

As mentionned previously, chrony suite is installed by default on some versions of Fedora, to ensure that it is, run the following command as `root`:

```
dnf install chrony
```

The default location for the chrony daemon is */usr/sbin/chronyd*. The command line utility will be installed to */usr/bin/chronyc*. 

To check the status of `chrony`, issue the following command:
```
systemctl status chronyd
```

The output should be something like this:
```
chronyd.service - NTP client/server
  Loaded: loaded (/usr/lib/systemd/system/chronyd.service; enabled)
  Active: active (running) since Wed 2013-06-12 22:23:16 CEST; 11h ago
```

If that is not the case, in order to start chrony, issue the following command as `root`:
```
systemctl start chronyd
```

To ensure chrony starts automatically at system start, issue the following command as `root`:
```
systemctl enable chronyd
```

To check if chrony is synchronized, make use of the `tracking` command:
```
chronyc tracking
```

The output should be something like this:
```
Reference ID  : CB00710F (foo.example.net)
Stratum     : 3
Ref time (UTC) : Fri Jan 27 09:49:17 2017
System time   : 0.000006523 seconds slow of NTP time
Last offset   : -0.000006747 seconds
RMS offset   : 0.000035822 seconds
Frequency    : 3.225 ppm slow
Residual freq  : 0.000 ppm
Skew      : 0.129 ppm
Root delay   : 0.013639022 seconds
Root dispersion : 0.001100737 seconds
Update interval : 64.2 seconds
Leap status   : Normal
```

#### Install `ntpd` on Fedora

In order to use `ntpd` the default user space daemon, `chrony`, must be stopped and disable. Issue the following commands as `root`:
```
systemctl stop chronyd
```

To prevent it restarting at system start, issue the following command as `root`:
```
systemctl disable chronyd
```

To check the status of chronyd, issue the following command:
```
systemctl status chronyd
```

To check if ntpd is istnalled, enter the following command as `root`:
```
dnf install ntp
```

To enable ntpd at system start, enter the following command as root:
```
systemctl enable ntpd
```

To check if ntpd is running and configured to run at system start, issue the following command:
```
systemctl status ntpd
```

To obtain a brief status report from `ntpd`, issue the following command:
```
ntpstat
```

The output should be something like this:
```
synchronised to NTP server (10.5.26.10) at stratum 2
  time correct to within 52 ms
  polling server every 1024 s
```
