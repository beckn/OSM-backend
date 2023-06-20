import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryDto } from 'dto/request.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/stores/:keyword')
  async fetchStores(@Param() reqParam: QueryDto) {
    console.log(reqParam?.keyword)
    return await this.appService.fetchStores(reqParam?.keyword);
  }
}
