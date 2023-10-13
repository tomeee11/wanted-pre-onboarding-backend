import { Module } from '@nestjs/common';
import { ApplyService } from './apply.service';
import { ApplyController } from './apply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apply } from './entities/apply.entity';
import { ApplyRepository } from './entities/apply.repository';
import { PostRepository } from 'src/post/post.repository';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([Apply]), PostModule],
  controllers: [ApplyController],
  providers: [ApplyService, ApplyRepository, PostRepository],
  exports: [TypeOrmModule],
})
export class ApplyModule {}
