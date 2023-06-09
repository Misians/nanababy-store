import express, { NextFunction, Request, Response} from 'express';
import "express-async-errors";
const cors = require('cors');
import { routes } from './routes';
import { AppError } from './errors/AppError';

const app = express();

app.use(cors())

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) =>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error Details - ${err.message} - cause - ${err.cause} - name - ${err.name} - stack - ${err.stack}`
    })
})

app.listen(3333, () => console.log("Server is running in port 3333"));