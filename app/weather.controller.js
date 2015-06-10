(function() {
    'use strict';
    
    angular.module('weather').controller('WeatherCtrl', WeatherCtrl); 

    function WeatherCtrl($scope, WeatherService, WeatherConfig) {
        $scope.city = "Juiz de Fora, br";
        $scope.unit = "metric";
        $scope.getWeather = getWeather;
        $scope.iconUrl = WeatherConfig.iconUrl;
                    
        function getWeather() {
            var promise = WeatherService.getWeather($scope.city, $scope.unit);
            promise.then(function(w){
                $scope.model = w;
            }).catch(function(e){
                $scope.errorMessage = e;
            });            
        }
    }
    
})();

