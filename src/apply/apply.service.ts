import { BadRequestException, Injectable } from '@nestjs/common';
import { ApplyRepository } from './apply.repository';
import { PostRepository } from 'src/post/post.repository';

@Injectable()
export class ApplyService {
  constructor(
    private applyRepositorty: ApplyRepository, // private postRepository: PostRepository,
  ) {}

  //생성
  async apply(postId: number, userId: number): Promise<any> {
    const existApply = await this.applyRepositorty.findOne({
      where: { post: { id: postId }, userId },
    });
    try {
      if (existApply) {
        throw new Error('이미 신청하였습니다.');
      }
      await this.applyRepositorty.apply(postId, userId);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
