const mongoose = require("mongoose");
const connect_string = process.env.MONGODB_URI || "PLEASEBREAKHERE";
console.log(connect_string);
mongoose.connect(
  connect_string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
