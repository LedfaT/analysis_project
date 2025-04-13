const Router = require("express").Router;
const computerController = require("../controllers/computerController");
const router = new Router();

router.post("/", computerController.createComputer);
router.get("/list", computerController.getAllComputers);
router.get("/user-computers/:id/list", computerController.getAllComputers);
router.get("/:id", computerController.getComputer);
router.patch("/:id", computerController.updateComputer);
router.delete("/:id", computerController.deleteComputer);

module.exports = router;
