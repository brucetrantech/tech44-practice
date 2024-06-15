FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 8089
CMD ["node", "index.js"]