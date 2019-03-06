$(document).ready(function() {

  var thermostat = new Thermostat();

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUse());
  };

  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function(){ // event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  });

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $('#powersaving-on').text('on')
    updateTemperature();
  });

  $('#powersaving-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#powersaving-off').text('off')
    updateTemperature();
  });

})
