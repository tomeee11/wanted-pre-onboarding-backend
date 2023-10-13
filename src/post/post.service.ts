import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './post.repository';
import { Posts } from './entities/post.entity';
import { Like } from 'typeorm';
import { FindPostDto } from './dto/find-post.dto';

@Injectable()
export class PostService {
  constructor(private postRepositorty: PostRepository) {}

  //생성
  async create(createPostDto: CreatePostDto): Promise<void> {
    await this.postRepositorty.create(createPostDto);
  }
  //전체조회
  async findAll(): Promise<Posts[]> {
    return await this.postRepositorty.find({
      select: ['id', 'title', 'point', 'position', 'skill'],
    });
  }
  //입력 받은 값 조회
  async findBy(findPostDto: FindPostDto): Promise<Posts[]> {
    return await this.postRepositorty.find({
      where: { title: Like(`%${findPostDto}%`) },
    });
  }
  //수정
  async update(id: number, updatePostDto: UpdatePostDto): Promise<void> {
    await this.postRepositorty.update(id, updatePostDto);
  }
  //삭제
  async remove(id: number): Promise<void> {
    const existedPost = await this.postRepositorty.findOne({
      where: { id },
    });
    await this.postRepositorty.delete(existedPost);
  }
}
