const Router = require("express").Router;
const motherboardController = require("../controllers/motherboardController");
const router = new Router();

router.post("/", motherboardController.create);
router.get("/list", motherboardController.getAll);
router.get("/:id", motherboardController.getById);
router.patch("/:id", motherboardController.update);
router.delete("/:id", motherboardController.delete);

module.exports = router;
