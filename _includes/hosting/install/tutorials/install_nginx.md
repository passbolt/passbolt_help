Next we will want to install the Nginx webserver that will serve our php application.

```shell
$ {{ include.package_manager }} install nginx -y
$ systemctl start nginx
```

We can see if this worked by opening up the web browser and going to the url: http://localhost (or whatever hostname / ip used by your machine). 
By default nginx stores the web pages in /usr/share/nginx/html/ so we can see and edit the default html page in this directory if needed.