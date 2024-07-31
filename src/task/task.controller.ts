import { Get, Controller } from '@nestjs/common';
@Controller({})
export class TaskController {
  //para que sea visto se usara un metodo . decorador
  @Get('/task')

  //  buscar en una bd
  // obtener peticiones  de otro backend o api
  getAllTask() {
    return 'OBteniendo todas las tareas';
  }
}
