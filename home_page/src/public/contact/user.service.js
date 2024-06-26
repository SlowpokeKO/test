(function () {
	'use strict';

	angular.module('public')
	.service('UserService', UserService)

	function UserService() {
		var service = this
		var user

		var min = 1000
		var max = 9999

		service.setUser = function(newUser) {
			user = {
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				emailAddress: newUser.emailAddress,
				phoneNumber: newUser.phoneNumber,
				accountNum: Math.floor(Math.random() * (max - min) + min)
			}
			let regex = /^[a-zA-Z]+$/
			if (! regex.test(user.firstName) || ! regex.test(user.lastName)) {
				return false
			} else {
				return true
			}
		}

		service.getUser = function() {
			return user
		}
		
	}
})()