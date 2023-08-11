import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { UserModule } from './user/user.module';
import { PostsController } from './post/post.controller';

@Module({
  imports: [UserModule],
  controllers: [PostsController],
  providers: [PrismaService],
})
export class AppModule {}
