/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): object {
    return {
      name: 'test',
      age: 18,
    };
  }
}
