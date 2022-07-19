if [ "$1" = "dev" ]
then
  MODE=dev
  DOMAIN=bidi.style
elif [ "$1" = "prod" ]
then
  MODE=prod
  DOMAIN=bidi.style
else
  MODE=dev
  DOMAIN=bidi.style
fi

export MODE=$MODE
export DOMAIN=$DOMAIN

docker-compose down --remove-orphans
docker-compose up -d --build
docker container ls
docker-compose logs -f frontend