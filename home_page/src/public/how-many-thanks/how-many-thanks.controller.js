(function () {
	'use strict'

	angular.module('public')
	.controller('HowManyThanksController', HowManyThanksController)

	HowManyThanksController.$inject = ['$scope']
	function HowManyThanksController($scope) {
		var $ctrl = this
		$ctrl.thanks = []
		$ctrl.numThanks
		$ctrl.noThanks
		var options = ['thanks', 'thank you', 'appreciate you', 'hey thanks alot', 'thanks a bunch', 'thanks, appreciate ya', 'thank you kindly', 'thank you, thank you', 'YAYAYAYA thank you!']

		// $ctrl.generateThanks = function() {
		// 	console.log($ctrl.numThanks)
		// 	for (var i = 0; i < $ctrl.numThanks; i++) {
		// 		$ctrl.thanks.push(options[Math.floor(Math.random()*options.length)])
		// 		console.log($ctrl.numThanks)
		// 		console.log($ctrl.thanks)
		// 		setTimeout(function(){
		// 		console.log('thank you for your patience.')
		// 	}, 2000)
		// 	}
		// }

		var i = 0
		$ctrl.getThanks = function() {
			if ($scope.$on("$destroy").toString().includes('noop')){
				return
			}
			setTimeout(function(){
				console.log('thank you for your patience.')
				$ctrl.thanks.push(options[Math.floor(Math.random()*options.length)])
				$scope.$apply()
				i++
				if (i < $ctrl.numThanks) {
					$ctrl.getThanks()
				} else {
					i = 0
				}
			}, 1000)
		}

		var x = 0
		$ctrl.removeThanks = function() {
			if ($scope.$on("$destroy").toString().includes('noop')){
				return
			}
			setTimeout(function(){
				x = $ctrl.thanks.length - 1
				console.log('thank you for your patience.')
				$ctrl.thanks.splice(x)
				$ctrl.noThanks -= 1
				$scope.$apply()
				if ($ctrl.noThanks > 0) {
					$ctrl.removeThanks()
				} else {
					x = 0
				}
			}, 750)
		}
	}
})()