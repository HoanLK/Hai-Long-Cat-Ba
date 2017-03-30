frontApp.controller("homeController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.phongNghis = [];
    $scope.nhaHangSuKiens = [];
    $scope.datPhong = {};

    $http.get('/API/PostsAPI?att=phongNghi&&value=' + 3)
        .success(function (data) {
            $scope.phongNghis = data;
        })

    $http.get('/API/PostsAPI?att=nhaHangSuKien&&value=' + 4)
        .success(function (data) {
            $scope.nhaHangSuKiens = data;
        })
}]);