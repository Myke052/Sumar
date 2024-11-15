import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK) // Devuelve 200 en caso de éxito
  login(@Body() loginDto: LoginDto, @Res() res: Response) {
    // Asegúrate de incluir @Res() aquí
    console.log('Datos recibidos:', loginDto);
    const isValid = this.authService.validateUser(loginDto);
    console.log('Validación:', isValid); // Log para verificar si es válido

    if (!isValid) {
      throw new UnauthorizedException('Acceso denegado');
    }

    // Si la validación es exitosa, devuelve welcome.html
    res.setHeader('Content-Type', 'text/html');
    return res.sendFile(join(__dirname, '..', '..', 'public', 'welcome.html'));
  }
}
