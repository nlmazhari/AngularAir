function airportOneCtrl ($scope, $routeParams){
	$scope.currentAirport = $scope.airports[$routeParams.airport1];
}