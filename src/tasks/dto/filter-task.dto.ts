import { TaskStatus } from '../task.module';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class FilterTaskDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
  @IsOptional()
  @IsString()
  search: string;
}
