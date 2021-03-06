import { getCustomRepository } from "typeorm";
import { UserRequest, UserUpdateRequest } from "../types/types";
import { IUserService } from "../interface/IUserService";
import { UserRepository } from "../repositories/UserRepository";

export class UserService implements IUserService {
    private userRepository = getCustomRepository(UserRepository);

    constructor(userRepository = getCustomRepository(UserRepository)) {
        this.userRepository = userRepository;
    }
    
    async createUser({ city, email, name, phone, state, cpf }: UserRequest) {

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

    async getUserById(id: string) {
        const user = await this.userRepository.findOne(id);

        if (!user) {
            return new Error("Usuário não encontrado!");
        }

        return user;
    }

    async deleteUser(id: string) {
        if(!await this.userRepository.findOne(id)) {
            return new Error("Usuário não existente!");
        }

        await this.userRepository.delete(id);
    }

    async updateUser({ id, name, phone, city, email, state }: UserUpdateRequest) {

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