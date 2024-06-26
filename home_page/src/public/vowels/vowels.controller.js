(function () {
	'use strict'

	angular.module('public')
	.controller('VowelCountController', VowelCountController)

	function VowelCountController() {
		var $ctrl = this
		var vowelOptions = ['a','e','i','o','u']
		$ctrl.result

		$ctrl.run = function() {
			$ctrl.setInput = $ctrl.input
			$ctrl.vowelList = []

			for (var i = 0; i < $ctrl.input.length; i++) {
				if (vowelOptions.includes($ctrl.input[i].toLowerCase())) {
					$ctrl.vowelList.push($ctrl.input[i])
				}
			}
			if ($ctrl.vowelList.length > 0) {
				$ctrl.result = true
			} else {
				$ctrl.result = false
			}
		}
	}
})()