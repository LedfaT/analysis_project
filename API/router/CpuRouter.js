const Router = require("express").Router;
const cpuController = require("../controllers/cpuController");
const router = new Router();

router.post("/", cpuController.createCPU);
router.get("/list", cpuController.getAllCPUs);
router.get("/:id", cpuController.getCPU);
router.patch("/:id", cpuController.updateCPU);
router.delete("/:id", cpuController.deleteCPU);

module.exports = router;
