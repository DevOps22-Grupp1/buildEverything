# Installations Guide for kubernetes with minikube

**Important to follow the steps in righ order and dont miss anything**

---

1.  minikube start or minikube start --driver=docker
2.  minikube addons enable volumesnapshots
3.  minikube addons enable csi-hostpath-driver
4.  kubectl create namespace mongo <-- inte än vi har inget som använder det namsecapse
5.  kubectl apply -f https://github.com/emberstack/kubernetes-reflector/releases/latest/download/reflector.yaml <-- handling secrets and configmaps between namespaces
6.  kubectl apply -f config/mongo-config.yml
7.  kubectl apply -f mongo-secret.yml
8.  kubectl create ns gemini
9.  helm install gemini fairwinds-stable/gemini --namespace gemini
10. kubectl apply -f snapshot-storageclass.yaml <-- använd inte OBS OBS
11. kubectl apply -f mongo-pv.yml
12. kubectl apply -f mongo-pvc.yml
13. kubectl apply -f mongo-deployment.yml
    <br>
    **important to see so mongo pod is running. <br>
    To do that use _kubectl get pods --watch_ <br>
    (watch flag is for follow) **
14. kubectl apply -f seed.yml
15. kubectl apply -f mongo-express-deployment.yml
16. kubectl apply -f mongo-snapshotgroup.yml
17. velero uninstall && velero install --provider aws --plugins velero/velero-plugin-for-aws:v1.2.1 --bucket velero --secret-file ./credentials-velero --use-volume-snapshots=true --backup-location-config region=minio,s3ForcePathStyle="true",s3Url=http://172.16.135.202:9000 <-- installation for velero backup (check so velero is installed before)
18. velero schedule create hourlysched --schedule="_/60 _ \* \* \*" <-- create a schedule ( every hour)
19. velero backup create backup --include-namespaces default --schedule="_/60 _ \* \* \*" <-- create a backup job from the schedule
    **handling microservice installation**
20. kubectl create ns scamazon <--- not using because we dont use that namespace
21. kubectl apply -f config/microservice-config.yml
22. kubectl apply -f frontpage/order-processing-deployment.yml
23. kubectl apply -f frontpage/product-catalog-deployment.yml
24. kubectl apply -f frontpage/user-management-deploy.yml
25. kubectl apply -f frontpage/home-page-development.yml
26. To see the page: k get service ( to find the service for home page) then minikube service < the home page service > it should be home-page-service
