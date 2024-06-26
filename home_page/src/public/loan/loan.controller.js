(function () {
	'use strict'

	angular.module('public')
	.controller("LoanController", LoanController)

	LoanController.$inject = ['$scope']
	function LoanController($scope) {
		console.log('hi')
		var $ctrl = this
		$ctrl.interestType = 'com'
		$ctrl.totalPrincipal = 0
		$ctrl.totalInterest = 0
		$ctrl.totalCost = 0
		$ctrl.report = []

		$ctrl.makeReport = function() {
			$ctrl.totalPrincipal = $ctrl.loanAmount
			$ctrl.report = []
			$ctrl.monthlyPayment = 0
			var totalBalance = $ctrl.loanAmount
			var monthlyInt = 0
			var realTotalInt = 0
			var monthlyPrincipal = totalBalance / $ctrl.payMonths
			monthlyInt = $ctrl.intRate * totalBalance

			for (var i = 1; i <= $ctrl.payMonths; i++) {
				if ($ctrl.interestType == 'com'){
					console.log('true com')
					monthlyInt = $ctrl.intRate * totalBalance
				}
				realTotalInt += monthlyInt
				totalBalance -= monthlyPrincipal
				var monthlyReport = {
					month: i,
					payment: (monthlyPrincipal + monthlyInt).toFixed(2),
					principal: (monthlyPrincipal).toFixed(2),
					interest: (monthlyInt).toFixed(2),
					totalInt: (realTotalInt).toFixed(2),
					balance: (totalBalance).toFixed(2) 
				}
				$ctrl.report.push(monthlyReport)
			}
			$ctrl.totalInterest = realTotalInt
			$ctrl.totalCost = $ctrl.totalPrincipal + $ctrl.totalInterest
			$ctrl.monthlyPayment = $ctrl.totalCost / $ctrl.payMonths
		}

		$ctrl.changeType =function(type) {
			$ctrl.interestType = type
			$ctrl.monthlyPayment = 0
			$ctrl.totalPrincipal = 0
			$ctrl.totalInterest = 0
			$ctrl.totalCost = 0
			$ctrl.report = []
		}
	}
})()
