FROM node:18

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]