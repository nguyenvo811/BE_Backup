const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const url = "mongodb+srv://nhayenthanthiAdmin:nhayenthanthiAdmin@cluster0.7ht7axz.mongodb.net/my_Project?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
      console.error(`Error connecting to the database. \n${err}`);
    });
};

module.exports = connectDB;