myApp.directive('sendMessage', function($rootScope){
    return {
        restrict: 'A',
        scope: {
            username: '=',
            message: '=',
            keydown: '=',
            click: '='
        },
        link: function (scope, element, attr) {
            if (scope.keydown) {
                element.bind("keydown", function (event) {
                    if (event.which === 13) {
                        event.preventDefault();
                        $rootScope.$emit('sendMessage', scope.username, scope.message);
                    }
                });
            }

            if (scope.click) {
                element.bind("click", function (event) {
                    event.preventDefault();
                    $rootScope.$emit('sendMessage', scope.username, scope.message);
                });
            }
        }
    }});