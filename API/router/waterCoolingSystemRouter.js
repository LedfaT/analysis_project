const Router = require("express").Router;
const waterCoolController = require("../controllers/waterCoolingSystemController");
const router = new Router();

router.post("/", waterCoolController.createSystem);
router.get("/list", waterCoolController.getAllSystems);
router.get("/:id", waterCoolController.getSystem);
router.patch("/:id", waterCoolController.updateSystem);
router.delete("/:id", waterCoolController.deleteSystem);

module.exports = router;
