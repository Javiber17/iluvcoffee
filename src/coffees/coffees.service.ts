import { Injectable } from '@nestjs/common';
import { Coffe } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate','vainilla'],
        },
    ];
}
