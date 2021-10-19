const mongoose = require("mongoose"); //importing mongoose

const Connect = (url, user, pass, data) => {
  //Designating Url connection
  mongoose
    .connect(`${url}/${data}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB successfully connected!"))
    .catch((err) => console.log("MongoDB Server Error!", err));
};
module.exports = Connect; //exporting module
