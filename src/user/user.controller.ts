import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[] | undefined> {
    return await this.userService.findAll()
  }

  @Get(':id')
  async findOne(@Param() params): Promise<User | undefined> {
    return await this.userService.findOne(params)
  }

  @Post()
  async store(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto)
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.userService.deleteUser(params.id)
  }
}