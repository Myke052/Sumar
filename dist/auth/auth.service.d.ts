import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly adminUser;
    private readonly adminPassword;
    validateUser(loginDto: LoginDto): boolean;
}
