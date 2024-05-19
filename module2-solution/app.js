(function () {
	'use strict';

	var shoppingList = [
	{
		name: "Apples",
		quantity: "8"
	},
	{
		name: "Pears",
		quantity: "4"
	},
	{
		name: "Oranges",
		quantity: "12"
	},
	{
		name: "Bananana",
		quantity: "3"
	},
	{
		name: "Mango",
		quantity: "1"
	}
	]

	angular.module('ShoppingListCheckOffApp', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

	ToBuyController.$inject = ['ShoppingListCheckOffService']
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyList = this;

		toBuyList.items = ShoppingListCheckOffService.getShoppingList()
		
		toBuyList.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex)
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtList = this;

		boughtList.items = ShoppingListCheckOffService.getBoughtList()
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuyItems = shoppingList
		var boughtItems = []

		service.getShoppingList = function() {
			return toBuyItems
		}

		service.getBoughtList = function() {
			return boughtItems
		}

		service.buyItem = function (itemIndex) {
			boughtItems.push(toBuyItems[itemIndex])
			toBuyItems.splice(itemIndex, 1)
		}

	}
})()