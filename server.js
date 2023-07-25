const express = require("express");
const app = express();
const foods = require("./foods.json");
const auth = require("./middleware/apiauth");

app.use((req, res, next) => {
  req.foods = foods;
  next();
});

//api key validation middleware
app.use(auth);

//route middleware
app.use("/get", require("./routes/get"));


const port = process.env.PORT || 6001;
app.listen(6001, () => {
  console.log(`the server is running on port ${port}`);
});
