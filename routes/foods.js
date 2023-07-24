const express = require("express"); 
const router = express.Router();

//route
router.get("/", (req, res) => {
    const { dishTypes, num } = req.query;
  
    let _foods = [...req.foods.recipes];
  
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