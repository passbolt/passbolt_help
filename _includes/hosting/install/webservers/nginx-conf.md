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
  root /var/www/passbolt/webroot;

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