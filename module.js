(function() {
  'use strict'
  var app = angular.module("testRoute", ["ngRoute", "ngMaterial"]);

  app.controller("testCtrl", testCtrl);

  function testCtrl($scope, $mdDialog) {
    $scope.image;
    $scope.array = [{
        "name": "Zahid",
        "email": "pakhi@rani.moumachi",
        "phn": "12345",
        "image": "salehin.jpg"

      },
      {
        "name": "Ashiq",
        "email": "ashiq@gmail.com",
        "phn": "12345",
        "image": "salehin.jpg"

      }
    ];

    $scope.obj = {};
    $scope.obj2 = {};
    $scope.obj3 = {};
    $scope.array3 = $scope.array;
    $scope.array4 = [];
    $scope.showAdvanced = showAdvanced;

    function showAdvanced(ev) {
      $scope.array3 = $scope.array;

      console.log($scope.array3);
      $mdDialog.show({

        controller: "dialogCtrl",
        templateUrl: 'dialog1.html',
        targetEvent: ev,
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        locals: {
          listvalue: $scope.array
        },
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      // .then(function(answer) {
      //   $scope.status = 'You said the information was "' + answer + '".';
      // }, function() {
      //   $scope.status = 'You cancelled the dialog.';
      // });
    };


    $scope.getDetails = getDetails;

    function getDetails(ev) {
      $scope.array3 = $scope.array;

      console.log($scope.array3);
      $mdDialog.show({

        controller: "dialogCtrl",
        templateUrl: 'listViewDialog.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        locals: {
          listvalue: $scope.array[ev]
        },
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      // .then(function(answer) {
      //   $scope.status = 'You said the information was "' + answer + '".';
      // }, function() {
      //   $scope.status = 'You cancelled the dialog.';
      // });userdel
    };






    $scope.getData = getData;
    $scope.showForEditData = showForEditData;

    function getData() {
      $scope.array.unshift($scope.obj);
      $scope.obj = {}
      console.log($scope.array);
      console.log($scope.image);
    }

    $scope.layoutData = layoutData;

    function layoutData() {
      $scope.array4.unshift($scope.obj3);
      $scope.obj3 = {}
      // console.log($scope.array);
      // console.log($scope.image);
    }

    $scope.deleteObj = deleteObj;

    function deleteObj($index) {
      $scope.array.splice($index, 1);
      console.log($scope.array);
    }
    $scope.clr = clr;

    function clr() {
      $scope.obj = {}
    }


    function showForEditData(ind) {
      $scope.index = ind;
      $scope.obj2 = angular.copy($scope.array[$scope.index]);
    }

    $scope.updateData = updateData;

    function updateData() {
      $scope.array[$scope.index] = $scope.obj2;
      $scope.obj2 = {
        "name": "",
        "email": "",
        "phn": ""
      };
    }

    $scope.bar = bar;

    function bar() {

    }
  }



  app.config(function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: 'home.html',
        controller: "testCtrl2"
      })
      .when("/insert", {
        templateUrl: 'insert.html'
      })
      .when("/view", {
        templateUrl: 'view.html'
      })
      .when("/edit", {
        templateUrl: 'edit.html'
      })
      .when("/delete", {
        templateUrl: 'delete.html'
      })
      .when("/layout", {
        templateUrl: 'layout.html'
      })
  });



})();