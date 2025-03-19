# Используем LTS-версию Node.js
FROM node:20-alpine AS builder

# Устанавливаем переменные для управления памятью и оптимизации
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV GENERATE_SOURCEMAP=false

WORKDIR /app

# Копируем только файлы зависимостей сначала
COPY package.json package-lock.json ./

# Устанавливаем зависимости с очисткой кэша
RUN npm ci --frozen-lockfile --quiet && \
    npm cache clean --force

# Копируем остальные файлы
COPY . .

# Собираем production-версию
RUN npm run build

# Финальный образ с Nginx
FROM nginx:1.25-alpine

# Удаляем дефолтный конфиг
RUN rm -rf /etc/nginx/conf.d/default.conf

# Копируем кастомную конфигурацию
COPY nginx.conf /etc/nginx/conf.d

# Копируем собранные файлы
COPY --from=builder /app/build /usr/share/nginx/html

# Оптимизация для Alpine
RUN chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
