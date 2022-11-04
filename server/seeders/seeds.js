const falso = require("@ngneat/falso");

const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = falso.internet.userName();
    const email = falso.internet.email(username);
    const password = falso.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  console.log("Finished Seeding");
  process.exit(0);
});
