import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('welcome') // Ruta para acceder a welcome.html
  getWelcome(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'welcome.html'));
  }
}
