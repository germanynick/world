FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

RUN  yarn config set registry https://verdaccioweb.azurewebsites.net

COPY package*.json ./

RUN yarn install 

COPY . .

RUN yarn run build

ENV NODE_ENV=production
CMD ["yarn", "start"]