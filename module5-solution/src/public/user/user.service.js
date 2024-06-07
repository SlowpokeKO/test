(function () {
	'use strict';

	angular.module('public')
	.service('UserService', UserService)

	function UserService() {
		var service = this
		var user

		service.setUser = function(newUser) {
			user = {
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				emailAddress: newUser.emailAddress,
				phoneNumber: newUser.phoneNumber,
				favoriteMenuItem: newUser.favoriteMenuItem	
			}
		}

		service.getUser = function() {
			return user
		}
		
	}
})()