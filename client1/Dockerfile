FROM node:20-alpine

# Установите рабочую директорию внутри контейнера
WORKDIR /app

# Скопируйте package.json и package-lock.json (или npm-shrinkwrap.json)
COPY package*.json ./

# Установите зависимости. Используйте --legacy-peer-deps, если есть конфликты
RUN npm install --legacy-peer-deps

# Скопируйте остальные файлы приложения
COPY . .

# Соберите приложение (если требуется, например, для React, Vue, Angular)
RUN npm run build

# Укажите порт, который будет прослушивать приложение
EXPOSE 3000

# Запустите приложение
CMD ["npm", "start"]
