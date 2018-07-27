myApp.controller('myController', ['$scope',
    function($scope){
        $scope.items = [
            {
                "id": "1",
                "username": "Username1",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"
            },
            {
                "id": "2",
                "username": "Username2",
                "status": "busy",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            },
            {
                "id": "3",
                "username": "Username3",
                "status": "away",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            },
            {
                "id": "4",
                "username": "Username4",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            },
            {
                "id": "5",
                "username": "Username5",
                "status": "busy",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            },
            {
                "id": "6",
                "username": "Username6",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            },
            {
                "id": "7",
                "username": "Username7",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            },
            {
                "id": "8",
                "username": "Username8",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            },
            {
                "id": "9",
                "username": "Username9",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            },
            {
                "id": "10",
                "username": "Username10",
                "status": "active",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            },
            {
                "id": "11",
                "username": "Username11",
                "status": "away",
                "src": "app/Images/Profilepicture.png",
                "template" : "../views/chat.html",
                "clicked" : "false"

            }
        ];

        $scope.counter = 0;

        $scope.displayedForms = [];
        $scope.addChat = function(item) {
            if (item.clicked === 'false')
            {
                item.clicked='true';
                $scope.displayedForms.push(item);
            }
            console.log($scope.displayedForms);

        };



        $scope.removeChat = function (chat) {
            var index = $scope.displayedForms.indexOf(chat);
            if(index > -1)
            {
                $scope.displayedForms[index].clicked = "false";
                $scope.displayedForms.splice(index,1);
            }
        }

        $scope.addElement = function(username, message){

            var newEle = angular.element(`<div class="row msg_container base_sent">`+
                `<div class="col-xs-10 col-md-10">`+
                `       <div class="messages msg_sent">`+
                `       <p>${message}</p>`+
                `   <time datetime="2009-11-13T20:00">Timothy • 51 min</time>`+
                `   </div>`+
                `  </div>`+
                `  <div class="col-md-2 col-xs-2 avatar">`+
                `      <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">`+
                `   </div>`+
                `   </div>`+
                ` <div class="row msg_container base_receive">`+
                ` <div class="col-md-2 col-xs-2 avatar">`+
                ` <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">`+
                ` </div>`+
                ` <div class="col-xs-10 col-md-10">`+
                ` <div class="messages msg_receive">`+
                ` <p>${message} </p>`+
                `  <time datetime="2009-11-13T20:00">Timothy • 51 min</time>`+
                ` </div>`+
                ` </div>`+
                ` </div>`);


            var target = document.getElementById(username+ '-target');
            angular.element(target).append(newEle);


            angular.element(document.querySelector('#' +username + '-btn-input'))[0].value="";

        }

        $scope.onTop = function(username){
            $scope.counter++;
            document.getElementById(username + '-mydiv').style.zIndex =  $scope.counter;


        }



    }]);