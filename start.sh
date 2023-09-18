#! /bin/bash
cd home-page-service
git pull https://github.com/DevOps22-Grupp1/home-page-service prometheus-fix
docker compose up --detach
cd ..
cd order-processing-service
git pull https://github.com/DevOps22-Grupp1/order-processing-service project-merge
docker compose up --detach
cd ..
cd produkt-catalog-service
git pull https://github.com/DevOps22-Grupp1/produkt-catalog-service project-merge
docker compose up --detach

echo "Up and running!"