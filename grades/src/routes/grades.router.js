const router = require("express").Router();
const roleGuard = require("../../guards/role.guard");
const gradesController = require("../controllers/grades.controller");
const isAuthMiddleware = require("../middlewares/is-auth.middleware");
const roles = require("../utils/roles");

router.use(isAuthMiddleware);

router
  .route("/")
  .post(roleGuard(roles.INSTRUCTOR), gradesController.assign)
  .get(gradesController.findUserGrade)
  .patch(roleGuard(roles.INSTRUCTOR), gradesController.update);

router.get("/:courseId", roleGuard(roles.INSTRUCTOR), gradesController.findCourseGrades);

module.exports = router;
