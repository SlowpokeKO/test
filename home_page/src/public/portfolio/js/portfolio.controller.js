(function () {
	'use strict'

	angular.module('public')
	.controller('PortfolioController', PortfolioController)

	PortfolioController.$inject = ['$scope', '$anchorScroll']
	function PortfolioController($scope, $anchorScroll) {
		var $ctrl = this

		$scope.scrollTo = function (id) {
			$anchorScroll(id)
		}
	}
})