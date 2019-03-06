'use strict';

function Thermostat(){
  this.MININUM_TEMPERATURE = 10;
  this.temperature = 20;
};

// var thermostat = new Thermostat();

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  return this.temperature += 1;
};

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MININUM_TEMPERATURE;
}
