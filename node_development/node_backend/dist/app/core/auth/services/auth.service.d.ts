import { UserService } from '../../user/services/user.service';
import { User } from '../../user/model/entities/user.entity';
import { LoginDTO } from '../model/login.dto';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UserService);
    validateUser(username: string, pass: string): Promise<User | undefined>;
    login(user: LoginDTO): Promise<User>;
    register(user: User): Promise<User>;
    getUsers(): Promise<[User[], number]>;
}
