
(function(){
  "use strict"
   var app = angular.module("testRoute");
   app.controller("newDirectiveCtrl", newDirectiveCtrl);
  function newDirectiveCtrl($scope){
    $scope.array2 = [];
    $scope.array2 = $scope.arrayValue;
  }
  app.directive("newDirective",newDirective);
  function newDirective(){
    return {
     restrict: 'E',
     transclude: true,
     controller: "newDirectiveCtrl",
     templateUrl: 'directive.html',
     scope: {
       arrayValue: "="
     }
   };
  }

})();
