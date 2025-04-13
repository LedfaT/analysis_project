const Router = require("express").Router;
const motherboardController = require("../controllers/motherboardController");
const router = new Router();

router.post("/", motherboardController.createMotherboard);
router.get("/list", motherboardController.getAllMotherboardes);
router.get("/:id", motherboardController.getMotherboard);
router.patch("/:id", motherboardController.updateMotherboard);
router.delete("/:id", motherboardController.deleteMotherboard);

module.exports = router;
