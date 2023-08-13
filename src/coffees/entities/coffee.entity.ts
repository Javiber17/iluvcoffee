import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity"
//import { Type } from "class-transformer";

@Entity()
export class Coffee {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable()
    @ManyToMany(
        (Type) => Flavor,
        (flavor) =>flavor.coffees,
        {
            cascade: true,
        }
        )
    flavors: string[];
}
