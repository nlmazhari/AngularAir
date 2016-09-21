angular.module('airlineServices', ['ngResource'])
	.factory('Airport', function  ($resource) {
		return $resource('/airports/:airportCode', {airportCode : '@airportCode'}, 'update': { method: 'PUT'});
	})
	.factory('Flights', function  ($resource) {
		return $resource('/flights');
	})
	.factory('Reservations', function  ($resource) {
		return $resource('/reservations');
	});
