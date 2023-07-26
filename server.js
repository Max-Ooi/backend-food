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

//convert body to json
app.use(express.json());

//route middleware
app.use("/get", require("./routes/get"));
app.use("/delete", require("./routes/delete"));
app.use("/add", require("./routes/add"));

const port = process.env.PORT || 6001;
app.listen(6001, () => {
  console.log(`the server is running on port ${port}`);
});
