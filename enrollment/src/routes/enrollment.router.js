const router = require("express").Router();
const enrollmentController = require("../controllers/enrollment.controller");
const roleGuard = require("../guards/role.guard");
const isAuthMiddleware = require("../middlewares/is-auth.middleware");
const enrollPipe = require("../utils/pipes/enroll.pipe");

router.use(isAuthMiddleware);

router
  .route("/")
  .post(
    roleGuard(["STUDENT"]),
    enrollPipe,
    enrollmentController.enroll.bind(enrollmentController)
  )
  .get(
    roleGuard(["STUDENT"]),
    enrollmentController.findAll.bind(enrollmentController)
  );

router
  .route("/:courseId")
  .get(
    roleGuard(["INSTRUCTOR"]),enrollmentController.findByCourseId.bind(enrollmentController))
  .delete(
    roleGuard(["ADMIN"]),
    enrollmentController.remove.bind(enrollmentController)
  );

module.exports = router;
