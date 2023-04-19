import { User } from "@prisma/client"
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({name, email,senha,telefone}: CreateUserDTO): Promise<User> {
        //verificar se o usuário já existe, se tiver = erro
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if(userAlreadyExists){
            throw new AppError("User Already Exists!")
        }
        //criar user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                senha,
                telefone,
            },
        });
        return user;
    }
}