import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { auth } from "./middleware/userAuthentication";

const routes = Router();

const { create, getAllUsers, deleteUser, update } = new UserController();

routes.post("/users", auth, create);
routes.get("/users", auth, getAllUsers);
routes.delete("/users/:id", auth, deleteUser);
routes.put("/users/:id", auth, update);

export { routes };