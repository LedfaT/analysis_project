const Router = require("express").Router;
const collingSystemController = require("../controllers/collingSystemController");
const { body } = require("express-validator");
const validationMiddleware = require("../middlewares/validation-middleware");
const router = new Router();

router.post(
  "/",
  body("title").notEmpty(),
  body("heat_removal").notEmpty(),
  body("type_size").notEmpty(),
  validationMiddleware,
  collingSystemController.createCollingSystem
);
router.get("/list", collingSystemController.getAllCollingSystemes);
router.get("/:id", collingSystemController.getCollingSystem);
router.patch(
  "/:id",
  body("title").notEmpty(),
  body("heat_removal").notEmpty(),
  body("type_size").notEmpty(),
  validationMiddleware,
  collingSystemController.updateCollingSystem
);
router.delete("/:id", collingSystemController.deleteCollingSystem);

module.exports = router;
