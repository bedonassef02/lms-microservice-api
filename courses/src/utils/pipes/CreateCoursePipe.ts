import { body } from "express-validator";
import { validationMiddleware } from "../../middlewares/ValidationMiddleware";
import { CourseService } from "../../services/CourseService";

const courseService = new CourseService()

export const createCoursePipe = [

    body('name').notEmpty().withMessage('Name is required')
        .custom(async name => {
            const course = await courseService.findOne(name);
            if (course) {
                throw new Error('Course name already exists');
            }
            return true;
        }),
    body('description').notEmpty().withMessage('Description is required'),
    body('credits').isNumeric().withMessage('Credits must be a number'),

    validationMiddleware
]