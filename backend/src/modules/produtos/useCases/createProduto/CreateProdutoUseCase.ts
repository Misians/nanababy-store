import { Produto } from "@prisma/client"
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { CreateProdutoDTO } from "../../dtos/CreateProdutoDTO";

export class CreateProdutoUseCase {
    async execute({
        nome, 
        preco, 
        descricao,
        categoria, 
        image}: CreateProdutoDTO): Promise<Produto> {
        //verificar se o produto já existe, se tiver = erro
        const produtoAlreadyExists = await prisma.produto.findUnique({
            where: {
                nome,
            },
        });
        if(produtoAlreadyExists){
            throw new AppError("User Already Exists!")
        }
        //criar produto
        const produto = await prisma.produto.create({
            data: {
                nome,
                preco,
                descricao,
                categoria,
                image,
            },
        });
        return produto;
    }
}