import { Module } from '@nestjs/common';
import { TaskModules } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [TaskModules, ProjectsModule, UsersModule],
  controllers: [HelloController],
})
export class AppModule {}
