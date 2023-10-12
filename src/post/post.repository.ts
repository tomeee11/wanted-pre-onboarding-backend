import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostRepository {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}
  //상세조회
  async findOne(option: FindOneOptions<Post>): Promise<Post> {
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
      .update(Post)
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
  async delete(existedPost: Post): Promise<void> {
    await this.postRepository.remove(existedPost);
  }
}
