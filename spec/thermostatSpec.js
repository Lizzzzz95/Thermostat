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

  describe('when power saving mode is on', function(){
    it('has max temperature of 25 degress', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true)
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function(){
    it('has max temperature of 32 degrees', function(){
      thermostat.switchPowerSavingModeOff();
      for(var i = 0; i < 13; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  it('can be reset to the default temperature', function(){
    for(var i = 0; i < 4; i++) {
      thermostat.up();
    };
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('displaying usage levels', function(){
    describe('when the temperature is below 18 degress', function(){
      it('it is considered low-usage', function(){
        for(var i = 0; i < 3; i++) {
          thermostat.down();
        };
        expect(thermostat.energyUse()).toEqual('low-usage');
      });
    });
    describe('when the temperature is between 19 and 24 degress', function(){
      it('it is considered medium-usage', function(){
        expect(thermostat.energyUse()).toEqual('medium-usage');
      });
    });
    describe('when the temperature is above 25 degress', function(){
      it('it is considered high-usage', function(){
        thermostat.powerSavingMode = false;
        for(var i = 0; i < 5; i++) {
          thermostat.up();
        };
        expect(thermostat.energyUse()).toEqual('high-usage');
      });
    });
  });

});
