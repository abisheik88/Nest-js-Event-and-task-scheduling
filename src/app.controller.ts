import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUser } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getRandom() {
    this.appService.generaterandom();
    this.appService.generateRecursively();
    this.appService.generateaftertenth();
  }

  @Post()
  async createuser(@Body() data: CreateUser) {
    return this.appService.createUser(data);
  }
}
