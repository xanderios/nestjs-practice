import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[] | null> {
    return this.prisma.user.findMany();
  }

  async findOne(params: {
    id: number;
  }): Promise<User> {
    const { id } = params;
    return await this.prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({
      data: createUserDto
    })

    return user
  }

  // async updateUser(params: {
  //   where: Prisma.UserWhereUniqueInput;
  //   data: Prisma.UserUpdateInput;
  // }): Promise<User> {
  //   const { where, data } = params;
  //   return this.prisma.user.update({
  //     data,
  //     where,
  //   });
  // }

  async deleteUser(where: { id: number }): Promise<User> {
    return this.prisma.user.delete({ where })
  }
}
