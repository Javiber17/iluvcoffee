import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Query,
  Delete } from '@nestjs/common';
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
      return this.coffeesService.findAll();    
  }

    @Get(':id')
     findOne(@Param('id') id: string) {
      console.log(typeof id);
      return this.coffeesService.findOne(id);
      //const coffee = await this.coffeesService.findOne(req.params.id);
    }

     @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {

      console.log(createCoffeeDto instanceof CreateCoffeeDto);
      return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
      return this.coffeesService.update(id,updateCoffeeDto)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.coffeesService.remove(id);
    }
} 