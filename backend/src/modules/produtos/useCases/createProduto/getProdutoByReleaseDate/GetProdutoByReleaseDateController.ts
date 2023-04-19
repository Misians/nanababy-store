import { Response, Request } from "express";
import { GetProdutoByReleaseDateUseCase } from "./GetProdutoByReleaseDateUseCase";

export class GetProdutoByReleaseDateController {
    async handle(req: Request, res: Response){

        const { 
            produtoId, 
            userId } = req.body;

        const getProdutoByReleaseDateUseCase = new GetProdutoByReleaseDateUseCase();

        const result = await getProdutoByReleaseDateUseCase.execute();
        return res.status(201).json(result);

    }
}