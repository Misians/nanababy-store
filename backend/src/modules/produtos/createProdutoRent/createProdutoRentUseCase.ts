import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { CreateProdutoRentDTO } from "../dtos/createProdutoRentDTO";

export class CreateProdutoRentUseCase{
    async execute({ produtoId, userId }: CreateProdutoRentDTO): Promise<void>{
        //verificar se produto existe

        const produtoExists = await prisma.produto.findUnique({
            where:{
                id: produtoId
            }
        });

        if(!produtoExists){
            throw new AppError("produto não existe");
        }
        //verificar se o produto já não foi vendido
        const produtoAlreadyRent = await prisma.produtoCarrinho.findFirst({
            where:{
                produtoId
            }
        });

        if(produtoAlreadyRent){
            throw new AppError("produto já foi vendido");
        }

        //verificar se o usuario existe

        const userExists = await prisma.user.findUnique({
            where:{
                id: userId
            }
        });
        if(!userExists){
            throw new AppError("User não existe!")
        }

        //adiciona ao carrinho

        await prisma.produtoCarrinho.create({
            data:{
                produtoId,
                userId,
            },
        });

    }
}