const Router = require("express").Router;
const blutoothModuleController = require("../controllers/blutoothModuleController");
const { body } = require("express-validator");
const validationMiddleware = require("../middlewares/validation-middleware");
const router = new Router();

router.post(
  "/",
  body("title").notEmpty(),
  validationMiddleware,
  blutoothModuleController.createBlutoothModule
);
router.get("/list", blutoothModuleController.getAllBlutoothModules);
router.get("/:id", blutoothModuleController.getBlutoothModule);
router.patch("/:id", blutoothModuleController.updateBlutoothModule);
router.delete("/:id", blutoothModuleController.deleteBlutoothModule);

module.exports = router;
