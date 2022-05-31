import { UserRequest, UserUpdateRequest } from "../types/types";
import { User } from "../entities/User";

export interface IUserService {
    createUser(data: UserRequest): Promise<User | Error>

    getAllUsers(): Promise<User[]>

    getUserById(id: string): Promise<User | Error>

    deleteUser(id: string): Promise<boolean | Error>

    updateUser(data: UserUpdateRequest): Promise<User | Error>
}