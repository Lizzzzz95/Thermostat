'use strict';

function Thermostat(){
  this.MININUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
};

var thermostat = new Thermostat();

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
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  return this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  return this.powerSavingMode = true;
};
