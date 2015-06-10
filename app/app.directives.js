angular.module('weather').directive('cssBackgroundImage', function(){
    return function(scope, element, attrs){
        var url = attrs.cssBackgroundImage;
        element.css({
            'background-image': 'url(' + url +')',
        });
    };
});