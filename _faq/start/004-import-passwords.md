---
title: How to import passwords from a csv or kdbx file
slug: import-passwords
layout: faq
category: start
permalink: /faq/start/:slug
date: 2018-04-23 00:00:00 Z
---

## How to import passwords in passbolt

<video controls=""><source src="https://raw.githubusercontent.com/passbolt/passbolt_styleguide/master/src/video/lu_import_passwords_864.mp4" type="video/mp4"></video>

### Steps
1.  Click on the "import" button at the top left, next to the "create" button.
2.  Select a file (supported files are kdbx or csv. More details below.)
3.  Click on "continue import"
4.  For kdbx files, you might need to enter a password. Enter it and click "Ok".
5.  The import will start. You will see a progress bar.
6.  At the end of the import, you will see a report. After closing this window, you will see the passwords imported in your workspace.

### Supported file formats
Passbolt import system supports the following file formats:
*  Kdbx (file format used by Keepass 2.x)
*  Csv - keepass export
*  Csv - 1password export
*  Csv - Lastpass export

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

**Keepass file**

[download example](/assets/files/keepass_file_example.kdbx) (the file is not password protected)

