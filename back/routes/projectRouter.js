const Router = require("express");
const router = new Router();
const projectContoller = require("../contollers/projectContoller");

router.post("/", projectContoller.create);
router.get("/:id", projectContoller.getOne);
router.get("/", projectContoller.getAll);
router.post("/:id", projectContoller.change);
router.delete("/:id", projectContoller.delete);

module.exports = router;
