const mongoose = require("mongoose");
const { DB_USER_NAME, DB_PASSWORD, DB_NAME } = require('./constants');

module.exports.dbConfig = async () => {
    await mongoose.connect(`mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.l1wrxey.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

}