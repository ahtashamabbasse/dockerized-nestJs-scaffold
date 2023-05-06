import { TaskStatus } from '../task.module';

export class FilterTaskDto {
  status?: TaskStatus;
  search: string;
}
