import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Default')
@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'NestJS API for BdB project';
  }
}
