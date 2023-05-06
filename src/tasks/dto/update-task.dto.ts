import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.module';

export class UpdateTaskDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
