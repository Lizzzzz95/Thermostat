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

});
