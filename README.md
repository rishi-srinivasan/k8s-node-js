# k8s-node-js
## Kubernetes NodeJs Application
Repository contains files from the personal project where a simple node js application deployed using express server, containerized using dockerfile and deployed in kubernetes cluster

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