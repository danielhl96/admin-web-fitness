FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

# Development stage
FROM node:22-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN apk add --no-cache openssl

# Build-Argumente für Datenbank-URLs
ARG USER_DATABASE_URL
ARG ADMIN_DATABASE_URL

EXPOSE 3000

CMD ["npm", "run", "dev"]