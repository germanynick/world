FROM node:10-alpine

RUN mkdir /app
WORKDIR /app


COPY package*.json ./

RUN yarn ci 

COPY . .

RUN yarn run build

ENV NODE_ENV=production
CMD ["npm", "start"]