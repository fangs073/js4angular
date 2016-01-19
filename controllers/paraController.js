function paraController ($scope, $element) {
	$scope.highlight = [false,false,false];
	$scope.highlightToggle = function(i) {
		$scope.highlight[i] = !$scope.highlight[i];
	}
	$scope.appendBang = function(divID) {
		var myEl = angular.element( document.querySelector( '#'+divID ) );
		myEl.append('!');     
	}

	$scope.linkClicked = function(divID) {
		var confirmed = window.confirm("Are you sure that you don't want to be a pirate?");
		if (!confirmed) {
			event.preventDefault()
			angular.element( document.querySelector( '#'+divID ) ).remove();
		}
	}

}

angular.module('app', [])
	.controller('paraController', ['$scope', paraController]);