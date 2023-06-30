import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
   constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository: Repository<Coffee>,
    ){}

    findAll(){
        return this.coffeeRepository.find();
    }

    async findOne(id: string) {
        const coffee = this.coffeeRepository.findOne[id];
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`); 
        }
        return coffee;
    }   

    create(createCoffeeDto: CreateCoffeeDto){
        const coffee = this.coffeeRepository.create(createCoffeeDto);
        return this.coffeeRepository.save(coffee);
    }
//seguir el avance a partir del minuto 2:55 del video 25

    async update(id: string, updateCoffeeDto: any){
        const Coffee = await this.coffeeRepository.preload({
            id:+id,
            ...updateCoffeeDto,
        });
        if (!Coffee){
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return this.coffeeRepository.save(Coffee);
    }

    async remove(id: string) {
        const coffee = await this.findOne(id);
        return this.coffeeRepository.remove(coffee);
    }
    
} 
