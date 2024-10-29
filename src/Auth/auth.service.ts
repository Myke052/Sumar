import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly adminUser = 'admin'; // Usuario admin
  private readonly adminPassword = '123'; // Contraseña admin

  validateUser(loginDto: LoginDto): boolean {
    return (
      loginDto.username === this.adminUser && 
      loginDto.password === this.adminPassword
    );
  }
}