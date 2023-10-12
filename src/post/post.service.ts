import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './post.repository';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(private postRepositorty: PostRepository) {}

  //생성
  async create(createPostDto: CreatePostDto): Promise<void> {
    await this.postRepositorty.create(createPostDto);
  }
  //전체조회
  findAll() {
    return `This action returns all post`;
  }
  //상세조회
  async findOne(id: number): Promise<Post> {
    return await this.postRepositorty.findOne({ where: { id } });
  }
  //수정
  async update(id: number, updatePostDto: UpdatePostDto): Promise<void> {
    await this.postRepositorty.update(id, updatePostDto);
  }
  //삭제
  async remove(id: number): Promise<void> {
    const existedPost: Post = await this.postRepositorty.findOne({
      where: { id },
    });
    await this.postRepositorty.delete(existedPost);
  }
}
