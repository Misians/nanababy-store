import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUserController } from "../modules/users/useCases/getAllUsers/getAllUsersController";

const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();

const userRoutes = Router();

userRoutes.post("/",createUserController.handle);
userRoutes.get("/",getAllUserController.handle);

export { userRoutes }