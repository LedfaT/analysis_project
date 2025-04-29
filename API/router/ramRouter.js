const Router = require("express").Router;
const ramController = require("../controllers/ramController");
const router = new Router();

router.post("/", ramController.createRam);
router.get("/list", ramController.getAllRams);
router.get("/:id", ramController.getRam);
router.patch("/:id", ramController.updateRam);
router.delete("/:id", ramController.deleteRam);

module.exports = router;
