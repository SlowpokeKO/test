(function () {
	'use strict'

	angular.module('public')
	.controller('BiggestObjectController', BiggestObjectController)

	function BiggestObjectController() {
		var $ctrl = this
		$ctrl.sort = ''

		let cityData = [{
			city: "TownsTown",
			state: "New Jersey",
			population: 10001,
			median_age: 82,
			avg_household_size: 3.43
		},
		{
			city: "Newtownland",
			state: "New Jersey",
			population: 10124,
			median_age: 25,
			avg_household_size: 2.9
		},
		{
			city: "Applebeestown",
			state: "New Jersey",
			population: 9391,
			median_age: 61,
			avg_household_size: 3.59
		},
		{
			city: "Williamstown",
			state: "New Jersey",
			population: 5002,
			median_age: 28,
			avg_household_size: 2.52
		},
		{
			city: "Woodstown",
			state: "New Jersey",
			population: 9292,
			median_age: 39.2,
			avg_household_size: 3.81
		}]

		$ctrl.table = cityData



		var cityToggle = true
		function compareCity( a, b ) {
			if (cityToggle) {
				if ( a.city < b.city ){
			    	return -1;
			  	}
			  	if ( a.city > b.city ){
			    	return 1;
			  	}
			  	return 0;
			} else {
				if ( a.city > b.city ){
			    	return -1;
			  	}
			  	if ( a.city < b.city ){
			    	return 1;
			  	}
			  	return 0;
			}
		}
		$ctrl.citySort = function() {
			$ctrl.table.sort( compareCity );
			if (cityToggle) {
				$ctrl.sort = 'descCity'
			} else {
				$ctrl.sort = 'ascCity'
			}
			cityToggle = !cityToggle
		}

		var stateToggle = true
		function compareState( a, b ) {
		  	if (stateToggle) {
		  		if ( a.state > b.state ){
		    		return -1;
		  		}
		  		if ( a.state < b.state ){
		    		return 1;
		  		}
		  		return 0;
		  	} else {
		  		if ( a.state < b.state ){
		    		return -1;
		  		}
		  		if ( a.state > b.state ){
		    		return 1;
		  		}
		  		return 0;
		  	}
		}
		$ctrl.stateSort = function() {
			$ctrl.table.sort( compareState );
			if (stateToggle) {
				$ctrl.sort = 'descState'
			} else {
				$ctrl.sort = 'ascState'
			}
			stateToggle = !stateToggle
		}

		var popToggle = true
		function comparePop( a, b ) {
	  		if (popToggle) {
		  		if ( a.population > b.population ){
		    		return -1;
		  		}
		 	 	if ( a.population < b.population ){
		    		return 1;
		  		}
		  		return 0;
	  		} else {
	  			if ( a.population < b.population ){
		    		return -1;
		  		}
		 	 	if ( a.population > b.population ){
		    		return 1;
		  		}
		  		return 0;
	  		}
		}
		$ctrl.popSort = function() {
			$ctrl.table.sort( comparePop );
			if (popToggle) {
				$ctrl.sort = 'descPop'
			} else {
				$ctrl.sort = 'ascPop'
			}
			popToggle = !popToggle
		}

		var ageToggle = true
		function compareAge( a, b ) {
	  		if (ageToggle) {
		  		if ( a.median_age > b.median_age ){
		    		return -1;
		  		}
		  		if ( a.median_age < b.median_age ){
		    		return 1;
		  		}
		  		return 0;
			} else {
				if ( a.median_age < b.median_age ){
		    		return -1;
		  		}
		  		if ( a.median_age > b.median_age ){
		    		return 1;
		  		}
		  		return 0;
			}
	  	}
		$ctrl.ageSort = function() {
			$ctrl.table.sort( compareAge );
			if (ageToggle) {
				$ctrl.sort = 'descAge'
			} else {
				$ctrl.sort = 'ascAge'
			}
			ageToggle = !ageToggle
		}

		var houseToggle = true
		function compareHousehold( a, b ) {
			if (houseToggle) {
		  		if ( a.avg_household_size > b.avg_household_size ){
		    		return -1;
		  		}
		  		if ( a.avg_household_size < b.avg_household_size ){
		    		return 1;
		  		}
		  		return 0;
			} else {
				if ( a.avg_household_size < b.avg_household_size ){
		    		return -1;
		  		}
		  		if ( a.avg_household_size > b.avg_household_size ){
		    		return 1;
		  		}
		  		return 0;
			}
		}
		$ctrl.householdSort = function() {
			$ctrl.table.sort( compareHousehold );
			if (houseToggle) {
				$ctrl.sort = 'descHouse'
			} else {
				$ctrl.sort = 'ascHouse'
			}
			houseToggle = !houseToggle
		}
	}
})()