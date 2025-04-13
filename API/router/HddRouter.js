const Router = require("express").Router;
const hddController = require("../controllers/hddController");
const router = new Router();

router.post("/", hddController.createHDD);
router.get("/list", hddController.getAllHDDs);
router.get("/:id", hddController.getHDD);
router.patch("/:id", hddController.updateHDD);
router.delete("/:id", hddController.deleteHDD);

module.exports = router;
