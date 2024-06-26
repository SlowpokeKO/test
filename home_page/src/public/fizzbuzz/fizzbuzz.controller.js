(function () {
	'use strict'

	angular.module('public')
	.controller('FizzBuzzController', FizzBuzzController)

	function FizzBuzzController() {
		var $ctrl = this
		$ctrl.fizz
		$ctrl.buzz
		$ctrl.table = []

		var tableLength = 101
		$ctrl.find = function(){
			$ctrl.table = []
			for (var i = 1; i < tableLength; i++) {
				if (i % $ctrl.fizz == 0 && i % $ctrl.buzz == 0) {
					$ctrl.table.push('FizzBuzz')
				} else if (i % $ctrl.fizz == 0) {
					$ctrl.table.push('Fizz')
				} else if (i % $ctrl.buzz == 0) {
					$ctrl.table.push('Buzz')
				} else {
					$ctrl.table.push(i)
				}
			}
		}
	}
})()