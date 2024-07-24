/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './user.controller';
import { AppService } from './user.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello({ age: 18, name: '' })).toBe('Hello World!');
    });

    it('should return  { name: "test", age: 18 }', () => {
      expect(appController.getTest()).toEqual({
        name: 'test',
        age: 18,
      });
    });
  });
});
