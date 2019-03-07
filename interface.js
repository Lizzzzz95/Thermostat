$(document).ready(function() {

  var thermostat = new Thermostat();

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUse());
  };

  function displayWeather(cityId){
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + cityId;
    var token = '&APPID=8425e2adece5e1bda12548dd4388f492';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    });
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
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    // .get retrieves the object passed in
    // the 'data' parameter is the content of this
    $('#current-temperature').text(data.main.temp);
  });

  $('#current-city').change(function() {
    var cityId = $('#current-city').val();
    displayWeather(cityId);
  });

});
