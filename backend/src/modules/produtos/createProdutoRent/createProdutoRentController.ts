import { Response, Request } from "express";
import { CreateProdutoRentUseCase } from "./createProdutoRentUseCase";

export class CreateProdutoRentController {
    async handle(req: Request, res: Response){

        const { 
            produtoId,
            userId } = req.body;

        const createProdutoRentUseCase = new CreateProdutoRentUseCase();

        const result = await createProdutoRentUseCase.execute({
            produtoId,
            userId

         })
        return res.status(201).send();

    }
}