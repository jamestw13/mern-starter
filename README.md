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

## Requires

 - Node 
 - MongoDB
 - *and/or* Docker

## Getting Started

- Clone repo
- Run `npm i` from repo's root directory.
- Run `npm run installall` from repo's root directory to install server and client dependencies

- Add a .env file in the /server directory and add the following lines: 
  ```
  ACCESS_TOKEN_SECRET=<your custom access token secret here>
  REFRESH_TOKEN_SECRET=<your custom refresh token secret here>
  ```
  - A handy way to create secrets is by running the following in the terminal:
  ```
  node
  require('crypto').randomBytes(64).toString('hex')
  ```
- (optional) Run `npm run seed` from repo's root directory to generate test users
- Run `npm run develop` from repo's root directory to start server and client via nodemon
- Search for all instances of ___*** UPDATE ME ***___ to begin customizing your app name
- Happy developing!


## Docker
To run compose, execute entry-compose.sh with all of the variables in the docker-compose.yml set

To run the database individually with ports to host networking:
```
docker run -it --rm --name alone-mongo -e\ MONGO_INITDB_ROOT_USERNAME=mongoadmin     -e\ MONGO_INITDB_ROOT_PASSWORD=secret -p 27017:27017 mongo
```

To run the backend individualy
```
cd ./server
docker build . -t mern-backend
docker run -it -p 3001:3001 -e MONGODB_URI=mongodb://localhost/mern-starter --net=host mern-backend
```

To run the frontend individually
```
cd ./client
```
change nginx from:
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
for running seperately

and execute
```
docker build . -t mern-frontend
docker run -it -p 80:80 --net=host mern-frontend
```