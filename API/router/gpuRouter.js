const Router = require("express").Router;
const gpuController = require("../controllers/gpuController");
const router = new Router();

router.post("/", gpuController.createGpu);
router.get("/list", gpuController.getAllGpus);
router.get("/:id", gpuController.getGpu);
router.patch("/:id", gpuController.updateGpu);
router.delete("/:id", gpuController.deleteGpu);

module.exports = router;
