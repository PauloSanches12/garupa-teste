import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();

const { create } = new UserController();

routes.post("/users", create);

export { routes };