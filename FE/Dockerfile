#stage 1
FROM node:latest as node
WORKDIR /app
COPY ./magic-8-ball .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/magic-8-ball /usr/share/nginx/html