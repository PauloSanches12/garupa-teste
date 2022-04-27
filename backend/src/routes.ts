import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();

const { create, getAllUsers, deleteUser } = new UserController();

routes.post("/users", create);
routes.get("/users", getAllUsers);
routes.delete("/users/:id", deleteUser);

export { routes };