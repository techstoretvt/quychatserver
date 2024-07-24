/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query('version') version): string {
    console.log(version);
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): object {
    return this.appService.getTest();
  }
}
