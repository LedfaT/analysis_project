const Router = require("express").Router;
const ssdController = require("../controllers/ssdController");
const router = new Router();

router.post("/", ssdController.createSSD);
router.get("/list", ssdController.getAllSSDs);
router.get("/:id", ssdController.getSSD);
router.patch("/:id", ssdController.updateSSD);
router.delete("/:id", ssdController.deleteSSD);

module.exports = router;
