# mern-starter

A starting point for building a MERN app with user authentication

## Functionality Added and Planned

- [x] React Starting Template
- [x] Express Server Set Up
- [x] JSON Web Token Authentication Set Up
- [x] Separate Servers for general data access and authentication
- [x] nodemon and concurrently added for smooth development
- [x] MongoDB connection started
- [x] Mongoose handling
- [x] GraphQL functionality
- [x] Seeding user data from falso for testing

## Requires

Node installed MongoDB installed

## To Use

- Clone repo
- Run `npm i` from repo's root directory. Sub directory npms should run automatically
- Add a .env file to the server directory and add the following lines:

```
ACCESS_TOKEN_SECRET=<your custom access token secret here>
REFRESH_TOKEN_SECRET=<your custom refresh token secret here>
```

- - A handy way to create secrets is by running the following in the terminal:

```
node
require('crypto').randomBytes(64).toString('hex')
```

and pasting

- Run `npm run develop` from repo's root directory. Auth and business servers should run via nodemon and React should start up
- Happy developing!
