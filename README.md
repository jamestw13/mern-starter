# mern-starter
A starting point for building a MERN app with user authentication

## Functionality Added and Planned
- [x] React Starting Template
- [x] Express Server Set Up
- [x] JSON Web Token Authentication Set Up
- [x] Separate Servers for general data access and authentication
- [x] nodemon and concurrently added for smooth development
- [ ] MongoDB connection started
- [ ] Mongoose handling
- [ ] GraphQL functionality
- [ ] Seeding user data from faker for testing

## Requires
Node installed
MongoDB installed

## To Use
- Clone repo
- Run ```npm i``` from repo's root directory. Sub directory npms should run automatically
- Add a .env file to the server directory and add the following lines: 
```
ACCESS_TOKEN_SECRET=<your custom access token secret here>
REFRESH_TOKEN_SECRET=<your custom refresh token secret here>
```
- Run ```npm run develop``` from repo's root directory. Auth and business servers should run via nodemon and React should start up
- Happy developing!
