const express = require("express");
const router = express.Router();

router.delete("/food/:id", (req, res) => {
  const id = Number(req.params.id);

  // defensive check
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  const indexOf = req.foods.findIndex((item) => {
    return item.id === id;
  });

  if (indexOf < 0) {
    res.send({ status: 0, reason: "id not found, maybe already deleted" });
  }

  req.foods.splice(indexOf, 1);

  res.send({ status: 1 });
});

module.exports = router;
