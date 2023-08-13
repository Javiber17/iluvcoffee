import { Column, ManyToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Coffee } from "./coffee.entity";

@Entity()
export class Flavor {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @ManyToMany ( 
        (type) => Coffee,
        (coffee) => coffee.flavors,
    )
    coffees: Coffee[];
}

