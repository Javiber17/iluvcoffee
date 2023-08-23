import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
   constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository: Repository<Coffee>,
        @InjectRepository(Flavor)
        private readonly flavorRepository: Repository<Flavor>,
    ){}

    findAll(){
        
        return this.coffeeRepository.find({where: {relations:'flavors'},});
    }
    async findOne(id: String){    
        //const coffee = await this.coffeeRepository.findOne(id, {
        //    relations: ['flavors'],});     
        const coffee = await this.coffeeRepository.findOne(id,{where: {relations:'flavors'},});

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

    async update(id: string, updateCoffeeDto: UpdateCoffeeDto){
        const coffee = await this.coffeeRepository.preload({
            id:+id,
            ...updateCoffeeDto,
        });
        if (!coffee){
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return this.coffeeRepository.save(coffee);
    }

    async remove(id: string) {
        const coffee = await this.findOne(id);
        return this.coffeeRepository.remove(coffee);
    }
    
} 
//ver video a 28 min 1:35 para continual