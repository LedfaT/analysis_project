const Router = require("express").Router;
const cpuController = require("../controllers/cpuController");
const router = new Router();

router.post("/", cpuController.createCpu);
router.get("/list", cpuController.getAllCpus);
router.get("/:id", cpuController.getCpu);
router.patch("/:id", cpuController.updateCpu);
router.delete("/:id", cpuController.deleteCpu);

module.exports = router;
