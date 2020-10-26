import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [] = [];
    astronauts: Astronaut [] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number{
        let accumulator: number = 0;
        items.forEach(element => accumulator += element.massKg + accumulator);
        return accumulator ;
    }

    currentMassKg(): number{
        let currentMass: number= 0; 
        currentMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;
    }

}