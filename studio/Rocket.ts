import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [] = [];
    astronauts: Astronaut [] = [];
    currentMass: number= 0; 
    

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number{
        let accumulator: number;
        accumulator = 0;
        if (items.length !== 0){
            items.forEach(element => accumulator += element.massKg);
            return accumulator
        } else{
            return 0;
        }
        
         ;
    }

    currentMassKg(): number{ 
           return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);        
    }

    canAdd(item: Payload): boolean{
        this.currentMass = this.currentMassKg();
        if (this.currentMass + item.massKg <= this.totalCapacityKg){
            this.currentMass = this.currentMass + item.massKg;
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }    

    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

}