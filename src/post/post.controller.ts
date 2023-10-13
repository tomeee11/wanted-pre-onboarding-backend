import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Posts } from './entities/post.entity';
import { FindPostDto } from './dto/find-post.dto';

@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  //생성
  @Post()
  // @ApiOperation({
  //   summary: '채용공고 생성 API.',
  //   description: '채용공고를 생성한다.',
  // })
  // @ApiBody({ type: [CreatePostDto] })
  async create(
    @Body(ValidationPipe) createPostDto: CreatePostDto,
  ): Promise<void> {
    await this.postService.create(createPostDto);
  }
  //전체조회
  @Get()
  async findAll(): Promise<Posts[]> {
    return await this.postService.findAll();
  }
  //특정 값 조회
  @Get('/search/:value')
  async findBy(@Param('value') findPostDto: FindPostDto): Promise<Posts[]> {
    return await this.postService.findBy(findPostDto);
  }
  //상세조회
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.postService.findOne(id);
  }
  //수정
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<void> {
    await this.postService.update(+id, updatePostDto);
  }
  //삭제
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.postService.remove(id);
  }
}
