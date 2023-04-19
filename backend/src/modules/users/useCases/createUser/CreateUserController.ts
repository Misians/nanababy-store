import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response){
        const { name, email, senha, telefone } = req.body;
        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({name,email,senha,telefone})
        return res.status(201).json(result);

    }
}