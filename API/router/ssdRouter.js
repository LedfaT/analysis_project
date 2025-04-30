const Router = require("express").Router;
const ssdController = require("../controllers/ssdController");
const router = new Router();

router.post("/", ssdController.createSsd);
router.get("/list", ssdController.getAllSsds);
router.get("/:id", ssdController.getSsd);
router.patch("/:id", ssdController.updateSsd);
router.delete("/:id", ssdController.deleteSsd);

module.exports = router;
