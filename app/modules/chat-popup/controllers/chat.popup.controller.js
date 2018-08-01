myApp.controller('ChatPopupController', ['$rootScope', '$scope', '$interval',
    function($rootScope, $scope, $interval) {

        $rootScope.$on('sendMessage', function(event, username, message){
            $scope.addElement(username, message);
            //$scope.element[0].scrollTop =  $scope.element[0].scrollHeight;
            $scope.scrollDown(username);
        });


        $scope.scrollDown = function(username){
            $('#' + username+'-poraki').stop().animate({ scrollTop: $('#' + username+'-poraki')[0].scrollHeight}, 0);
        };


        $scope.addElement = function(username, message){
            if(angular.element(document.querySelector('#' +username + '-btn-input'))[0].value.trim() !== "")
            {

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
            else
            {
                angular.element(document.querySelector('#' +username + '-btn-input'))[0].focus();
            }


        }

        $scope.removeChatBroadcast = function(chat) {
            $rootScope.$broadcast('remove-chat',chat);
      };


        $scope.onTop = function(username){
            $rootScope.$broadcast('on-top',username);
        };

        $scope.$on('scroll-down', function(event, username) {
            $scope.scrollDown(username);
            });

    }]);