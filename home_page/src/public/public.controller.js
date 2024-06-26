(function () {
	'use strict';

	angular.module('public')
	.controller('MyCtrl', MyCtrl)
		
	MyCtrl.$inject = ['$scope', '$state']
	function MyCtrl($scope, $state) {
		var $ctrl = this
		console.log($state)

		$ctrl.isState = function(state) {
			Prism.highlightAll()
			return $state.current.name ==state
		}
	}
})()
