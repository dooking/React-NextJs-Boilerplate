FROM node:alpine

ENV PORT 3000

ARG MODE
ENV MODE=${MODE}
ADD . $MODE

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./ ./
RUN npm install


ENTRYPOINT npm run $MODE