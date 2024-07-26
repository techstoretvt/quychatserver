/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getHello(): Promise<string> {

    return 'Hello World!';
  }

  getTest(): object {
    return {
      name: 'test',
      age: 18,
    };
  }
}
