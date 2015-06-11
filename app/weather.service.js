(function(){
    'use strict';

    angular.module('weather').service('WeatherService', WeatherService);
    
    function WeatherService($http, $q, WeatherConfig) {        
        this.getWeatherByCity = getWeatherByCity;
        this.getWeatherByLocation = getWeatherByLocation;
        
        function getWeatherByCity(city) {
            var url = WeatherConfig.serviceUrlByCityName
                    .replace('{city}', encodeURI(city))
                    .replace('{units}', encodeURI(WeatherConfig.formatUnits[WeatherConfig.lang].unit))
                    .replace('{lang}', WeatherConfig.lang);
            return requestApi(url);
        };
        
        function getWeatherByLocation(lat, lon) {
            var url = WeatherConfig.serviceUrlByLocation
                    .replace('{lat}', encodeURI(lat))
                    .replace('{lon}', encodeURI(lon))
                    .replace('{units}', encodeURI(WeatherConfig.formatUnits[WeatherConfig.lang].unit))
                    .replace('{lang}', WeatherConfig.lang);
            return requestApi(url);
        };
        
        function requestApi(url) {
            return $q(function(resolve, reject) {
                $http.get(url)
                    .success(function(data){
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
