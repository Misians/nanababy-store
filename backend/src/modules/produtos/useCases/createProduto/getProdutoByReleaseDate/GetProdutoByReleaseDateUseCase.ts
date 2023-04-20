import { Produto } from "@prisma/client"
import { prisma } from "../../../../../prisma/client";

export class GetProdutoByReleaseDateUseCase{
    async execute(): Promise<Produto[]> {
        const produtos = await prisma.produto.findMany({
           orderBy: {
            preco: "asc",
           },
           include:{
            produtocarrinho: {
                select:{
                    user: {
                        select: {
                            name: true,
                            id: true,
                        }
                    }
                }
            }
           }
        });
        return produtos;
    }
}