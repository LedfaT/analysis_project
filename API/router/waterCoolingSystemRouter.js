const Router = require("express").Router;
const waterCoolController = require("../controllers/waterCoolingSystemController");
const router = new Router();

router.post("/", waterCoolController.createWaterCoolingSystem);
router.get("/list", waterCoolController.getAllWaterCoolingSystems);
router.get("/:id", waterCoolController.getWaterCoolingSystem);
router.patch("/:id", waterCoolController.updateWaterCoolingSystem);
router.delete("/:id", waterCoolController.deleteWaterCoolingSystem);

module.exports = router;
