# k8s-node-js
## Kubernetes NodeJs Application
Repository contains files from the personal project where a simple node js application is created using express server, containerized using dockerfile and deployed in kubernetes cluster.

The simple nodejs web application is connected to another deployment of nginx server and communicates and is made available for public access through load balancer.

Architecture diagram:


Steps to recreate:

<!-- creates deployment from image in dockerhub repo -->
* kubectl create deployment k8s-node-js --image=rishi1412/kubernetes-nodejs-app:v1.0
<!-- creates cluster IP and exposes deployment -->
* kubectl expose deployment k8s-node-js --port=3000
<!-- shows the service we created along with clusterr ip and deploymemt -->
* kubectl get svc
<!-- connects to the cluster -->
* minikube ssh
<!-- connects to a pod running inside the cluster and you will be able to see the message from the application -->
* curl cluster ip:3000
<!-- install node-fetch in second container -->
cd k8s-to-nginx && npm install node-fetch


dockerhub repositories:

https://hub.docker.com/r/rishi1412/kubernetes-nodejs-app - docker pull rishi1412/kubernetes-nodejs-app
https://hub.docker.com/r/rishi1412/k8s-to-nginx - docker pull rishi1412/k8s-to-nginx


Steps to deploy:

* minikube start --driver=docker
* git clone git@github.com:rishi-srinivasan/k8s-node-js.git
* cd k8s-nodejs-app && kubectl apply -f deployment.yaml -f nginx.yaml