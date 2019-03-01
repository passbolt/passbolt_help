Let's add the rewrite and SSL rules and certificates.
```shell
$ vi /etc/nginx/conf.d/default.conf
```

Add this to your file, or replace the whole current content.
```
server {
  listen 443;
  server_name passbolt.dev;
  ssl on;
  ssl_certificate     /etc/ssl/certs/passbolt.crt;
  ssl_certificate_key /etc/ssl/certs/passbolt.key;
  ssl_protocols TLSv1.2;
  ssl_prefer_server_ciphers on;
  ssl_ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS;
  ssl_session_tickets off;
  root /var/www/passbolt;
  
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