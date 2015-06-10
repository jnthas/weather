(function(){
    'use strict';

    angular.module('weather').service('WeatherService', WeatherService);
    
    function WeatherService($http, $q, WeatherConfig) {        
        this.getWeather = getWeather;
        
        function getWeather(city, units){                    
            return $q(function(resolve, reject){                
                var url = WeatherConfig.serviceUrl
                    .replace('{city}', encodeURI(city))
                    .replace('{units}', encodeURI(units))
                    .replace('{lang}', WeatherConfig.lang);
                $http.get(url)
                    .success(function(data){
                        console.log(data);
                        var w = new Weather(data, WeatherConfig);
                        resolve(w);
                    })
                    .catch(function(e){
                        reject(e.message);
                    });
            });
        };
    };
    
})();
