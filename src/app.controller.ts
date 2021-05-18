import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/me')
  getHello(): string {
    return this.appService.getHello();
  }
}
