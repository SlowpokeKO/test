(function() {
	'use strict'

	angular.module('public')
	.controller('TacocatController', TacocatController)

	TacocatController.$inject = ['$scope']
	function TacocatController($scope) {
		var $ctrl = this
		$ctrl.result
		$ctrl.palindrome


		$ctrl.check = function() {
			//console.log($ctrl.palindrome.split(""))
			var reverse = $ctrl.palindrome.replace(/\s/g, '').split("").reverse().join("").toLowerCase()
			if ($ctrl.palindrome.replace(/\s/g, '').toLowerCase() == reverse) {
				$ctrl.result = true
			} else {
				$ctrl.result = false
			}
			//$scope.$apply()
		}
	}
})()