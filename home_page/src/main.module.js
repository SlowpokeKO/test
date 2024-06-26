(function () {
	'use strict';

	angular.module('WebpageApp', ['public'])
	.config(config)

	config.$inject = ['$urlRouterProvider']
	function config($urlRouterProvider){
		$urlRouterProvider.otherwise('/')
	}

})()