import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    async createUser(request:Request, response: Response) {
        const { name, phone, cpf, email, city, state } = request.body;

        const service = new UserService();

        const registerUser = await service.createUser({
            name,
            phone,
            cpf,
            email,
            city,
            state
        });

        if(registerUser instanceof Error) {
            return response.status(400).json(registerUser.message);
        }

        return response.status(201).json(registerUser);
    }

    async getAllUsers(request: Request, response: Response) {
        const service = new UserService();

        const users = await service.getAllUsers();

        return response.status(200).json(users);
    }

    async getUserById(request: Request, response: Response) {
        const service = new UserService();

        const { id } = request.params;
        
        const user = await service.getUserById(id);

        if (user instanceof Error) {
            return response.status(400).json(user.message);
        }

        return response.status(200).json(user);
    }

    async deleteUser(request: Request, response: Response) {
        const service = new UserService();

        const { id } = request.params;

        const user = await service.deleteUser(id);

        if(user instanceof Error) {
            return response.status(400).json(user.message);
        }

        return response.status(200).json("Usuário removido!");
    }

    async updateUser(request: Request, response: Response) {
        const service = new UserService();

        const { id } = request.params;
        const { name, phone, email, city, state } = request.body;

        const user = await service.update({
            id,
            name,
            phone,
            email,
            city,
            state
        });

        if(user instanceof Error) {
            return response.status(400).json(user.message);
        }

        return response.status(200).json(user);
    }
}