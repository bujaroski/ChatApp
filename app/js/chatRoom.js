var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope',
    function($scope){
        $scope.items = [
            {
                "id": "1",
                "username": "Username1",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"
            },
            {
                "id": "2",
                "username": "Username2",
                "status": "busy",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            },
            {
                "id": "3",
                "username": "Username3",
                "status": "away",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            },
            {
                "id": "4",
                "username": "Username4",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            },
            {
                "id": "5",
                "username": "Username5",
                "status": "busy",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            },
            {
                "id": "6",
                "username": "Username6",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            },
            {
                "id": "7",
                "username": "Username7",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            },
            {
                "id": "8",
                "username": "Username8",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            },
            {
                "id": "9",
                "username": "Username9",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            },
            {
                "id": "10",
                "username": "Username10",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            },
            {
                "id": "11",
                "username": "Username11",
                "status": "away",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html"

            }
        ];

        $scope.displayedForms = [];
        $scope.addChat = function(item) {
            $scope.displayedForms.push(item);
        };

        $scope.onDragComplete=function(data,evt){
            console.log("drag success, data:", data);
        }
        $scope.onDropComplete=function(data,evt){
            console.log("drop success, data:", data);
        }



    }]);

