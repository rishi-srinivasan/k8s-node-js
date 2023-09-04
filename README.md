# k8s-node-js
<h1> Kubernetes NodeJs Application <h1>
<h3> Repository contains files from the personal project where a simple node js application deployed using express server, containerized using dockerfile and deployed in kubernetes cluster <h3>

<p>
Steps to recreate:
1. kubectl create deployment k8s-node-js --image=rishi1412/kubernetes-nodejs-app:v1.0
# creates deployment from image in dockerhub repo
2. kubectl expose deployment k8s-node-js --port=3000
# creates cluster IP and exposes deployment
3. kubectl get svc
# shows the service we created along with clusterr ip and deploymemt
4. minikube ssh
# connects to the cluster
5. curl cluster ip:3000
# connects to a pod running inside the cluster and you will be able to see the message from the application
<p>