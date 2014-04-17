function page2($scope, http) {
	http.getContacts().then(function(res){
		$scope.table = res;
	}, function(err){
		console.error('err', err);
	});
}