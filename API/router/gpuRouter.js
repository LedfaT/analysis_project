const Router = require("express").Router;
const gpuController = require("../controllers/gpuController");
const router = new Router();

router.post("/", gpuController.createGPU);
router.get("/list", gpuController.getAllGPUs);
router.get("/:id", gpuController.getGPU);
router.patch("/:id", gpuController.updateGPU);
router.delete("/:id", gpuController.deleteGPU);

module.exports = router;
