const express = require("express");
const router = express.Router();

//route
router.get("/", (req, res) => {
  const { dishTypes, num } = req.query;

  let _foods = [...req.foods];

  // if specific dishTypes is asked for

  if (dishTypes) {
    _foods = _foods.filter((food) => {
      return food.dishTypes.includes(dishTypes.toLowerCase());
    });
  }

  // if specific quantity is asked for
  if (num && Number(num) > 0 && _foods.length > num) {
    _foods.length = num;
  }
  res.send(_foods);
});

router.get("/food/:id", (req, res) => {
  
  const id = Number(req.params.id);

  // defensive check
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  //make a copy of the all food objects
  const _foods = [...req.foods];

  //locate the food by id
  const food = _foods.find((item) => {
    return item.id === id;
  });

  //check if the food by id exist
  if (!food) {
    res.send({ status: 0, reason: `id of ${id} is not found` });
  }

  res.send(food);
});

module.exports = router;
