const Router = require("express").Router;
const collingSystemController = require("../controllers/collingSystemController");
const router = new Router();

router.post("/", collingSystemController.createCollingSystem);
router.get("/list", collingSystemController.getAllCollingSystemes);
router.get("/:id", collingSystemController.getCollingSystem);
router.patch("/:id", collingSystemController.updateCollingSystem);
router.delete("/:id", collingSystemController.deleteCollingSystem);

module.exports = router;
