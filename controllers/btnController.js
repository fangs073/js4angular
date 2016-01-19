function btnController ($scope) {
	$scope.popup = false;
}

angular.module('app', [])
	.controller('btnController', ['$scope', btnController]);