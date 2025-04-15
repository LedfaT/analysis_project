const Router = require("express").Router;
const wifiController = require("../controllers/wifiModuleController");
const router = new Router();

router.post("/", wifiController.createWifiModule);
router.get("/list", wifiController.getAllWifiModules);
router.get("/:id", wifiController.getWifiModule);
router.patch("/:id", wifiController.updateWifiModule);
router.delete("/:id", wifiController.deleteWifiModule);

module.exports = router;
