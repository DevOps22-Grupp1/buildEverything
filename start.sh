#! /bin/bash
cd home-page-service
git pull https://github.com/DevOps22-Grupp1/home-page-service prometheus-fix
docker-compose pull
docker compose up --detach
cd ..
cd order-processing-service
git pull https://github.com/DevOps22-Grupp1/order-processing-service main
docker-compose pull
docker compose up --detach
cd ..
cd produkt-catalog-service
git pull https://github.com/DevOps22-Grupp1/produkt-catalog-service main
docker-compose pull
docker compose up --detach
cd ..

echo "Up and running!"