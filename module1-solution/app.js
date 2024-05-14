(function () {
	'use strict';

	angular.module('LCApp', [])
	.controller('LCController', LCController)
	LCController.$inject = ['$scope']

	function LCController ($scope) {
		$scope.msg = "Press the button to see the result."
		$scope.foodList = ""


		$scope.displayResult = function() {
			var items = $scope.foodList.split(",")
			items = items.filter((a) => a);	

			if (items == "") {
				$scope.msg = 'Please enter data first.'
			} else if (items.length > 3) {
				$scope.msg = 'Too much!'
			} else {
				$scope.msg = 'Enjoy! ' + items + '  sounds yummy.'
			}
		}
	}
})();