import {Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly conffeesService: CoffeesService){}
    @Get()
    findAll(@Query() paginationQuery) {
      const{ limit, offset } = paginationQuery;
      return `this action returns all Coffees. Limit: ${limit}, offset: ${offset}`;
    }

    @Get(':id')
     findOne(@Param('id') id: string) {
      return `this action returns #${id} Coffees`;
    }

    @Post()
    create(@Body() body) {
      return body;
    }
}