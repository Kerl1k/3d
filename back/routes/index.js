const Router = require("express");
const userRouter = require("./userRouter");
const projectRouter = require("./projectRouter");
const fileRouter = require("./fileRouter");

const router = new Router();

router.use("/user", userRouter);
router.use("/project", projectRouter);
router.use("/file", fileRouter);

module.exports = router;
