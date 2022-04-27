import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();

const { create, getAllUsers, deleteUser, update } = new UserController();

routes.post("/users", create);
routes.get("/users", getAllUsers);
routes.delete("/users/:id", deleteUser);
routes.put("/users/:id", update);

export { routes };