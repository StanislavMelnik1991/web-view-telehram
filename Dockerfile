FROM node

WORKDIR /app

COPY packege*.json ./

COPY . .

RUN npm install

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]
