#! /bin/bash
docker compose down
cd home-page-service
rm -r mongo-data
cd ..
cd order-processing-service
rm -r mongo-data
cd ..
cd produkt-catalog-service
rm -r mongo-data
cd ..
echo "Data removed"
