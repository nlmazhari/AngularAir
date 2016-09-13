function airportTwoCtrl ($scope, $routeParams){
	$scope.currentAirport = $scope.airports[$routeParams.airport2];
}