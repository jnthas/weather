angular.module('weather').directive('backgroundImage', weatherDirective);

function weatherDirective(){
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, element, attrs){
            scope.$watch('model.iconId', changeBgImage);
            
            function changeBgImage() {
                var url = "'" + attrs.backgroundImage + "'";
                element.css({
                    'background-image': 'url(' + url +')',
                });
            }
        }
    };
};