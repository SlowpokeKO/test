(function () {
	'use strict'

	angular.module('public')
	.controller('MostUsedWordController', MostUsedWordController)

	function MostUsedWordController() {
		var $ctrl = this
		
		$ctrl.find = function() {
			let inputList = $ctrl.input.split(/,| /).filter(char => /[a-zA-Z]/.test(char))
			$ctrl.output = ''
			function mode(arr){
			    return arr.sort((a,b) =>
			          arr.filter(v => v===a).length
			        - arr.filter(v => v===b).length
			    ).pop();
			}
			$ctrl.output = mode(inputList)
		}
	}
})()