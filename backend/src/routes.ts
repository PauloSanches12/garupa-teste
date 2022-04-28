import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { auth } from "./middleware/userAuthentication";

const routes = Router();

const { createUser, getAllUsers, deleteUser, updateUser } = new UserController();

routes.post("/users", auth, createUser);
routes.get("/users", auth, getAllUsers);
routes.delete("/users/:id", auth, deleteUser);
routes.put("/users/:id", auth, updateUser);

export { routes };