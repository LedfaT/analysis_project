const Router = require("express").Router;
const hddController = require("../controllers/hddController");
const router = new Router();

router.post("/", hddController.createHdd);
router.get("/list", hddController.getAllHdds);
router.get("/:id", hddController.getHdd);
router.patch("/:id", hddController.updateHdd);
router.delete("/:id", hddController.deleteHdd);

module.exports = router;
