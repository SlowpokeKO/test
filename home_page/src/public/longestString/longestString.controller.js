(function () {
	'use strict'

	angular.module('public')
	.controller('LongestStringController', LongestStringController)

	function LongestStringController() {
		var $ctrl = this

		$ctrl.start = function() {
			console.log('hi')
			$ctrl.result
			$ctrl.longest = ""
			var list = $ctrl.list.split(",").map(function (value) {
				return value.trim()
			})
			for (var i = 0; i < list.length; i++) {
				if (list[i].length > $ctrl.longest.length) {
					$ctrl.longest = list[i]
				}
			}
			if ($ctrl.longest == "") {
				$ctrl.result = false
			} else {
				$ctrl.result = true
			}
		}
	}
})()