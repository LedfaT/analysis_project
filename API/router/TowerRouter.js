const Router = require("express").Router;
const towerController = require("../controllers/towerController");
const router = new Router();

router.post("/", towerController.createTower);
router.get("/list", towerController.getAllTowers);
router.get("/:id", towerController.getTower);
router.patch("/:id", towerController.updateTower);
router.delete("/:id", towerController.deleteTower);

module.exports = router;
