# Installations Guide for kubernetes with minikube

**Important to follow the steps in righ order and dont miss anything.**

### Start minikube

- minikube start or minikube start --driver=docker

### install addons to minikube for snapshots and drivers

- minikube addons enable volumesnapshots
- minikube addons enable csi-hostpath-driver

### Install gemeni ()

- kubectl create ns gemini
- helm install gemini fairwinds-stable/gemini --namespace gemini

## There are (x) applications that

1. mongodb with its GUI express
2. frontend application for mongodb
3. mysql with its GUI ad -something
4. wordpress application that use the mysql database

   ## handling mongodb and GUI express

### Apply secret and configuration for mongo to the cluster

- kubectl apply -f config/mongo-config.yml
- kubectl apply -f mongo-secret.yml

### Apply mongo persisten volumen and claim and mongo deployment

<!-- - kubectl apply -f mongo-pv.yml -->

- kubectl apply -f mongo-pvc.yml
- kubectl apply -f mongo-deployment.yml

  wait for the mongo pod is running, to check that the pod is running use:

  - kubectl get pod

### Seed data to mongo db

- kubectl apply -f seed.yml

### Apply monog express deployment

- kubectl apply -f mongo-express-deployment.yml

### Apply backup with a snapshotgroup for mongo db

- kubectl apply -f mongo-snapshotgroup.yml

### watch data for mongodb

- minikube service mongo-express-service

  ## handling frontend application

  ### Apply config for the application

  - kubectl apply -f config/microservice-config.yml

  ### Apply deployment for microservices

  - kubectl apply -f frontpage/order-processing-deployment.yml
  - kubectl apply -f frontpage/user-management-deploy.yml
  - kubectl apply -f frontpage/product-catalog-deployment.yml

  #### wait a little bit so the other pods could start then we could continue further on:

  - kubectl apply -f frontpage/home-page-development.yml

### display frontend with minikube

- minikube service home-page-service

## Handling mysql db and GUI

### Apply secret for mysql to the cluster

- kubectl apply -f mysql/mysql-secret.yml

### Apply mysql persisten volumen and claim and mongo deployment

- kubectl apply -f mysql/mysql-pvc.yml

### Apply mysql deployment

- kubectl apply -f mysql/mysql-deployment.yml

### Apply mysql GUI

- kubectl apply -f mysql/mysql-adminer.yml

### Create volumeSnapsHotGroup for backup to mysql db

- kubectl apply -f mysql/snapshotgroup.yml

### Show the mysql GUI

- minikube service -n mysql mysql-adminer-svc

## Wordpress

## check the pvc and volumesnapshots

- kubectl get pvc (-n namespace)
- kubectl get volumensnapshot

3. kubectl create namespace mongo <-- inte än vi har inget som använder det namsecapse
4. kubectl apply -f https://github.com/emberstack/kubernetes-reflector/releases/latest/download/reflector.yaml <-- handling secrets and configmaps between namespaces
5.
6.
7. kubectl apply -f snapshot-storageclass.yaml <-- använd inte OBS OBS
8. kubectl apply -f mongo-pv.yml
9. kubectl apply -f mongo-pvc.yml
10. kubectl apply -f mongo-deployment.yml
    <br>
    **important to see so mongo pod is running. <br>
    To do that use _kubectl get pods --watch_ <br>
    (watch flag is for follow) **
11. kubectl apply -f seed.yml
12. kubectl apply -f mongo-express-deployment.yml
13. kubectl apply -f mongo-snapshotgroup.yml
14. velero uninstall && velero install --provider aws --plugins velero/velero-plugin-for-aws:v1.2.1 --bucket velero --secret-file ./credentials-velero --use-volume-snapshots=true --backup-location-config region=minio,s3ForcePathStyle="true",s3Url=http://172.16.135.202:9000 <-- installation for velero backup (check so velero is installed before)
15. velero schedule create hourlysched --schedule="_/60 _ \* \* \*" <-- create a schedule ( every hour)
16. velero backup create backup --include-namespaces default --schedule="_/60 _ \* \* \*" <-- create a backup job from the schedule
    **handling microservice installation**
17. kubectl create ns scamazon <--- not using because we dont use that namespace
18. kubectl apply -f config/microservice-config.yml
19. kubectl apply -f frontpage/order-processing-deployment.yml
20. kubectl apply -f frontpage/product-catalog-deployment.yml
21. kubectl apply -f frontpage/user-management-deploy.yml
22. kubectl apply -f frontpage/home-page-development.yml
23. To see the page: k get service ( to find the service for home page) then minikube service < the home page service > it should be home-page-service
