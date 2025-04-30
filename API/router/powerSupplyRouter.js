const Router = require("express").Router;
const powerSupplyController = require("../controllers/powerSupplyController");
const router = new Router();

router.post("/", powerSupplyController.create);
router.get("/list", powerSupplyController.getAll);
router.get("/:id", powerSupplyController.getById);
router.patch("/:id", powerSupplyController.update);
router.delete("/:id", powerSupplyController.delete);

module.exports = router;
