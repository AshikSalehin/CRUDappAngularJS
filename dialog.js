(function(){
  'use strict'
  var app = angular.module("testRoute");

  app.controller("dialogCtrl", dialogCtrl);
  function dialogCtrl($scope, $mdDialog, listvalue){


    $scope.eee = listvalue;
    
    $scope.hide = hide;
    function hide() {
      $mdDialog.cancel();
    }
  }
})();
