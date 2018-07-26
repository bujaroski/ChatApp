myApp.controller('chatController',function ($scope) {
    $scope.sendMessage = function($scope) {
        // Don't send an empty message
        if (!$scope.messageContent || $scope.messageContent === '') {
            return;
        }
        // Reset the messageContent input
        $scope.messageContent = '';

    }
});

