angular.module('airline', ['airlineServices'])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'AngularAir/public/partials/destinations.html',
		 controller: 'DestinationsCtrl'})
		.when('/airports/:airportCode', {
		 templateUrl: 'AngularAir/public/partials/airport.html',
		 controller: 'AirportCtrl'
		})
		.when('/flights', {
		 templateUrl: 'AngularAir/public/partials/flights.html',
		 controller: 'FlightsCtrl'})
		.when('/reservations', {
		 templateUrl: 'AngularAir/public/partials/reservations.html',
		 controller: 'ReservationsCtrl'});
}
