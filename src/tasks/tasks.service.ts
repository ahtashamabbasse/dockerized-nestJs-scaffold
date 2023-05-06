import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.module';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '7e754a31-e0bf-4e7a-8305-cfdbab38836f',
      title: 'What is NestJs',
      description: 'what is NestJs',
      status: TaskStatus.OPEN
    },
    {
      id: 'cf7677e8-b012-49a2-a96d-fa0bd1a6ab4c',
      title: 'What is React',
      description: 'What is React',
      status: TaskStatus.IN_PROGRESS
    }
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskWithFilter(filterTaskDto: FilterTaskDto): Task[] {
    const { status, search } = filterTaskDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if (search) {
      tasks = tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search)
      );
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((item) => item.id === id);
  }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((item) => item.id != id);
  }

  updateTaskById(id: string, status): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    };

    this.tasks.push(task);

    return task;
  }
}
