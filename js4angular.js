

// function dogController($scope) {
// 	$scope.dogs = [
// 		{name:'Fido', breed: 'Bergamasco'},
// 		{name:'Rex', breed:'Puli'},
// 		{name: 'Nikita', breed: 'Akita'}
// 	]
// }

// angular.module('app', [])
// 	.controller('dogController', ['$scope', dogController]);

function pageController($scope) {
	$scope.headerShow = false;
	$scope.headerClick = function() {
		$scope.headerShow = !$scope.headerShow;
	}
	$scope.listShow = false;
	$scope.listClick = function () {
		$scope.listShow = !$scope.listShow
	}

	$scope.dogs = [
			{name:'Fido', breed: 'Bergamasco'},
			{name:'Rex', breed:'Puli'},
			{name: 'Nikita', breed: 'Akita'}
	]
	


}

angular.module('app', [])
	.controller('pageController', ['$scope', pageController]);