# k8s-node-js
<h1> Kubernetes NodeJs Application <h1>
<h3> Repository contains files from the personal project where a simple node js application deployed using express server, containerized using dockerfile and deployed in kubernetes cluster <h3>

<p>Steps to recreate:<br>
# creates deployment from image in dockerhub repo
1. kubectl create deployment k8s-node-js --image=rishi1412/kubernetes-nodejs-app:v1.0<br>
# creates cluster IP and exposes deployment
2. kubectl expose deployment k8s-node-js --port=3000<br>
# shows the service we created along with clusterr ip and deploymemt
3. kubectl get svc<br>
# connects to the cluster
4. minikube ssh<br>
# connects to a pod running inside the cluster and you will be able to see the message from the application
5. curl cluster ip:3000<p>