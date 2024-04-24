import "reflect-metadata"
import { DataSource } from "typeorm"
import { Course } from "./entity/Course"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "lms-courses",
    synchronize: true,
    logging: false,
    entities: [Course],
    migrations: [],
    subscribers: [],
})
