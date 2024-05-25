(function (){
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', foundItemsDirective);

	function foundItemsDirective() {
		var ddo = {
			templateUrl: 'foundItems.html',
			scope: {
				found: '<',
				onRemove: '&'
			}
		}
		return ddo
	}

	NarrowItDownController.$inject = ['MenuSearchService']
	function NarrowItDownController(MenuSearchService) {
		var list = this;
		list.found = []
		list.empty = false
		list.searchTerm = ''
		
		list.getMatchedMenuItems = function () {
			if (list.searchTerm.trim() != '') {
				var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm)
				promise.then(function (response) {
					list.found = response
					if (list.found.length > 0) {
						list.error = 'no errors'
						list.empty = false
					} else {
						list.error = 'Nothing found'
						list.empty = true
					}
				})
				.catch(function (error) {
					list.error = 'something went wrong'
					list.empty = true
				})
			} else {
				list.error = 'Nothing found'
				list.empty = true
			}
		}

		list.removeItem = function (index) {
			list.found.splice(index, 1)
		}
	}

	MenuSearchService.$inject = ['$http']
	function MenuSearchService($http) {
		var service = this

		service.getMatchedMenuItems = function(searchTerm){
			return $http({
				method: "GET",
				url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
			}).then(function (result) {
				var foundItems = []
				for (var key in result.data) {
					if (result.data.hasOwnProperty(key)) {
						for (var key2 in result.data[key].menu_items) {
							if (result.data[key].menu_items.hasOwnProperty(key2)) {
								if (result.data[key].menu_items[key2].description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
									foundItems.push(result.data[key].menu_items[key2])
								}
							}
						}
					}
				}
				return foundItems
			})
		}
	}
})()