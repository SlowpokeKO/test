(function () {
	'use strict';

	angular.module('public')
	.config(routeConfig)

	routeConfig.$inject = ['$stateProvider']
	function routeConfig ($stateProvider) {
		$stateProvider
			.state('public', {
				abstract: true,
				templateUrl: 'src/public/public.html'
			})
			.state('public.home', {
				url: '/',
				templateUrl: 'src/public/home/home.html'
			})
			.state('public.grid2', {
				url: '/grid2',
				templateUrl: 'src/public/grid2/grid2.html'
			})
			.state('public.grid2b', {
				url: '/grid2/b',
				templateUrl: 'src/public/grid2/grid2b.html'
			})
			.state('public.grid3', {
				url: '/grid3',
				templateUrl: 'src/public/grid3/grid3.html'
			})
			.state('public.grid4', {
				url: '/grid4',
				templateUrl: 'src/public/grid4/grid4.html'
			})
			.state('public.grid5', {
				url: '/grid5',
				templateUrl: 'src/public/grid5/grid5.html'
			})
			.state('public.grid6', {
				url: '/grid6',
				templateUrl: 'src/public/grid6/grid6.html'
			})
			.state('public.grid7', {
				url: '/grid7',
				templateUrl: 'src/public/grid7/grid7.html'
			})
			.state('public.grid8', {
				url: '/grid8',
				templateUrl: 'src/public/grid8/grid8.html'
			})
			.state('public.contact', {
				url: '/contact',
				templateUrl: 'src/public/contact/contact.html',
				controller: 'ContactController',
				controllerAs: 'contactCtrl'
			})
			.state('public.myinfo', {
				url: '/myinfo',
				templateUrl: 'src/public/contact/my-info.html',
				controller: 'MyInfoController',
				controllerAs: 'myInfoCtrl',
				resolve: {
					user: ['UserService', function (UserService) {
						return UserService.getUser()
					}]
				}
			})
			.state('public.invoice', {
				url: '/invoice',
				templateUrl: 'src/public/billing/invoice.html',
				controller: 'InvoiceController',
				controllerAs: 'invoiceCtrl',
				resolve: {
					user: ['UserService', function (UserService) {
						return UserService.getUser()
					}]
				}
			})
			.state('public.grocery', {
				url: '/grocery',
				templateUrl: 'src/public/grocery/grocery.html'
			})
			.state('public.aboutme-business', {
				url: '/aboutme-business',
				templateUrl: 'src/public/aboutme-business/aboutme.html'
			})
			.state('public.portfolio', {
				url: '/portfolio',
				templateUrl: 'src/public/portfolio/portfolio.html'
				// controller: 'PortfolioController',
				// controllerAs: 'portCtrl'
				//reloadOnSearch: false
			})
			.state('public.thanks', {
				url: '/thanks',
				templateUrl: 'src/public/how-many-thanks/how-many-thanks.html',
				controller: 'HowManyThanksController',
				controllerAs: 'thanksCtrl'
			})
			.state('public.fizzbuzz', {
				url: '/fizzbuzz',
				templateUrl: 'src/public/fizzbuzz/fizzbuzz.html',
				controller: 'FizzBuzzController',
				controllerAs: 'fizzBuzzCtrl'
			})
			.state('public.tacocat', {
				url: '/tacocat',
				templateUrl: 'src/public/tacocat/tacocat.html',
				controller: 'TacocatController',
				controllerAs: 'tacocatCtrl'
			})
			.state('public.loan', {
				url: '/loans',
				templateUrl: 'src/public/loan/loan.html',
				controller: 'LoanController',
				controllerAs: 'loanCtrl'
			})
			.state('public.longest', {
				url: '/longestString',
				templateUrl: 'src/public/longestString/longestString.html',
				controller: 'LongestStringController',
				controllerAs: 'longestCtrl'
			})
			.state('public.brackets', {
				url: '/balanced-brackets',
				templateUrl: 'src/public/balanced-brackets/balanced-brackets.html',
				controller: 'BalancedBracketsController',
				controllerAs: 'bracketsCtrl'
			})
			.state('public.distance', {
				url: '/distance-converter',
				templateUrl: 'src/public/distance-converter/distance-converter.html',
				controller: 'DistanceConverterController',
				controllerAs: 'distConvCtrl'
			})
			.state('public.biggest-object', {
				url: '/biggest-object',
				templateUrl: 'src/public/biggest-object/biggest-object.html',
				controller: 'BiggestObjectController',
				controllerAs: 'bigObjCtrl'
			})
			.state('public.anagram', {
				url: '/anagram',
				templateUrl: 'src/public/anagram/anagram.html',
				controller: 'AnagramController',
				controllerAs: 'anagramCtrl'
			})
			.state('public.vowels', {
				url: '/vowels',
				templateUrl: 'src/public/vowels/vowels.html',
				controller: 'VowelCountController',
				controllerAs: 'vowelCtrl'
			})
			.state('public.sum', {
				url:  '/sum',
				templateUrl: 'src/public/sum/sum.html',
				controller: 'SumController',
				controllerAs: 'sumCtrl'
			})
			.state('public.search', {
				url:  '/search',
				templateUrl: 'src/public/search/search.html',
				controller: 'SearchController',
				controllerAs: 'searchCtrl'
			})
			.state('public.most-used-word', {
				url: '/most-used-word',
				templateUrl: 'src/public/most-used-word/most-used-word.html',
				controller: 'MostUsedWordController',
				controllerAs: 'mostWordCtrl'
			})
			.state('public.sum-recursive', {
				url:  '/sum-recursive',
				templateUrl: 'src/public/sum-recursive/sum-recursive.html',
				controller: 'SumRecursiveController',
				controllerAs: 'sumRecursiveCtrl'
			})
	}
})()

