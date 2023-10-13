import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apply } from './entities/apply.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ApplyRepository {
  constructor(
    @InjectRepository(Apply)
    private applyRepository: Repository<Apply>,
  ) {}
  async apply(postId: number, userId: number): Promise<void> {
    const apply = await this.applyRepository.create({
      post: { id: postId },
      userId,
    });
    await this.applyRepository.save(apply);
  }

  async findOne(option: FindOneOptions<Apply>): Promise<Apply> {
    return await this.applyRepository.findOne(option);
  }
}
