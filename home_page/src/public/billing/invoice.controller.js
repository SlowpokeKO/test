(function () {
	'use strict';

	angular.module('public')
	.controller('InvoiceController', InvoiceController)

	InvoiceController.$inject = ['user']
	function InvoiceController(user) {
		var $ctrl = this
		let date = new Date()
		let month = date.getMonth() + 1
		let day = date.getDate()
		let year = date.getFullYear()
		$ctrl.date = `${month}/${day}/${year}`
		$ctrl.invoiceNum = Math.floor(Math.random() * 9999)
		$ctrl.subTotal = 0
		$ctrl.tax = 0
		$ctrl.total = 0

		$ctrl.services = {
			design: {
				description: 'Website Design',
				rate: 60,
				quantity: 0,
				total: 0
			},
			development: {
				description: 'Website Development',
				rate: 150,
				quantity: 0,
				total: 0
			},
			deployment: {
				description: 'Deployment and Hosting',
				rate: 450,
				quantity: 0,
				total: 0
			}
		}

		//$ctrl.getInvoice = function() {
		if (user) {
			console.log(Object.keys($ctrl.services))
			Object.keys($ctrl.services).forEach(function (service) {
				$ctrl.services[service].quantity = Math.floor(Math.random() * 10) + 1
				$ctrl.services[service].total = $ctrl.services[service].rate * $ctrl.services[service].quantity
				$ctrl.subTotal += $ctrl.services[service].total
			})
			$ctrl.total = $ctrl.subTotal + $ctrl.tax
		}

		if(user) {
			$ctrl.firstName = user.firstName
			$ctrl.lastName = user.lastName
			$ctrl.emailAddress = user.emailAddress
			$ctrl.phoneNumber = user.phoneNumber
			$ctrl.accountNum = user.accountNum
			$ctrl.signedUp = true
		} else {
			$ctrl.signedUp = false
		}
	}
})()