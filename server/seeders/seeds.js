const falso = require("@ngneat/falso");

const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const userInfo = falso.randUser();

    const user = {
      username: userInfo.username,
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      password: 11111111,
      avatar: falso.randAvatar(),
    };

    userData.push(user);
  }

  const createdUsers = await User.create(userData);

  console.log("Finished Seeding");
  process.exit(0);
});
