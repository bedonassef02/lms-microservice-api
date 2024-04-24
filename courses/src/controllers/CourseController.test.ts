import { Request, Response } from 'express';
import { CourseController } from './CourseController';
import { CourseService } from '../services/CourseService';

// Mocking the CourseService
jest.mock('../services/CourseService', () => ({
    CourseService: jest.fn().mockImplementation(() => ({
        findAll: jest.fn(),
        findById: jest.fn(),
        create: jest.fn(),
        remove: jest.fn()
    }))
}));

describe('CourseController', () => {
    let courseController: CourseController;
    let courseService: CourseService;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        courseService = new CourseService();
        courseController = new CourseController(courseService);
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    it('should find all courses', async () => {
        await courseController.findAll(req as Request, res as Response);
        expect(courseService.findAll).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should find course by id', async () => {
        const id = '1';
        const mockCourse = { id: 1, name: 'Math', description: 'Mathematics course', credits: 3 };
        req.params = { id };
        (courseService.findById as jest.Mock).mockResolvedValueOnce(mockCourse);
        await courseController.findById(req as Request, res as Response);
        expect(courseService.findById).toHaveBeenCalledWith(parseInt(id, 10));
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockCourse);
    });


    it('should handle course not found', async () => {
        const id = '1';
        req.params = { id };
        (courseService.findById as jest.Mock).mockResolvedValueOnce(undefined);
        await courseController.findById(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'course not found' });
    });

    it('should create a new course', async () => {
        const body = { name: 'Math', description: 'Mathematics course', credits: 3 };
        req.body = body;
        const course = { id: 1, ...body };
        (courseService.create as jest.Mock).mockResolvedValueOnce(course);
        await courseController.create(req as Request, res as Response);
        expect(courseService.create).toHaveBeenCalledWith(body.name, body.description, body.credits);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(course);
    });

    it('should remove a course', async () => {
        const id = '1';
        req.params = { id };
        await courseController.remove(req as Request, res as Response);
        expect(courseService.remove).toHaveBeenCalledWith(parseInt(id, 10));
        expect(res.status).toHaveBeenCalledWith(204);
    });
});
