import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  
  @Get('hello')
  getHello() {
    return { message: "Hello World" };
  }

  @Get('api')
  getApi() {
    return { 
      message: "API endpoint",
      data: ["item1", "item2", "item3"]
    };
  }

  @Get()
  getRoot(@Res() res: Response) {
    // Serviraj HTML stran
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  }
}