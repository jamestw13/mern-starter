# MERN Starter

A starter template for building a MERN app

## Functionality Added and Planned

- [x] React Starting Template
- [x] Express Server Set Up
- [ ] JSON Web Token Authentication Set Up
- [x] Separate Servers for general data access and authentication
- [x] nodemon and concurrently added for smooth development
- [x] MongoDB connection started
- [x] Mongoose handling
- [x] GraphQL functionality
- [x] Seeding test user data

## Requires

 - Node 
 - MongoDB
 - Docker

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
