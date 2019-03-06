'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.MININUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
};

// var thermostat = new Thermostat();

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingModeOn()) {
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  };
  return this.temperature === this.MAX_LIMIT_PSM_OFF;
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

Thermostat.prototype.resetTemperature = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};
