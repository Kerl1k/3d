const Router = require("express");
const router = new Router();
const FileController = require("../controllers/fileController");

router.get("/:projectId", FileController.getOne);

module.exports = router;
