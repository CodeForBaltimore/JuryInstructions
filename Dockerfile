FROM node:12.11.0-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD ["node", "app/server.js"]
