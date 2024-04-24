import * as dotenv from 'dotenv';
dotenv.config();
import { AppDataSource } from "./data-source"
import { app } from './app';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3002;

AppDataSource.initialize().then(async () => {

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

}).catch(error => console.log(error))
