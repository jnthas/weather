(function(){
    'use strict';

    angular.module('weather')
        .constant('WeatherConfig', {
            serviceUrlByCityName: 'http://api.openweathermap.org/data/2.5/weather?q={city}&units={units}&lang={lang}',    
            serviceUrlByLocation: 'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units={units}&lang={lang}',
            iconUrl: 'http://openweathermap.org/img/w/{iconId}.png',
            lang: 'pt',
            formatUnits: {
                'pt': {
                    speed: 'Metros/seg.',
                    temp: 'C',
                    humidity: '%',
                    pressure: 'hPa',
                    unit: 'metric'
                },
                'en': {
                    speed: 'Miles/h',
                    temp: 'F',
                    humidity: '%',
                    pressure: 'hPa',
                    unit: 'imperial'                    
                }
            }
        });
})();
