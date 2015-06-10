(function() {
    'use strict';
    
    angular.module('weather').controller('WeatherCtrl', WeatherCtrl); 

    function WeatherCtrl($scope, WeatherService, WeatherConfig) {
        $scope.city = "Juiz de Fora, BR";
        $scope.getWeather = getWeather;
                            
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

