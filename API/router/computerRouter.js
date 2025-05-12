const Router = require("express").Router;
const computerController = require("../controllers/computerController");
const router = new Router();
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/", authMiddleware, computerController.createComputer);
router.get("/list", computerController.getAllComputers);
router.get("/admins-public/list", computerController.getAdminPublicComputers);
router.get("/users-public/list", computerController.getUserPublicComputers);

router.get(
  "/user-computers/list",
  authMiddleware,
  computerController.getAllUserComputers
);
router.get(
  "/user-computers/count",
  authMiddleware,
  computerController.getAllUserComputersCount
);
router.get("/:id", computerController.getComputerById);
router.patch("/:id", computerController.updateComputer);
router.delete("/:id", computerController.deleteComputer);

module.exports = router;
