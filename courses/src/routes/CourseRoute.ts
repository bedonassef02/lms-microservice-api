import { Router } from "express";
import { CourseController } from "../controllers/CourseController";
import { CourseService } from "../services/CourseService";
import { createCoursePipe } from "../utils/pipes/CreateCoursePipe";
import { updateCoursePipe } from "../utils/pipes/UpdateCoursePipe";
import { deleteCoursePipe } from "../utils/pipes/DeleteCoursePipe";
import { isAuthMiddleware } from "../middlewares/AuthMiddleware";
import { roleGuard } from "../guards/RoleGuard";

export const courseRouter = Router();

const courseService = new CourseService()
const courseController = new CourseController(courseService)


courseRouter.route('/')
    .get(courseController.findAll.bind(courseController))
    .post(isAuthMiddleware, roleGuard(['ADMIN']), createCoursePipe, courseController.create.bind(courseController))

courseRouter.route('/:id')
    .get(courseController.findById.bind(courseController))
    .patch(isAuthMiddleware, roleGuard(['ADMIN']), updateCoursePipe, courseController.update.bind(courseController))
    .delete(isAuthMiddleware, roleGuard(['ADMIN']), deleteCoursePipe, courseController.remove.bind(courseController))