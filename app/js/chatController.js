myApp.controller('chatController',function ($scope) {
    $scope.messageContent = "";
    $scope.message = function myFunction() {
        var para = document.createElement("P");
        var t = document.createTextNode($scope.messageContent);
        para.appendChild(t);
        document.querySelectorAll(".chat_window_1:last-child").appendChild(para);
    }



});
