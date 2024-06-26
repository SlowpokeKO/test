(function () {
	'use strict'

	angular.module('public')
	.controller('AnagramController', AnagramController)

	function AnagramController() {
		var $ctrl = this
		$ctrl.result

		$ctrl.check = function() {
			$ctrl.setWord1 = $ctrl.word1
			$ctrl.setWord2 = $ctrl.word2
			let worda = $ctrl.word1.toLowerCase().split('')
			let wordb = $ctrl.word2.toLowerCase().split('')
			for (let i = 0; i < $ctrl.word1.length; i++) {
				if (wordb.includes($ctrl.word1[i].toLowerCase())) {
					wordb.splice(wordb.indexOf($ctrl.word1[i].toLowerCase()), 1)
					worda.splice(worda.indexOf($ctrl.word1[i].toLowerCase()), 1)
				} else {
					$ctrl.result = false
					return
				}
			}

			if (worda.length == 0 && wordb.length == 0) {
				$ctrl.result = true
			} else {
				$ctrl.result = false
			}
		}
	}
})()