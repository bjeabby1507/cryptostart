FROM node:15.11.0 as base

WORKDIR /app

EXPOSE 3000

# Copy source code from src to /app/src
COPY src src/

COPY .eslintrc.js package.json package-lock.json ./

FROM base as development

RUN npm install

CMD ["npm", "run", "dev"]

FROM base as production

RUN npm ci

CMD ["npm", "start"]