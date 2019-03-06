'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature with up(degrees)', function(){
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with down(degrees)', function(){
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degress', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode (PSM) off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

});
