FROM node:16.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_URI = "mongodb+srv://Allaguiamira:A12648659a@cluster0.uxy6jat.mongodb.net/social_media_app"
ENV PORT = 5000
ENV TOKEN_SECRET="token_secret"

EXPOSE 5000

CMD ["npm","start"]

