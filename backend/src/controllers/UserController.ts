import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    async create(request:Request, response: Response) {
        const { name, phone, cpf, email, city, state } = request.body;

        const service = new UserService();

        const registerUser = await service.execute({
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
}