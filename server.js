const express = require("express");
const app = express();
const auth = require("./middleware/apiauth");

//api key validation middleware
app.use(auth);

//route middleware
app.use("/foods", require("./routes/foods"));

const port = process.env.PORT || 6001;
app.listen(6001, () => {
  console.log(`the server is running on port ${port}`);
});
