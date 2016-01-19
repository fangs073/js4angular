

// function dogController($scope) {
// 	$scope.dogs = [
// 		{name:'Fido', breed: 'Bergamasco'},
// 		{name:'Rex', breed:'Puli'},
// 		{name: 'Nikita', breed: 'Akita'}
// 	]
// }

// angular.module('app', [])
// 	.controller('dogController', ['$scope', dogController]);

function btnController($scope) {
	$scope.conLog = function() {
		console.log('Of course you do');
	}
}

angular.module('app', [])
	.controller('btnController', ['$scope', btnController]);