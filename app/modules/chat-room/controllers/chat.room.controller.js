myApp.controller('ChatRoomController', ['$rootScope', '$scope', '$interval',
    function($rootScope, $scope, $interval){
        $scope.items = [
            {
                "id": "1",
                "username": "Username1",
                "status": "active",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0
            },
            {
                "id": "2",
                "username": "Username2",
                "status": "busy",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            },
            {
                "id": "3",
                "username": "Username3",
                "status": "away",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            },
            {
                "id": "4",
                "username": "Username4",
                "status": "active",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            },
            {
                "id": "5",
                "username": "Username5",
                "status": "busy",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            },
            {
                "id": "6",
                "username": "Username6",
                "status": "offline",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            },
            {
                "id": "7",
                "username": "Username7",
                "status": "active",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            },
            {
                "id": "8",
                "username": "Username8",
                "status": "active",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            },
            {
                "id": "9",
                "username": "Username9",
                "status": "offline",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            },
            {
                "id": "10",
                "username": "Username10",
                "status": "active",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            },
            {
                "id": "11",
                "username": "Username11",
                "status": "offline",
                "src": "app/images/profile.picture.png",
                "template" : "../../chat-popup/views/chat.popup.view.html",
                "clicked" : "false",
                "zindex" : 0

            }
        ];

        $scope.counter = 0;



        $scope.displayedForms = [];

        $scope.addChat = function(item) {
            if (item.clicked === 'false')
            {
                item.clicked='true';
                $scope.displayedForms.push(item);
                $interval(function() {
                    $rootScope.$broadcast('on-top',item.username);
                }, 0, 1);

            }
        };

        $scope.$on('remove-chat', function(event, chat) {
            var index = $scope.displayedForms.indexOf(chat);
                if(index > -1) {
                    $scope.displayedForms[index].clicked = "false";
                    $scope.displayedForms.splice(index,1);
                }
        });

        $scope.$on('on-top', function(event, username) {
            var currentItem = $scope.displayedForms.find(function(item){
                return item.zindex == 9999;
            });

            if (currentItem) {
                currentItem.zindex = 0;
                var current = document.getElementById(currentItem.username + '-mydiv');
                current.style.zIndex = '0';
            }
            var next = document.getElementById(username + '-mydiv');
            next.style.zIndex = '9999';
            var nextItem = $scope.displayedForms.find(function(item){
                return item.username == username;
            });
            nextItem.zindex = 9999;

        });



    }]);



