

//loginController-js
var app = angular.module('ChatApp',[]);

<<<<<<< HEAD
app.controller('loginCtrl',["$scope",'$remember','$location','$rootScope','$window',function($scope,$remember,$location,$rootScope,$window) {
    // $scope.username="";
    $scope.password="";
    $scope.remember = false;
=======
app.controller('loginCtrl',["$scope",'$remember','$location','$rootScope',function($scope,$remember,$location,$rootScope) {
       // $scope.username="";
        $scope.password="";
        $scope.remember = false;
>>>>>>> 49882565bfe5c21d674ae6744c2c86c23a66aa38
    $scope.showRememberMe=function () {
        if ($remember('username') && $remember('password') ) {
            $scope.remember = $remember('remember');
            $scope.username = $remember('username');
            $scope.password = $remember('password');
        }else{
            $scope.remember = false;
<<<<<<< HEAD
            // $scope.username = "";
=======
           // $scope.username = "";
>>>>>>> 49882565bfe5c21d674ae6744c2c86c23a66aa38
            $scope.password = "";
        }
    };

<<<<<<< HEAD
    $scope.showRememberMe();
    $scope.rememberMe = function() {
        if ($scope.remember) {
            $remember('username', $scope.username);
            $remember('password', $scope.password);
            $remember('remember', $scope.remember);
        } else {
            $remember('username', '');
            $remember('password', '');
            $remember('remember', false);
        }
    };

    $scope.submit=function () {

        $scope.rememberMe();

        if($scope.username == 'admin' && $scope.password == 'admin'){
            $rootScope.loggedIn = true;
            //$location.path('/Chat App1/app/views/chatRoom.html');
            $window.location.href = '/Chat App1/app/views/chatRoom.html';
        }else{
            $scope.showRememberMe();
        }
    };
=======
        $scope.showRememberMe();
        $scope.rememberMe = function() {
            if ($scope.remember) {
                $remember('username', $scope.username);
                $remember('password', $scope.password);
                $remember('remember', $scope.remember);
            } else {
                $remember('username', '');
                $remember('password', '');
                $remember('remember', false);
            }
        };

        $scope.submit=function () {

            $scope.rememberMe();

            if($scope.username == 'admin' && $scope.password == 'admin'){
                $rootScope.loggedIn = true;
                $location.path('/');
            }else{
                $scope.showRememberMe();
            }
        };
>>>>>>> 49882565bfe5c21d674ae6744c2c86c23a66aa38




}]);

app.factory('$remember', function() {
    function fetchValue(name) {
        var gCookieVal = document.cookie.split("; ");
        for (var i=0; i < gCookieVal.length; i++)
        {
            // a name/value pair (a crumb) is separated by an equal sign
            var gCrumb = gCookieVal[i].split("=");
            if (name === gCrumb[0])
            {
                var value = '';
                try {
                    value = angular.fromJson(gCrumb[1]);
                } catch(e) {
                    value = unescape(gCrumb[1]);
                }
                return value;
            }
        }
        // a cookie with the requested name does not exist
        return null;
    }
    return function(name, values) {
        if(arguments.length === 1) return fetchValue(name);
        var cookie = name + '=';
        if(typeof values === 'object') {
            var expires = '';
            cookie += (typeof values.value === 'object') ? angular.toJson(values.value) + ';' : values.value + ';';
            if(values.expires) {
                var date = new Date();
<<<<<<< HEAD
                date.setTime( date.getTime() + (values.expires * 24 * 60 * 60 * 1000));
=======
                date.setTime( date.getTime() + (values.expires * 24 *60 * 60 * 1000));
>>>>>>> 49882565bfe5c21d674ae6744c2c86c23a66aa38
                expires = date.toGMTString();
            }
            cookie += (!values.session) ? 'expires=' + expires + ';' : '';
            cookie += (values.path) ? 'path=' + values.path + ';' : '';
            cookie += (values.secure) ? 'secure;' : '';
        } else {
            cookie += values + ';';
        }
        document.cookie = cookie;
    }
});