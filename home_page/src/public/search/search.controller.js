(function () {
	'use strict'

	angular.module('public')
	.controller('SearchController', SearchController)

	function SearchController() {
		var $ctrl = this
		var heroOptions = [ {Alias: "Ant-Man", Name: "Scott Lang"}, {Alias: "Black Panther", Name: "T'Challa"}, {Alias: "Black Widow", Name: "Natasha Romanoff"}, {Alias: "Captain America", Name: "Steve Rogers"}, {Alias: "Doctor Strange", Name: "Stephen Strange"}, {Alias: "Hawkeye", Name: "Clint Barton"}, {Alias: "Hulk", Name: "Bruce Banner"}, {Alias: "Iron Man", Name: "Tony Stark"}, {Alias: "Power Man", Name: "Luke Cage"}, {Alias: "Moon Knight", Name: "Steven Grant"}, {Alias: "Captain Marvel", Name: "Carol Danvers"}, {Alias: "Scarlet Witch", Name: "Wonda Maximoff"}, {Alias: "Spider-Man", Name: "Peter Parker"}, {Alias: "Thor", Name: "Thor Odinson"}, {Alias: "Wasp", Name: "Janet van Dyne"} ]
		$ctrl.result

		$ctrl.search = function() {
			$ctrl.setInput = $ctrl.input
			$ctrl.output = ''

			function isHero(hero) {
				return (hero.Alias.toLowerCase().includes($ctrl.input.toLowerCase()) && hero.Alias.toLowerCase().indexOf($ctrl.input.toLowerCase().slice(0,1)) == 0)
			}
			$ctrl.output = heroOptions.find(isHero)
			console.log($ctrl.output)
			if ($ctrl.output != undefined) {
				$ctrl.result = true
			} else {
				$ctrl.result = false
			}
		}
	}
})()