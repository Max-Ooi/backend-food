const express = require("express");
const router = express.Router();

router.patch("/food/:id", (req, res) => {
  const id = Number(req.params.id);

  // defensive check - check if the id is a number
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  const { title, readyInMinutes, servings, dishTypes } = req.body;

  const indexOf = req.foods.findIndex((item) => {
    return item.id === id;
  });

  //check if the id exists
  if (indexOf < 0) {
    res.send({ status: 0, reason: "id not found" });
  }

  //update the values from the selected food object by id

  if (title && typeof title == "string") {
    req.foods[indexOf].title = title;
  }
  if (readyInMinutes && typeof readyInMinutes == "number") {
    req.foods[indexOf].readyInMinutes = readyInMinutes;
  }
  if (servings && typeof servings == "number") {
    req.foods[indexOf].servings = servings;
  }
  if (
    dishTypes &&
    dishTypes.filter((value) => {
      return typeof value == "string";
    }).length == dishTypes.length
  ) {
    req.foods[indexOf].dishTypes = dishTypes;
  }

  res.send({ status: 1 });
});

module.exports = router;
