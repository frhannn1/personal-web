FROM node:18.17.0

WORKDIR /app

COPY package*.json .

RUN npm i 

COPY . .

CMD ["npm","run", "dev"]

