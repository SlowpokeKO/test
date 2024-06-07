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
			$ctrl.favoriteMenuItem = user.favoriteMenuItem
			$ctrl.favoriteMenuCategory = user.favoriteMenuItem.short_name.replace(/[0-9]/g,'')
			$ctrl.signedUp = true
		} else {
			$ctrl.signedUp = false
		}
	}
})()