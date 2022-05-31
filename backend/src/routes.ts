import { Router } from "express";
import UserController from "./controllers/UserController";
import { userAuthentication } from "./middleware/userAuthentication";

const routes = Router();

routes.post("/users", userAuthentication, UserController.createUser);
routes.get("/users", userAuthentication, UserController.getAllUsers);
routes.delete("/users/:id", userAuthentication, UserController.deleteUser);
routes.get("/users/:id", userAuthentication, UserController.getUserById);
routes.put("/users/:id", userAuthentication, UserController.updateUser);

export { routes };