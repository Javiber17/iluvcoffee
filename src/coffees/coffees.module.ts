//import { AppModule } from './../app.module';
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({imports:[TypeOrmModule.forFeature([Coffee, Flavor])],
         controllers:[CoffeesController],
         providers:[CoffeesService],
         exports: [CoffeesService] //esta linea no figura en el tutorial video original
})
export class CoffeesModule {
    constructor(private coffeesService: CoffeesService) {} //esta linea no figura en el tutorial video original
}
