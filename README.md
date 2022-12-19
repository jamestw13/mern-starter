# MERN Starter

A starter template for building a MERN app

## Functionality Added and Planned

- [x] React Starting Template
- [x] Express Server Set Up
- [x] JSON Web Token Authentication Set Up
- [x] nodemon and concurrently added for smooth development
- [x] MongoDB connection started
- [x] Mongoose handling
- [x] GraphQL functionality
- [x] Seeding test user data
- [x] Dockerize for easy deployment

## Requires

 - Node v 18.12.0 or newer
 - MongoDB
 - *and/or* Docker

## Get Started Developing

- Clone repo
- Run `npm i` from repo's root directory.
- Run `npm run installall` from repo's root directory to install server and client dependencies

- Add a .env file in the /server directory and add the following lines: 
  ```
  ACCESS_TOKEN_SECRET=<your custom access token secret here>
  ```
  - A handy way to create secrets is by running the following in the terminal:
  ```
  node
  require('crypto').randomBytes(64).toString('hex')
  ```
- Start a Docker container for MongoDB
```
docker run -d \
  -p 27017:27017 \
  --name test-mongo \
  -v data-vol:/data/db \
  mongo:latest
```
- (optional) Run `npm run seed` from repo's root directory to generate test users
- Run `npm run develop` from repo's root directory to start server and client via nodemon
- Search for all instances of ___*** UPDATE ME ***___ to begin customizing your app name
- Happy developing!

## Deploying with Docker

### Deploy entire stack
- Create a .env in the root directory with the following variables:
```
MONGO_ROOT=<pick a name>
MONGO_ROOT_PASSWORD=<set a password>
ACCESS_TOKEN_SECRET=<set a secret - see above>
MONGODB_URI=mongodb://mongo-db:27017 <27017 is MongoDB's default>
NGINX_PORT=80
BACKEND=http://mern-backend:3001/api
```

- Run ```./entry-compose.sh```

### Deploy MongoDB separately
```
docker run -it --rm --name alone-mongo -e\ MONGO_INITDB_ROOT_USERNAME=mongoadmin -e\ MONGO_INITDB_ROOT_PASSWORD=secret -p 27017:27017 mongo
```

### Deploy back end server separately
```
cd ./server
docker build . -t mern-backend
docker run -it -p 3001:3001 -e MONGODB_URI=mongodb://localhost/mern-starter --net=host mern-backend
```

### Deploy front end server separately

-update the file ```.\client\nginx-default.conf.template``` from:

```
location /api/ {
                proxy_pass http://mern-backend:3001;
}
```
(which is for running in compose) to
```
location /api/ {
                proxy_pass http://localhost:3001;
}
```
- run to execute
```
cd ./client
docker build . -t mern-frontend
docker run -it -p 80:80 --net=host mern-frontend
```

### Contributors
- [TJ James](https://github.com/jamestw13)
- [Victor Weinert](https://github.com/vw0389)
