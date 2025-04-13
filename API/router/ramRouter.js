const Router = require("express").Router;
const ramController = require("../controllers/ramController");
const router = new Router();

router.post("/", ramController.createRAM);
router.get("/list", ramController.getAllRAMs);
router.get("/:id", ramController.getRAM);
router.patch("/:id", ramController.updateRAM);
router.delete("/:id", ramController.deleteRAM);

module.exports = router;
