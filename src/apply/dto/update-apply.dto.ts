import { PartialType } from '@nestjs/swagger';
import { CreateApplyDto } from './create-apply.dto';

export class UpdateApplyDto extends PartialType(CreateApplyDto) {}
