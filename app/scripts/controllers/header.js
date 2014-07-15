angular.module('haochiquanApp')
    .controller('HeaderCtl', function ($scope) {
        $scope.isVisited = [false, false, false, false, false, false];

        $scope.visiter = function($index) {
            event.preventDefault();
            $scope.isVisited.forEach(function(value, key) {
                if ($index == key) {
                    $scope.isVisited[key] = true;
                } else {
                    $scope.isVisited[key] = false;
                }

            });
        }

    });