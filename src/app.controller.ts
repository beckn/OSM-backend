import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryDto } from 'dto/request.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/stores')
  async fetchStores(@Query() reqParam: QueryDto) {
    return await this.appService.fetchStores(reqParam);
  }
}
