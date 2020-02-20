$(document).ready(function(){
$('#display').on({
  mouseenter: function(){
    $(this).css('box-shadow', '0px 2px 5px 1px rgba(194,194,194,0.64)');
  },
  mouseleave: function(){
    $(this).css('box-shadow', 'none');
  }
})

$('#display').click(function(){
  $(this).css('box-shadow', '0px 2px 5px 1px rgba(194,194,194,0.64)');
});
});

function getLocation() {

var geoCall = 'http://api.openweathermap.org/data/2.5/weather'

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {

        $.getJSON (geoCall, {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            units: 'metric',
            appid: '2244edf353448cb7b1046edb0aec0e06'
        })

        .done (function (weatherData) {

            $('.weatherResponse').html('');
            $('.weatherIcon').html('');
            $('.weatherTemperature').html('');
            $('.weatherTemperatureMax').html('');
            $('.weatherTemperatureMin').html('');
            $('.weatherHumidity').html('');
            $('.weatherWindSpeed').html('');

            var icon = weatherData.weather[0].icon;
            var iconUrl = 'http://openweathermap.org/img/wn/' + icon + '.png';

            var cityName = weatherData.name;
            var country = weatherData.sys.country;
            var temperature = weatherData.main.temp + '°';
            var temperatureMax = weatherData.main.temp_max + '°';
            var temperatureMin = weatherData.main.temp_min + '°';
            var humidity = weatherData.main.humidity + '% ';
            var windSpeed = weatherData.wind.speed + ' km/h ';

            $('#weatherIcon').attr('src', iconUrl);
            $('.weatherResponse').append(cityName + ', ' + country + ' ');
            $('.weatherTemperature').append(temperature);
            $('.weatherTemperatureMax').append(temperatureMax);
            $('.weatherTemperatureMin').append(temperatureMin);
            $('.weatherHumidity').append(humidity);
            $('.weatherWindSpeed').append(windSpeed);
        })
    })
}
}

  function getWeather () {

  $('.weatherResponse').html('');
  $('.weatherIcon').html('');
  $('.weatherTemperature').html('');
  $('.weatherTemperatureMax').html('');
  $('.weatherTemperatureMin').html('');
  $('.weatherHumidity').html('');
  $('.weatherWindSpeed').html('');

  var cityName = $('#cityName').val();
  var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
  '&units=metric&lang=it&appid=2244edf353448cb7b1046edb0aec0e06';

  $.getJSON (apiCall, weatherCallback);

  function weatherCallback (weatherData) {

  var icon = weatherData.weather[0].icon;
  var iconUrl = 'http://openweathermap.org/img/wn/' + icon + '.png';
  var cityName = weatherData.name;
  var country = weatherData.sys.country;
  var temperature = weatherData.main.temp + '°';
  var temperatureMax = weatherData.main.temp_max + '°';
  var temperatureMin = weatherData.main.temp_min + '°';
  var humidity = weatherData.main.humidity + '% ';
  var windSpeed = weatherData.wind.speed + ' km/h ';

  $('.weatherResponse').append(cityName + ', ' + country + ' ');
  $('.weatherTemperature').append(temperature);
  $('.weatherTemperatureMax').append(temperatureMax);
  $('.weatherTemperatureMin').append(temperatureMin);
  $('.weatherHumidity').append(humidity);
  $('.weatherWindSpeed').append(windSpeed);
  $('#weatherIcon').attr('src', iconUrl);
  }

}
