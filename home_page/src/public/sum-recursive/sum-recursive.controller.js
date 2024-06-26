(function () {
	'use strict'

	angular.module('public')
	.controller('SumRecursiveController', SumRecursiveController)

	function SumRecursiveController() {
		var $ctrl = this

		$ctrl.sum = function() {
			$ctrl.output = 0
			let inputList = $ctrl.input.split(/,| /).filter(Number)
			recursiveSum(inputList)
		}

		function recursiveSum(list) {
			while (list.length > 0) {
				$ctrl.output += Number(list[0])
				list.shift()
				recursiveSum(list)
			}
		}
	}
})()