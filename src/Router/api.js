const express=require('express')

const router=express.Router()
const FoodController=require("../Controller/FoodController")



router.post("/createFood",FoodController.createFood)
router.get("/readFood",FoodController.readFood)
router.get("/readByIdFood/:id",FoodController.readByIdFood)
router.put("/updateFood/:id",FoodController.updateFood)
router.get("/deleteFood/:id",FoodController.deleteFood)

module.exports=router;