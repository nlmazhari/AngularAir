angular.module('airlineServices', ['ngResource'])
	.factory('Airport', function  ($resource) {
		return $resource('https://nlmazhari.github.io/AngularAir/public/index.html#/airports/:airportCode');
	})
	.factory('Flights', function  ($resource) {
		return $resource('/flights');
	})
	.factory('Reservations', function  ($resource) {
		return $resource('/reservations');
	});
