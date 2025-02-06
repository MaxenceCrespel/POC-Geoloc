import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() body: { name: string; email: string }) {
    return this.usersService.create(body.name)
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
