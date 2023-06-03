import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('favors')
    findAll() {
      return "this action all Coffees";
    }

    @Get(':id')
     findOne(@Param('id') id: string) {
      return `this action returns #${id} Coffees`;
    }
}