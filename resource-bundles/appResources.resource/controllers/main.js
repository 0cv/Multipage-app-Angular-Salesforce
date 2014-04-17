function main($scope, $state){
    $scope.goToView1 = function() {
        $state.go('header.sidebar.view1');
    }
    $scope.goToView2 = function() {
        $state.go('header.sidebar.view2');
    }
    $scope.goToView3 = function() {
        $state.go('header.view3');
    }
}