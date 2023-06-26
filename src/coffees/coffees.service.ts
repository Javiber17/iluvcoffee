import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    [x: string]: any;
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate','vainilla'],
        },
    ];

    findAll(){
        return this.coffees;
    }

    findOne(id: string) {
        //throw 'A random error';
        const coffee = this.coffees.find(item => item.id === +id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`); 
        }
        return coffee;
    }   

    Create(createCoffeDto: any){
        this.coffees.push(createCoffeDto);
        return createCoffeDto;
    }

    update(id: string, updateCoffeDto: any){
        const existingCoffe = this.findOne(id);
        if (existingCoffe){

        }

    }

    remove(id: string) {
        const coffeeIndex= this.coffees.findIndex(item => item.id === +id);
        if(coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex, 1);
        }
    }

}
