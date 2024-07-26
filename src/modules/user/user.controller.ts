/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getHello(@Query('version') version: string): Promise<string> {
    console.log(version);
    return await this.userService.getHello();
  }

  @Get('test')
  getTest(): object {
    return this.userService.getTest();
  }
}
