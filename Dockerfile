# syntax=docker/dockerfile:1

FROM node:18-alpine
LABEL maintainer "chaitalipatel210720@gmail.com"
LABEL build_date "2024-02-17"
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "src/index.js"]
EXPOSE 3000