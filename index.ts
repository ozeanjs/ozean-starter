import 'reflect-metadata';
import { App, Controller, Get, Injectable, Module } from 'ozean';

@Injectable()
export class CatService {
  getCats() {
    return "Hello cat.";
  }
}

@Controller('/cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll() {
    return this.catService.getCats();
  }
}

@Module({
  controllers: [CatController],
  providers: [CatService],
})
export class AppModule {}

const port = 3000;
const app = new App(AppModule).listen(port);
