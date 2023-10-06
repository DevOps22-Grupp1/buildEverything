# Installations Guide for kubernetes

**Important to follow the steps in righ order and dont miss something**

---

1.  minikube start // minikube start --driver=docker
2.  kubectl apply -f mongo-secret.yml
3.  kubectl apply -f mongo-config.yml
4.  kubectl apply -f mongo-pv.yml
5.  kubectl apply -f mongo-pvc.yml
6.  kubectl apply -f mongo-deployment.yml
    <br>
    **important to see so mongo pod is running. <br>
    To do that use _kubectl get pods --watch_ <br>
    (watch flag is for follow) **
7.  kubectl create -f seed.yml
8.  kubectl apply -f mongo-express-deployment.yml
9.  kubectl apply -f microservice-config.yml
10. kubectl apply -f order-processing-deployment.yml
11. kubectl apply -f product-catalog-deployment.yml
12. kubectl apply -f user-management-deploy.yml
13. kubectl apply -f home-page-development.yml
14. To see the page: k get service ( to find the service for home page) then minikube service < the home page service > it should be home-page-service
