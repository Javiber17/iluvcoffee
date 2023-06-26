import {Controller, Get, Param, Post, Body, Patch, Query, Delete } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
//import { UpdateCoffeeDto } from './dto/update-coffee.dto'; 
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
     findOne(@Param('id') id: number) {
//Eliminar enel vidio      return `this action returns #${id} Coffees`;
      return this.coffeesService.findOne(''+id);
    }

     @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
      console.log(createCoffeeDto instanceof CreateCoffeeDto);
      return this.coffeesService.Create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
      return this.coffeesService.update(id,updateCoffeeDto)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    }

    @Delete(':id')
    remove(@Param('id') id: string){
      return this.coffeesService.remove(id);
    }
}