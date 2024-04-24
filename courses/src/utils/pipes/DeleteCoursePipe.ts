import { param } from "express-validator";
import { validationMiddleware } from "../../middlewares/ValidationMiddleware";
import { CourseService } from "../../services/CourseService";

const courseService = new CourseService()

export const deleteCoursePipe = [

    param('id').isInt().custom(async id => {
        const course = await courseService.findById(id);
        if (!course) {
            throw new Error('Course not found');
        }
        return true;
    }),

    validationMiddleware
]