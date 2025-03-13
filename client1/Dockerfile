FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Установка ВСЕХ зависимостей
RUN npm install --include=dev

COPY --chown=node:node . .

# Сборка от имени пользователя
USER node
RUN npm run build

EXPOSE 3001
CMD ["npm", "start"]
