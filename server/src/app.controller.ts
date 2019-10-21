import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('submit')
  create(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('favouriteColour') favouriteColour: string,
  ): string {
    return `Recieved ${name} who is ${age} years old and their favourite colour is ${favouriteColour}`;
  }
}
