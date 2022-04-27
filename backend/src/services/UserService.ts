import { getCustomRepository } from "typeorm";
import { UserRequest } from "../@types/types";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private userRepository = getCustomRepository(UserRepository);

    constructor(userRepository = getCustomRepository(UserRepository)) {
        this.userRepository = userRepository;
    }
    
    async execute({ city, email, name, phone, state, cpf }: UserRequest): Promise<User | Error> {

        if(await this.userRepository.findOne({cpf})){
            return new Error("Usuário já cadastrado!");
        }
        const user = this.userRepository.create({
            name,
            phone,
            cpf,
            email,
            city,
            state
        });

        await this.userRepository.save(user);

        return user;
    }

    async getAllUsers() {
        const users = this.userRepository.find();

        return users;
    }
}