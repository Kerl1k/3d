const Router = require("express");
const router = new Router();
const ProjectController = require("../controllers/projectController");

router.post("/", ProjectController.create);
router.get("/:id", ProjectController.getOne);
router.get("/", ProjectController.getAll);
router.post("/:id", ProjectController.change);
router.delete("/:id", ProjectController.delete);

module.exports = router;
