import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { userAuthentication } from "./middleware/userAuthentication";

const routes = Router();

const { createUser, getAllUsers, deleteUser, updateUser, getUserById } = new UserController();

routes.post("/users", userAuthentication, createUser);
routes.get("/users", userAuthentication, getAllUsers);
routes.delete("/users/:id", userAuthentication, deleteUser);
routes.get("/users/:id", userAuthentication, getUserById);
routes.put("/users/:id", userAuthentication, updateUser);

export { routes };