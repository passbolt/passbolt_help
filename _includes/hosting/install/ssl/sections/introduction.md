It is recommended to use https with passbolt (and, well, pretty much [everything](https://www.eff.org/encrypt-the-web)). 
To setup SSL we need a certificate. Here for the sake of brevity we will create a self-signed certificate. 
Of course you are free to use a [proper free certificate](https://letsencrypt.org/getting-started/) and tidy up the server supported cypher suites.

In the following steps, we’ll generate a self signed certificate and configure {{ include.webserver_name }} and passbolt to use https.