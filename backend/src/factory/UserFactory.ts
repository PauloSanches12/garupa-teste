import { IUserService } from "../interface/IUserService";
import { UserService } from "../services/UserService";

class UserFactory {
    static getService(): IUserService {
        return new UserService();
    }
}

export default UserFactory;