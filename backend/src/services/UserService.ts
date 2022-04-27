import { getCustomRepository } from "typeorm";
import { UserRequest, UserUpdateRequest } from "../@types/types";
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

    async deleteUser(id: string) {
        if(!await this.userRepository.findOne(id)) {
            return new Error("Usuário não existente!");
        }

        await this.userRepository.delete(id);
    }

    async update({ id, name, phone, city, email, state }: UserUpdateRequest) {

        const user = await this.userRepository.findOne(id);

        if(!user) {
            return new Error("Usuário não existente!");
        }

        user.name = name ? name : user.name;
        user.phone = phone ? phone : user.phone;
        user.city = city ? city : user.city;
        user.email = email ? email : user.email;
        user.state = state ? state : user.state;

        await this.userRepository.save(user);

        return user;
    }
}