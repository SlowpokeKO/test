(function () {
	'use strict';

	angular.module('public')
	.controller('SignUpController', SignUpController)

	SignUpController.$inject = ['UserService', 'MenuService']
	function SignUpController(UserService, MenuService) {
		var $ctrl = this
		$ctrl.signUpValid = false
		$ctrl.menuItemFound 
		//$ctrl.favoriteMenuCategory = null

		$ctrl.signUp = function(event) {
			console.log(event)
			event.preventDefault()

			var user = {
				firstName: $ctrl.firstName,
				lastName: $ctrl.lastName,
				emailAddress: $ctrl.emailAddress,
				phoneNumber: $ctrl.phoneNumber,
				favoriteMenuItem: $ctrl.favoriteMenuItem
			}

			MenuService.getMenuItem($ctrl.favoriteMenuItem)
			.then(function(data) {
				user.favoriteMenuItem = data
				
				UserService.setUser(user)

				$ctrl.menuItemFound = true
				$ctrl.signUpValid = true
			}, function(err) {
				$ctrl.menuItemFound = false
				$ctrl.signUpValid = false
			})
		}
	}
})()