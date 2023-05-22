FROM node:alpine

WORKDIR /usr/src/app

ENV PORT=3000

COPY . .

RUN yarn && yarn build

EXPOSE $PORT

ENTRYPOINT ["yarn", "prod"]
