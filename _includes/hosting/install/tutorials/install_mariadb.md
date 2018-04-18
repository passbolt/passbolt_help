Then, we can install the database server. We will use mariadb here, but you could also use mysql.

```shell
$ {{ include.package_manager }} install mariadb-server -y
```

Let's make sure that the database is started

```shell
$ systemctl start mariadb
```

By default, MariaDB / MySQL is installed with basic security, and no root password. Let's fix this.

```shell
$ mysql_secure_installation
```

Answer the questions and set a strong root password for the db.

Let's now create a specific passbolt user and database.

```shell
$ mysql -u root -p
mysql > create database passbolt;
mysql > create user passbolt;
mysql > grant all on passbolt.* to 'passbolt'@'localhost' identified by 'strong_db_password';
mysql > flush privileges;
mysql > quit;
```