import { Response, Request } from "express";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";

export class CreateProdutoController {
    async handle(req: Request, res: Response){

        const { 
            nome, 
            preco, 
            descricao, 
            categoria, 
            image } = req.body;

        const createProdutoUseCase = new CreateProdutoUseCase();

        const result = await createProdutoUseCase.execute({
            nome, 
            preco, 
            descricao, 
            categoria, 
            image })
        return res.status(201).json(result);

    }
}