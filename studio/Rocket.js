"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.currentMass = 0;
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var accumulator;
        accumulator = 0;
        if (items.length !== 0) {
            items.forEach(function (element) { return accumulator += element.massKg; });
            return accumulator;
        }
        else {
            return 0;
        }
        ;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        this.currentMass = this.currentMassKg();
        if (this.currentMass + item.massKg <= this.totalCapacityKg) {
            this.currentMass = this.currentMass + item.massKg;
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
