myApp.controller('ChatPopupController', ['$rootScope', '$scope',
    function($rootScope, $scope) {

        $scope.prvpat=0;

        $rootScope.$on('sendMessage', function(event, username, message){
            $scope.addElement(username, message);
            //$scope.element[0].scrollTop =  $scope.element[0].scrollHeight;
            $('.msg_container_base').stop().animate({ scrollTop: $('.msg_container_base')[0].scrollHeight}, 0);
        });

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

            if($scope.prvpat===0) //znachi e prv pat
            {
                var momentalenChat = document.getElementById(username + '-mydiv');
                momentalenChat.zindex =  9999;
                momentalenChat.style.zIndex = momentalenChat.zindex;
                $scope.prvpat=1;
            }
            else
            {

                var elements = document.getElementsByClassName("mydiv");
                    for (var i = 0, len = elements.length; i < len; i++) {
                        // elements[i].style ...
                        if(elements[i].style.zindex===9999)
                        {
                            elements[i].style.zindex=0;
                            var momentalenChat = document.getElementById(username + '-mydiv');
                            momentalenChat.zindex =  9999;
                            momentalenChat.style.zIndex = momentalenChat.zindex;
                        }
                }

            }


//da se smeni ovde so menuvanje na zindex so max
        }


    }]);