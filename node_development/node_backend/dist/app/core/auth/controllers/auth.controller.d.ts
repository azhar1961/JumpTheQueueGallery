import { User } from '../../user/model/entities/user.entity';
import { AuthService } from '../services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User): Promise<User>;
    register(user: User): Promise<User>;
    getUsers(): Promise<[User[], number]>;
    currentUser(user: User): User;
}
