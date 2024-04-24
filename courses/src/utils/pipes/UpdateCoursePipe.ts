import { body, param } from "express-validator";
import { validationMiddleware } from "../../middlewares/ValidationMiddleware";
import { CourseService } from "../../services/CourseService";

const courseService = new CourseService()

export const updateCoursePipe = [

    
    param('id').isInt().custom(async id => {
        const course = await courseService.findById(id);
        if (!course) {
            throw new Error('Course not found');
        }
        return true;
    }),

    body('name').optional().notEmpty().withMessage('Name is required')
        .custom(async (name, { req }) => {
            const course = await courseService.findOne(name);
            const id:number = req.params.id;
            if (course && course.id !== id) {
                throw new Error('Course name already exists');
            }
            return true;
        }),
    body('description').optional().notEmpty().withMessage('Description is required'),
    body('credits').optional().isNumeric().withMessage('Credits must be a number'),

    validationMiddleware
]