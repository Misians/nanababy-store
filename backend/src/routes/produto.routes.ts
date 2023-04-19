import { Router } from "express";
import { CreateProdutoController } from "../modules/produtos/useCases/createProduto/CreateProdutoController";
import { CreateProdutoRentController } from "../modules/produtos/createProdutoRent/createProdutoRentController";
import { GetProdutoByReleaseDateController } from "../modules/produtos/useCases/createProduto/getProdutoByReleaseDate/GetProdutoByReleaseDateController";

const createProdutoController = new CreateProdutoController();
const createProdutoRentController = new CreateProdutoRentController();
const getProdutoByReleaseDateController = new GetProdutoByReleaseDateController();

const produtoRoutes = Router();

produtoRoutes.post("/",createProdutoController.handle);
produtoRoutes.get("/release", getProdutoByReleaseDateController.handle );
produtoRoutes.post("/rent", createProdutoRentController.handle);

export { produtoRoutes };