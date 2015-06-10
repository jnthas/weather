(function(){
    'use strict';

    angular.module('weather')
        .constant('WeatherConfig', {
            serviceUrl: 'http://api.openweathermap.org/data/2.5/weather?q={city}&units={units}&lang={lang}',    
            iconUrl: 'http://openweathermap.org/img/w/{iconId}.png',
            lang: 'pt',
            formatUnits: {
                'pt': {
                    speed: 'Metros/seg.',
                    temp: 'Celsius',
                    humidity: '%',
                    pressure: 'hPa',
                    unit: 'metric'
                },
                'en': {
                    speed: 'Miles/h',
                    temp: 'Fahrenheit',
                    humidity: '%',
                    pressure: 'hPa',
                    unit: 'imperial'                    
                }
            }
        });
})();
