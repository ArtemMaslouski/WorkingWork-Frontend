FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]
