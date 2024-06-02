(function () {
'use strict';

angular.module('Spinner')
.component('loadingSpinner', {
  templateUrl: 'src/spinner/loadingspinner.template.html',
  controller: SpinnerController
});


SpinnerController.$inject = ['$rootScope']
function SpinnerController($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      console.log('on')
      $ctrl.showSpinner = true;
    });
    // var cancel = transitions.onStart({}, function(trans) {
    //   console.log('statechange start')
    //   $ctrl.showSpinner = true;
    // })
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      console.log('on')
      $ctrl.showSpinner = false;
    });
    // cancel = $transitions.onSuccess({}, function() {
    //   console.log("statechange success")
    //   $ctrl.showSpinner = false;
    // })
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log('on')
      $ctrl.showSpinner = false;
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
  };

};

})();
