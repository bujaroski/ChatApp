var myApp = angular.module('myApp', ['ngDraggable']);

myApp.controller('myController', ['$scope',
    function($scope){
        $scope.items = [
            {
                "id": "1",
                "username": "Username1",
                "status": "active",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "2",
                "username": "Username2",
                "status": "busy",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "3",
                "username": "Username3",
                "status": "away",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "4",
                "username": "Username4",
                "status": "active",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "5",
                "username": "Username5",
                "status": "busy",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "6",
                "username": "Username6",
                "status": "active",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "7",
                "username": "Username7",
                "status": "active",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "8",
                "username": "Username8",
                "status": "active",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "9",
                "username": "Username9",
                "status": "active",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "10",
                "username": "Username10",
                "status": "active",
                "src": "app/Images/Profilepicture.png"

            },
            {
                "id": "11",
                "username": "Username11",
                "status": "away",
                "src": "app/Images/Profilepicture.png"

            }
        ];
        var chat = '../views/chat.html';
        $scope.displayedForms = [];
        $scope.addChat = function() {
            $scope.displayedForms.push(chat);
        };

        $scope.onDragComplete=function(data,evt){
            console.log("drag success, data:", data);
        }
        $scope.onDropComplete=function(data,evt){
            console.log("drop success, data:", data);
        }



    }]);

