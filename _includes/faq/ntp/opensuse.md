[Official OpenSUSE Documentation](https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-ntp.html)

To configure NTP on OpenSUSE we will need YaST. YaST is featured in the openSUSE Linux distribution.

To run yast you will need to run this command:
```
sux yast2
```

Once it is running, specify when to start the network time protocol service:

- Only manually

Start the Network Time Protocol service manually

- Synchronize without Daemon

Set the system time periodically without a permanently running Network Time Protocol service. You can set the Interval of the Synchronization in Minutes. 

- Now and on boot
  
Start the Network Time Protocol service automatically when the system is booting. This setting is recommended. 

After this step, you will need to specify the type of configuration source. In the Configuration Source drop-down box, select either Dynamic or Static. Set Static if your server uses only a fixed set of (public) NTP servers. If your internal network offers NTP servers via DHCP, pick Dynamic. 

You need to configure time servers. Time servers for the client to query are listed in the lower part of the NTP Configuration window. Modify this list as needed by clicking Add, Edit, and Delete.

After you clicked *Add* to add a new time server in the address field, type the URL of the time server or pool of time servers with which you want to synchronize the machine time (for example, *europe.pool.ntp.org*). After URL is complete, click on *Test* to verify that it points to a valid time source. 

You can active *Quick initial Sync* to speed up the time synchronization by sending more request at the Network Time Protocol service start or you can active *Start Offline* to speed up the boot time on systems that start the Network Time Protocol service automatically and may not have an internet connection at boot time.

Now that we have configured Network Time Protocol with YaST we need to restart and enable chrony with:
```
sudo systemctl restart chronyd.service
sudo systemctl enable chronyd.service
```