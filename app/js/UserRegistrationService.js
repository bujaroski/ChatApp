var chatApp = angular.module('chatApp',['ngRoute'])

chatApp.controller('formRegistrationController',function ($scope,$log) {
    $scope.users = [];

    $scope.user = {firstName:"",lastName:"",email:"",password:"",confirmPassword:""}

    $scope.saveUser = function()
    {
        $scope.users.push($scope.user);
    }

    $log.info($scope.users);
});

chatApp.directive('passwordConfirm', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        scope: {
            matchTarget: '=',
        },
        require: 'ngModel',
        link: function link(scope, elem, attrs, ctrl) {
            var validator = function (value) {
                ctrl.$setValidity('match', value === scope.matchTarget);
                return value;
            }

            ctrl.$parsers.unshift(validator);
            ctrl.$formatters.push(validator);

            // This is to force validator when the original password gets changed
            scope.$watch('matchTarget', function(newval, oldval) {
                validator(ctrl.$viewValue);
            });

        }
    };
}]);

chatApp.config(function ($routeProvider) {

    $routeProvider

        .when('/register', {
            templateUrl: '/views/form-registration.html',
            controller: 'formRegistrationController'
        })

        .when('/login', {
            templateUrl: '/views/form-login.html',
            controller: 'loginCtrl'
        })
});
