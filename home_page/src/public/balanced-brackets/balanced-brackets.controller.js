(function () {
	'use strict'

	angular.module('public')
	.controller('BalancedBracketsController', BalancedBracketsController)

	function BalancedBracketsController() {
		var $ctrl = this
		var openBrackets = ['[','{','(']
		var closedBrackets = [']','}',')']
		var bracketMap = {
			'(': ')',
			'{': '}',
			'[': ']'
		}

		$ctrl.check = function() {
			$ctrl.result
			$ctrl.bracketList = $ctrl.brackets
			var list = []

			for (var i = 0; i < $ctrl.brackets.length; i++) {
				// check if the length is even (for balance)
				if (!($ctrl.brackets.length % 2 == 0)) {
					console.log('wrong 1')
					$ctrl.result = false
					return
				// check if all characters are valid brackets
				} else if (!(openBrackets.includes($ctrl.brackets[i]) || closedBrackets.includes($ctrl.brackets[i]))) {
					console.log('wrong 2')
					$ctrl.result = false
					return
				} else {
					// check if opening bracket
					if (openBrackets.includes($ctrl.brackets[i])) {
						list.push($ctrl.brackets[i])
					// check if closing bracket
					} else if (closedBrackets.includes($ctrl.brackets[i])) {
						if (bracketMap[list.slice(-1)] == $ctrl.brackets[i]) {
							list.splice(-1)
						} else {
							$ctrl.result = false
							return
						}
					}
				}
			}
			$ctrl.result = true
		}
	}
})()