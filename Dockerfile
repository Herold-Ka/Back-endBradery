FROM node:18.14.2-slim

WORKDIR /app
COPY --chown=${APP_USER} . .

RUN npm install

EXPOSE 3306
EXPOSE 3000

CMD ["npm","start"]