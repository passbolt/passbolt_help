### Manually creating first admin user

Once the chart is deployed, you can create your first user by running the following command:

```bash
kubectl exec -it <passbolt-pod-name> -- /bin/bash -c "bin/cake passbolt register_user -u <email> -f <firstname> -l <lastname> -r admin" -s /bin/bash www-data
```

It will output a link similar to the below one that can be pasted on the browser to finalize user registration:
```bash
https://mydomain.com/setup/install/1eafab88-a17d-4ad8-97af-77a97f5ff552/f097be64-3703-41e2-8ea2-d59cbe1c15bc
```
