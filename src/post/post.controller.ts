import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('posts')
export class PostsController {
  constructor(
    private prisma: PrismaService
  ) {}

  @Get()
  async index() {
    const posts = await this.prisma.post.findMany()

    return posts
  }
}