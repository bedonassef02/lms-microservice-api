import * as express from "express";
import * as morgan from 'morgan';
import { courseRouter } from "./routes/CourseRoute";

export const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/courses', courseRouter);