(function () {
 'use strict'

 angular.module('public')
 .controller('DistanceConverterController', DistanceConverterController)

 DistanceConverterController.$inject = ['$scope']
 function DistanceConverterController($scope) {
 	var $ctrl = this
 	$ctrl.result = 0
 	$ctrl.units = ['inches', 'feet', 'yards', 'miles']

 	$ctrl.convert = function() {
 		var formula = 0
 		$ctrl.setUnit = $ctrl.unit2
 		// $ctrl.resultDisplay = ''
 		switch ($ctrl.unit1) {
	 		case $ctrl.unit2:
	 			formula = 1
	 			break
	 		case 'inches':
	 			if ($ctrl.unit2 == 'feet') {
	 				formula = 0.083333
	 			} else if ($ctrl.unit2 == 'yards') {
	 				formula = 0.027777
	 			} else if ($ctrl.unit2 == 'miles') {
	 				formula = 1.578283e-5
	 			}
	 			break
	 		case 'feet':
	 			if ($ctrl.unit2 == 'inches') {
	 				formula = 12
	 			} else if ($ctrl.unit2 == 'yards') {
	 				formula = 0.333333
	 			} else if ($ctrl.unit2 == 'miles') {
	 				formula = 1.893939e-4
	 			}
	 			break
	 		case 'yards':
	 			if ($ctrl.unit2 == 'inches') {
	 				formula = 36
	 			} else if ($ctrl.unit2 == 'feet') {
	 				formula = 3
	 			} else if ($ctrl.unit2 == 'miles') {
	 				formula = 5.681818e-4
	 			}
	 			break
	 		case 'miles':
	 			if ($ctrl.unit2 == 'inches') {
	 				formula = 63360
	 			} else if ($ctrl.unit2 == 'feet') {
	 				formula = 5280
	 			} else if ($ctrl.unit2 == 'yards') {
	 				formula = 1760
	 			}
	 			break
	 		default:
	 			console.log('Sorry, there was an unexpected error.')
	 	}
	 	$ctrl.result = parseFloat(($ctrl.input * formula).toFixed(5))
	 	// console.log($ctrl.result.toString().length)
		// for (let i = 0; i < $ctrl.result.toString().length; i++) {
		// 	setTimeout(() => {
		// 	$ctrl.resultDisplay += $ctrl.result.toString()[i]
		// 	console.log($ctrl.resultDisplay)
		// 	$scope.$apply()
		// 	}, 1 / ((i+1)^3) * 1000);
		// }
 	}
 }
})()