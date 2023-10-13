import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';
import { Injectable } from '@nestjs/common';
import { FindOneOptions, FindOptions, Repository, Like } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostRepository {
  constructor(
    @InjectRepository(Posts)
    private postRepository: Repository<Posts>,
  ) {}

  //조회
  async find(option: FindOneOptions<Posts>): Promise<Posts[]> {
    return await this.postRepository.find(option);
  }
  //상세조회
  async findOne(option: FindOneOptions<Posts>): Promise<Posts> {
    return this.postRepository.findOne(option);
  }
  //생성
  async create(createPostDto: CreatePostDto): Promise<void> {
    const createPost = await this.postRepository.create(createPostDto);
    await this.postRepository.save(createPost);
  }
  //수정
  async update(id: number, updatePostDto: UpdatePostDto): Promise<void> {
    await this.postRepository
      .createQueryBuilder()
      .update(Posts)
      .set({
        title: updatePostDto.title,
        position: updatePostDto.position,
        point: updatePostDto.point,
        description: updatePostDto.description,
        skill: updatePostDto.skill,
      })
      .where('id=:id', { id })
      .execute();
  }
  //삭제
  async delete(existedPost: Posts): Promise<void> {
    await this.postRepository.remove(existedPost);
  }
}
