import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
// no es una funcion si no es un decorador
@Module({
  controllers: [TaskController],
})
export class TaskModules {}
