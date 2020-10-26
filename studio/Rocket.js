"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var accumulator = 0;
        items.forEach(function (element) { return accumulator += element.massKg + accumulator; });
        return accumulator;
    };
    Rocket.prototype.currentMassKg = function () {
        var currentMass = 0;
        currentMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
