import { CourseService } from './CourseService';
import { Course } from '../entity/Course';
import { AppDataSource } from '../data-source';

// Mocking the data source
jest.mock('../data-source', () => ({
    AppDataSource: {
        getRepository: jest.fn().mockReturnValue({
            find: jest.fn(),
            findOneBy: jest.fn(),
            save: jest.fn(),
            remove: jest.fn()
        })
    }
}));

describe('CourseService', () => {
    let courseService: CourseService;

    beforeEach(() => {
        courseService = new CourseService();
    });

    it('should find all courses', async () => {
        await courseService.findAll();
        expect(AppDataSource.getRepository(Course).find).toHaveBeenCalled();
    });

    it('should find course by id', async () => {
        const id = 1;
        await courseService.findById(id);
        expect(AppDataSource.getRepository(Course).findOneBy).toHaveBeenCalledWith({ id });
    });

    it('should find one course by name', async () => {
        const name = 'Math';
        await courseService.findOne(name);
        expect(AppDataSource.getRepository(Course).findOneBy).toHaveBeenCalledWith({ name });
    });

    it('should create a new course', async () => {
        const name = 'Physics';
        const description = 'Introductory physics course';
        const credits = 3;
        await courseService.create(name, description, credits);
        const newCourse = new Course();
        newCourse.name = name;
        newCourse.description = description;
        newCourse.credits = credits;
        expect(AppDataSource.getRepository(Course).save).toHaveBeenCalledWith(newCourse);
    });

    it('should remove a course by id', async () => {
        const id = 1;
        await courseService.remove(id);
        expect(AppDataSource.getRepository(Course).remove).toHaveBeenCalled();
    });
});
