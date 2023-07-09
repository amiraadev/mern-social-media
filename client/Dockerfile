FROM node:16.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_HOST_NAME = "http://localhost:5000/"
ENV REACT_APP_GOOGLE_CLIENT_ID = "1023016021226-85co271q0b34rnq3m36dk8vbodeillqc.apps.googleusercontent.com"



CMD ["npm","start"]

