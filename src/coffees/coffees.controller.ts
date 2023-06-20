import {Controller, Get, Param, Post, Body, Patch, Query, HttpCode, HttpStatus, Delete } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
//import path from 'path';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService){}
    @Get()
    findAll(@Query() paginationQuery) {
//      const{ limit, offset } = paginationQuery;
//ELIMINAR EN EL VIDEO      return `this action returns all Coffees. Limit: ${limit}, offset: ${offset}`;
        return this.coffeesService.findAll();    
  }

    @Get(':id')
     findOne(@Param('id') id: string) {
//Eliminar enel vidio      return `this action returns #${id} Coffees`;
      return this.coffeesService.findOne(id);
    }

    @Post()
//Parece que borra en el video 13, min 6:43    @HttpCode(HttpStatus.GONE)
    create(@Body() Body) {
//Elimina en el video      return body;
      return this.coffeesService.Create(Body); //---------------------------------- video 13, min 6:48 continuar viendo
  }

    @Patch(':id')
    update(@Param('id') id: string, @Body() Body){
      return this.coffeesService.update(id,Body)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
      return this.coffeesService.remove(id);
    }
}