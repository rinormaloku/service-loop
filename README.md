The only prerequisite is Istio to be installed on the cluster.

To setup execute:

``` 
$ kubectl apply -f .
```

To build the image execute:

```
docker build -f src/Dockerfile -t $DOCKER_ID/service-loop src/. 
docker push $DOCKER_ID/service-loop  
```

Test by executing:

```
curl http://$INGRESS_IP/a
```