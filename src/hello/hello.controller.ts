import { Controller, Get } from '@nestjs/common';

@Controller('')  // ruta inicial por defecto
export class HelloController {

    @Get('/')
    index(){
        return "Home Page"
    }
}
