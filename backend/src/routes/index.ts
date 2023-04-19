import { Router } from "express";

import { userRoutes } from "./user.routes";
import { produtoRoutes } from "./produto.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/produtos", produtoRoutes)

export { routes };