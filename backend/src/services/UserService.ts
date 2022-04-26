import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

type UserRequest = {
    name: string;
    phone: string;
    email: string;
    city: string;
    state: string;
}

export class UserService {
    private userRepository = getCustomRepository(UserRepository);

    constructor(userRepository = getCustomRepository(UserRepository)) {
        this.userRepository = userRepository;
    }
    
    async execute({ city, email, name, phone, state }: UserRequest): Promise<User | Error> {

        if(await this.userRepository.findOne({name})){
            return new Error("Usuário já cadastrado!");
        }
        const user = this.userRepository.create({
            name,
            phone,
            email,
            city,
            state
        });

        await this.userRepository.save(user);

        return user;
    }
}