'use strict';

function Thermostat(){
  this.temperature = 20;
};

// var thermostat = new Thermostat();

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};
