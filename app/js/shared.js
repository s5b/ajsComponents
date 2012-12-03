var myModule = angular.module('myModule', []);
myModule.factory('mySharedService', function ($rootScope) {
    var sharedService = {};

    sharedService.message = '';

    sharedService.prepForBroadcast = function (msg) {
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function () {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});

function ControllerOne($scope, mySharedService) {
    $scope.handleClick = function (msg) {
        mySharedService.prepForBroadcast(msg);
    };

    $scope.$on('handleBroadcast', function () {
        $scope.message = 'ONE: ' + mySharedService.message;
    });
}

function ControllerTwo($scope, mySharedService) {
    $scope.$on('handleBroadcast', function () {
        $scope.message = 'TWO: ' + mySharedService.message;
    });
}

function ControllerThree($scope, mySharedService) {
    $scope.$on('handleBroadcast', function () {
        $scope.message = 'THREE: ' + mySharedService.message;
    });
}

ControllerOne.$inject = ['$scope', 'mySharedService'];
ControllerTwo.$inject = ['$scope', 'mySharedService'];
ControllerThree.$inject = ['$scope', 'mySharedService'];