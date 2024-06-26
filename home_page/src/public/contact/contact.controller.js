(function () {
	'use strict';

	angular.module('public')
	.controller('ContactController', ContactController)

	ContactController.$inject = ['UserService']
	function ContactController(UserService) {
		var $ctrl = this
		
		$ctrl.submit = function(event) {
			console.log(event)
			event.preventDefault()

			var user = {
				firstName: $ctrl.firstName,
				lastName: $ctrl.lastName,
				emailAddress: $ctrl.emailAddress,
				phoneNumber: $ctrl.phoneNumber
			}
				
			if (UserService.setUser(user)) {
				console.log('good')
				$ctrl.contactValid = true
			} else {
				console.log('bad')
				$ctrl.contactValid = false
			}
		}
	}
})()