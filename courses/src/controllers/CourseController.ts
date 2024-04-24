import { Request, Response } from 'express';
import { CourseService } from '../services/CourseService';
import { UpdateCourseDto } from '../utils/dtos/UpdateCourseDto';

export class CourseController {
  constructor(private courseService: CourseService) {
  }

  async findAll(req: Request, res: Response) {
    const courses = await this.courseService.findAll();
    res.status(200).json(courses);
  }

  async findById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const course = await this.courseService.findById(id);
    if (!course) {
      return res.status(404).json({message: 'course not found'});
    }
    res.status(200).json(course);
  }
  async create(req: Request, res: Response) {
    const { name, description, credits } = req.body;
    const course = await this.courseService.create(name, description, credits)
    res.status(201).json(course);
  }

  async update(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const courseDto: UpdateCourseDto = req.body;
    const course = await this.courseService.update(id, courseDto);
    res.status(200).json(course);
  }

  async remove(req: Request, res: Response){
    const id: number = parseInt(req.params.id);
    await this.courseService.remove(id);
    res.status(204)
  }
}

