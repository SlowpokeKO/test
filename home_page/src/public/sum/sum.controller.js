(function () {
	'use strict'

	angular.module('public')
	.controller('SumController', SumController)

	function SumController() {
		var $ctrl = this

		$ctrl.sum = function() {
			$ctrl.output = 0
			let inputList = $ctrl.input.split(/,| /).filter(Number)
			console.log(inputList)
			for (var i = 0; i < inputList.length; i++) {
				$ctrl.output += Number(inputList[i])
			}
		}
	}
})()