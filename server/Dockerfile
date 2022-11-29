FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

COPY . .

USER 1000:1000

EXPOSE 3001
EXPOSE 27017
ENV PORT=3001
CMD [ "node","server.js" ]
