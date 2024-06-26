(function () {
	'use strict';

	angular.module('public')
	.controller('MyInfoController', MyInfoController)

	MyInfoController.$inject = ['user']
	function MyInfoController(user) {
		var $ctrl = this
		$ctrl.signedUp = false

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