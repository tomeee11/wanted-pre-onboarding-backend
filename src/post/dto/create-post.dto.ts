import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(1, 255)
  @ApiProperty({ type: 'string' })
  title: string;

  @IsString()
  @Length(1, 255)
  @ApiProperty({ type: 'string' })
  position: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1000)
  @ApiProperty({ type: 'number' })
  point: number;

  @IsString()
  @Length(1, 1000)
  @ApiProperty({ type: 'string' })
  description: string;

  @IsString()
  @Length(1, 255)
  @ApiProperty({ type: 'string' })
  skill: string;
}
