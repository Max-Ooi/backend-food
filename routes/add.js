const express = require("express");
const router = express.Router();

router.post("/food", (req, res) => {
  const { title, readyInMinutes, servings, dishTypes } = req.body;

  //check contents
  if (
    !title ||
    !readyInMinutes ||
    !servings ||
    !dishTypes ||
    typeof title !== "string" ||
    dishTypes.filter((value) => {
      return typeof value == "string";
    }).length !== dishTypes.length ||
    typeof readyInMinutes !== "number" ||
    typeof servings !== "number"
  ) {
    res.send({ status: 0, reason: "incomplete or invalid request" });
    return;
  }

  //check for duplicates
  const indexOf = req.foods.findIndex((item) => {
    return item.title === title;
  });

  if (indexOf > -1) {
    res.send({ status: 0, reason: "Duplicate entry" });
    return;
  }

  req.foods.push({
    id: Math.round(Math.random() * 10000000),
    title,
    readyInMinutes,
    servings,
    dishTypes,
  });

  res.send({ status: 1 });
});

module.exports = router;
