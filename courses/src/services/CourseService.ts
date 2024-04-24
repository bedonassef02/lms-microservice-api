import { AppDataSource } from '../data-source';
import { Course } from '../entity/Course';
import { UpdateCourseDto } from '../utils/dtos/UpdateCourseDto';


export class CourseService {

    courseRepository = AppDataSource.getRepository(Course)

    async findAll() {
        return await this.courseRepository.find();
    }

    async findById(id: number) {
        return await this.courseRepository.findOneBy({ id });
    }

    async findOne(name: string) {
        return await this.courseRepository.findOneBy({ name });
    }

    async create(name: string, description: string, credits: number): Promise<Course> {

        const course = new Course();
        course.name = name;
        course.description = description;
        course.credits = credits;

        await this.courseRepository.save(course)

        return course;
    }

    async update(id: number, courseDto: UpdateCourseDto) {
        const course: Course = await this.findById(id);
        if (courseDto.name !== undefined) {
            course.name = courseDto.name;
        }
        if (courseDto.description !== undefined) {
            course.description = courseDto.description;
        }
        if (courseDto.credits !== undefined) {
            course.credits = courseDto.credits;
        }
        await this.courseRepository.save(course);
        return course;
    }

    async remove(id: number) {
        const course = await this.findById(id);
        await this.courseRepository.remove(course)
    }
}
