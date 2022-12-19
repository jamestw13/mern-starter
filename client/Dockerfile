FROM node:18-alpine as build

WORKDIR /frontend
COPY src/ src
COPY public/ public
COPY package.json package-lock.json ./
RUN npm install
RUN npm run build

FROM nginx:alpine

COPY nginx-default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=build /frontend/build /usr/share/nginx/html
COPY docker-entrypoint.sh /

CMD ["nginx", "-g", "daemon off;"]