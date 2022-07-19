if [ "$1" = "dev" ]
then
  MODE=dev
  DOMAIN=test.bidi-ai.com
elif [ "$1" = "prod" ]
then
  MODE=prod
  DOMAIN=test.bidi-ai.com
else
  MODE=dev
  DOMAIN=test.bidi-ai.com
fi

export MODE=$MODE
export DOMAIN=$DOMAIN

docker-compose down --remove-orphans
docker-compose up -d --build
docker container ls
docker-compose logs -f frontend