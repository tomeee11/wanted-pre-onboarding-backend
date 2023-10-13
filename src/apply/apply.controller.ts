import { Controller, Post, Param } from '@nestjs/common';
import { ApplyService } from './apply.service';

@Controller('/post')
export class ApplyController {
  constructor(private readonly applyService: ApplyService) {}
  //로그인 기능 구현되면 현재 로그인된 유저아이디를 가져옴.
  @Post(':postId/apply/:userId')
  async apply(
    @Param('postId') postId: number,
    @Param('userId') userId: number,
  ): Promise<any> {
    return await this.applyService.apply(postId, userId);
  }
}
