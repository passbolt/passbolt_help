---
title: How to import passwords from a csv or kdbx file
slug: import-passwords
layout: faq
category: start
permalink: /faq/start/:slug
date: 2018-04-23 00:00:00 Z
---

## How to import passwords in passbolt

{% include articles/video.html
    url="/assets/files/import-video-example.mp4"
    mime_type="video/mp4"
    legend="Passbolt GUI - Import passwords"
    width="500px"
%}


### Steps
1.  Click on the "import" button at the top left, next to the "create" button.
2.  Select a file (supported files are kdbx or csv. More details below.)
3.  Click on "continue import"
4.  For kdbx files, you might need to enter a password. Enter it and click "Ok".
5.  The import will start. You will see a progress bar.
6.  At the end of the import, you will see a report. After closing this window, you will see the passwords imported in your workspace.

### Supported file formats
Passbolt import system supports the following file formats:
*  Csv - Lastpass export
*  Csv - 1password export
*  Csv - Keepass export
*  Csv - Dashlane export
*  Csv - Nordpass export
*  Csv - LogMeOnce export
*  Csv - BitWarden export
*  Csv - Firefox platforms export (Mozilla Firefox, Waterfox, Pale Moon...)
*  Csv - Chromium browsers export (Google Chrome, Microsoft Edge, Brave ...)
*  Csv - Safari
*  Kdbx (file format used by Keepass 2.x)

If you'd like to request the support of a specific format, you can open a request on [the community forum](https://community.passbolt.com/c/backlog).

### File format examples

**Csv (Lastpass)**
```
url,username,password,extra,name,grouping,fav
https://test.url,account1,P4ssw0Rd!,,Account1,,0
https://test.url,account1,P4ssw0Rd!,,Account2,,0
,,P4ssw0Rd!,,Account3,,1
```

**Csv (1Password)**
```
Title,Username,URL,Password,Notes,Type
Account1,account1,https://test.url,P4ssw0Rd!,Notes Account2,server
Account2,account2,https://test.url,P4ssw0Rd!,Notes Account2,shell
Account3,,,P4ssw0Rd!,Notes Account3,server
```

**Csv (Keepass / KeepassX)**
```
"Group","Title","Username","Password","URL","Notes"
"My Servers","Account1","account1","P4ssw0Rd!","https://test.url","this is the description"
"My Servers","Account2","account2","P4ssw0Rd!","https://test.url","this is the description"
"My Servers","Account2","","P4ssw0Rd!","https://test.url",""
```

**Csv (Dashlane)**
```
username,username2,username3,title,password,note,url,category,otpSecret
account1,,,Account 1,P4ssw0Rd,"this is the description",https:///test.url,,
account2@domain.tld,,,Account 2,P4ssw0Rd,"this is the description",https://test.url,,
account3@domain.tld,,,Account 3,P4ssw0Rd,,https://test.url,,
```

**Csv (Nordpass)**
```
name,url,username,password,note,folder
Account1,https://test.url,account1,P4ssw0RD!,this is a description,PasswordFolder
Account2,https://test.url,account2,P4ssw0RD!,this is a description,PasswordFolder
Account3,https://test.url,account3,P4ssw0RD!,,,
```

**Csv (LogMeOnce)**
```
"name","url","note","group","username","password","extra"
"Account1","https://test.url","this is the description","My servers","account1","P4ssw0Rd!",""
"Account2","https://test.url","","My servers","account2","P4ssw0Rd!",""
"Account3","https://test.url","this is the description","My servers","account3","P4ssw0Rd!",""
```

**Csv (BitWarden)**
```
folder,favorite,type,name,notes,fields,reprompt,login_uri,login_username,login_password,login_totp
My Servers,1,login,Account1,,,0,https://test.url,account1,P4ssw0Rd!,
My Servers,,login,Account2,,,,https://test.url,account2,P4ssw0Rd!,TOTPSEED1337
My Servers,,login,Account3,This is a description with field,"Field: 1337",,https://test.url,account3,P4ssw0Rd!,
My Servers,,note,Description Name,"This is a description.",,,,,
```

**Csv (Firefox platforms browsers)**
```
"url","username","password"
"https://test.url","Account1",,"P4ssw0Rd!"
"https://test.url","Account2",,"P4ssw0Rd!"
"https://test.url","Account3",,"P4ssw0Rd!"
```

**Csv (Chromium browsers)**
```
name,url,username,password
Account1,https://test.url,account1,P4ssw0Rd!
Account2,https://test.url,account2,P4ssw0Rd!
Account3,https://test.url,account3,P4ssw0Rd!
```

**Csv (Safari)**
```
Title,URL,Username,Password,Notes
Account1,https://test.url,account1,P4ssw0Rd!,this is the description
Account2,https://test.url,account2,P4ssw0Rd!,this is the description
Account3,https://test.url,account3,P4ssw0Rd!,,
```

**Keepass file**

[download example](/assets/files/keepass_file_example.kdbx) (the file is not password protected)

