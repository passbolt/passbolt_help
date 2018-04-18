For nginx to work with passbolt we need to edit its configuration file to point to the passbolt folder (which will be created later) and rewrite rules.
We also consider that passbolt will be reachable on the hostname `passbolt.dev`.

For now, we will configure it without SSL for the sake of keeping it simple. 

```shell
$ vi /etc/nginx/conf.d/default.conf
```

Below is an example of configuration you can use in `/etc/nginx/conf.d/default.conf`

```
server {
  listen 80;
  server_name passbolt.dev;
  client_body_buffer_size     100K;
  client_header_buffer_size   1k;
  client_max_body_size        100k;
  client_body_timeout   10;
  client_header_timeout 10;
  keepalive_timeout     5 5;
  send_timeout          10;
  root /var/www/passbolt;
# X-Frame-Options is to prevent from clickJacking attack
  add_header X-Frame-Options SAMEORIGIN;
#  disable content-type sniffing on some browsers.
  add_header X-Content-Type-Options nosniff;
# This header enables the Cross-site scripting (XSS) filter
  add_header X-XSS-Protection "1; mode=block";

location / {
    try_files $uri $uri/ /index.php?$args;
    index index.php;
  }
location ~ \.php$ {
    fastcgi_index           index.php;
    fastcgi_pass            127.0.0.1:9000;
    fastcgi_split_path_info ^(.+\.php)(.+)$;
    include                 fastcgi_params;
    fastcgi_param           SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_param           SERVER_NAME $http_host;
  }
location ~* \.(jpe?g|woff|woff2|ttf|gif|png|bmp|ico|css|js|json|pdf|zip|htm|html|docx?|xlsx?|pptx?|txt|wav|swf|svg|avi|mp\d)$ {
    access_log off;
    log_not_found off;
    try_files $uri /webroot/$uri /index.php?$args;
  }
}
```

