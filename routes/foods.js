const express = require("express"); 
const router = express.Router();
const foods = require("../foods.json");

//route
router.get("/", (req, res) => {
    const { dishTypes, num } = req.query;
  
    let _foods = [...foods.recipes];
  
    // if specific quantity is asked for
  
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

module.exports = router; 