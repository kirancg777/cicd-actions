FROM node:alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm app.js
COPY . .
EXPOSE 3000
CMD [ "node", "start", "app.js"]