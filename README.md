# k8s-node-js
## Kubernetes NodeJs Application
Repository contains files from the personal project where a simple node js application is created using express server, containerized using dockerfile and deployed in kubernetes cluster.

The simple nodejs web application is connected to another deployment of nginx server and communicates and is made available for public access through load balancer.

reference: YT/@freeCodeCamp and @bstashchuk

Architecture diagram:


dockerhub repositories:

https://hub.docker.com/r/rishi1412/kubernetes-nodejs-app - docker pull rishi1412/kubernetes-nodejs-app
https://hub.docker.com/r/rishi1412/k8s-to-nginx - docker pull rishi1412/k8s-to-nginx


Steps to deploy:

* minikube start --driver=docker
* git clone git@github.com:rishi-srinivasan/k8s-node-js.git
* kubectl apply -f deployment.yaml -f nginx.yaml
* To verify deployment:
  * kubectl exec pod-name -- nslookup nginx
  * kubectl exec pod-name -- wget -qO- http://nginx
