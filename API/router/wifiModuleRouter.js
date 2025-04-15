const Router = require("express").Router;
const wifiController = require("../controllers/wifiModuleController");
const { body } = require("express-validator");
const validationMiddleware = require("../middlewares/validation-middleware");
const router = new Router();

router.post(
  "/",
  body("title").notEmpty(),
  body("generation").notEmpty(),
  validationMiddleware,
  wifiController.createWifiModule
);
router.get("/list", wifiController.getAllWifiModules);
router.get("/:id", wifiController.getWifiModule);
router.patch(
  "/:id",
  body("title").notEmpty(),
  body("generation").notEmpty(),
  validationMiddleware,
  wifiController.updateWifiModule
);
router.delete("/:id", wifiController.deleteWifiModule);

module.exports = router;
