const Router = require("express").Router;
const powerSupplyController = require("../controllers/powerSupplyController");
const router = new Router();

router.post("/", powerSupplyController.createPowerSupply);
router.get("/list", powerSupplyController.getAllPowerSupplies);
router.get("/:id", powerSupplyController.getPowerSupply);
router.patch("/:id", powerSupplyController.updatePowerSupply);
router.delete("/:id", powerSupplyController.deletePowerSupply);

module.exports = router;
