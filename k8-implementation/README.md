# Installations Guide for kubernetes with minikube

**Important to follow the steps in righ order and dont miss anything**

---

1.  minikube start or minikube start --driver=docker
2.  minikube addons enable volumesnapshots
3.  minikube addons enable csi-hostpath-driver
4.  kubectl create namespace mongo <-- inte än vi har inget som använder det namsecapse
5.  kubectl apply -f config/mongo-config.yml
6.  kubectl apply -f mongo-secret.yml
7.  kubectl create ns gemini
8.  helm install gemini fairwinds-stable/gemini --namespace gemini
9.  kubectl apply -f mongo-pv.yml
10. kubectl apply -f mongo-pvc.yml
11. kubectl apply -f mongo-deployment.yml
    <br>
    **important to see so mongo pod is running. <br>
    To do that use _kubectl get pods --watch_ <br>
    (watch flag is for follow) **
12. kubectl apply -f seed.yml
13. kubectl apply -f mongo-express-deployment.yml
14. kubectl apply -f mongo-snapshotgroup.yml
15. velero uninstall && velero install --provider aws --plugins velero/velero-plugin-for-aws:v1.2.1 --bucket velero --secret-file ./credentials-velero --use-volume-snapshots=true --backup-location-config region=minio,s3ForcePathStyle="true",s3Url=http://172.16.135.202:9000 <-- installation for velero backup (check so velero is installed before)
16. velero schedule create hourlysched --schedule="_/60 _ \* \* \*" <-- create a schedule ( every hour)
17. velero backup create backup --include-namespaces default --schedule="_/60 _ \* \* \*" <-- create a backup job from the schedule
    **handling microservice installation**
18. kubectl apply -f microservice-config.yml
19. kubectl apply -f order-processing-deployment.yml
20. kubectl apply -f product-catalog-deployment.yml
21. kubectl apply -f user-management-deploy.yml
22. kubectl apply -f home-page-development.yml
23. To see the page: k get service ( to find the service for home page) then minikube service < the home page service > it should be home-page-service
