import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();

const { create, getAllUsers } = new UserController();

routes.post("/users", create);
routes.get("/users", getAllUsers);

export { routes };