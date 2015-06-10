(function() {
    'use strict';
    
    angular.module('weather').controller('WeatherCtrl', WeatherCtrl); 

    function WeatherCtrl($scope, WeatherService, WeatherConfig) {
        $scope.city = "";
        $scope.getWeather = getWeather;
        $scope.iconId = "03d";
                            
        function getWeather(city) {            
            var promise = WeatherService.getWeather(city);
            $scope.model = null;
            promise.then(function(w){
                $scope.model = w;
            }).catch(function(e){
                $scope.errorMessage = e;
            });            
        }
    }
    
})();

