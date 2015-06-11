(function() {
    'use strict';
    
    angular.module('weather').controller('WeatherCtrl', WeatherCtrl); 

    function WeatherCtrl($scope, WeatherService, WeatherConfig) {
        $scope.city = "";
        $scope.getWeatherByCity = getWeatherByCity;
        $scope.getWeatherByLocation = getWeatherByLocation;
        $scope.model = null;
        
        function getWeatherByCity(city) {
            $scope.model = null;
            var promise = WeatherService.getWeatherByCity(city);
            updateModel(promise);
        };
        
        function getWeatherByLocation() {
            navigator.geolocation.getCurrentPosition(function(position) {
                $scope.model = null;
                var promise = WeatherService.
                    getWeatherByLocation(position.coords.latitude, position.coords.longitude);
                updateModel(promise);
            });
        };
        
        function updateModel(promise) {
            promise.then(function(w) {
                $scope.model = w;
            }).catch(function(e) {
                $scope.errorMessage = e;
            });
        };
        
        getWeatherByLocation();
    }
})();

