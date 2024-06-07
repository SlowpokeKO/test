(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };
  service.getMenuItem = function (itemID) {
    var category = itemID.replace(/[0-9]/g,'')
    var index = itemID.replace(/\D/g,'');
    return $http.get(ApiPath + '/menu_items/' + category.toUpperCase() +'.json')
    .then(function (response) {
      if (typeof response.data.menu_items[index - 1] == 'undefined') {
        throw new Error('result not found')
      }
      return response.data.menu_items[index - 1]
    })
    .catch(function (error) {
      console.error(error.message)
      throw error
    })
  }
}



})();
