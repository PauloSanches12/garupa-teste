import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { userAuthentication } from "./middleware/userAuthentication";

const routes = Router();

const { createUser, getAllUsers, deleteUser, updateUser } = new UserController();

routes.post("/users", userAuthentication, createUser);
routes.get("/users", userAuthentication, getAllUsers);
routes.delete("/users/:id", userAuthentication, deleteUser);
routes.put("/users/:id", userAuthentication, updateUser);

export { routes };