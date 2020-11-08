var app = angular.module("testRoute");
app.controller("testCtrl", testCtrl);
function testCtrl($scope, crudService) {
    $scope.user = {

    }
    $scope.name = "zahid";
    $scope.view = "here"
    $scope.columnArray = ["SN", "Name", "Email", "Phone", "Address"];

    $scope.array = [
        {
            "name": "ashik",
            "email": "ashik@gmail.com",
            "phone": "245456",
            "address": "dhaka"
        },
        {
            "name": "zahid",
            "email": "zahid@gmail.com",
            "phone": "245456",
            "address": "dhaka"
        },
        {
            "name": "farhad",
            "email": "farhad@gmail.com",
            "phone": "245456",
            "address": "dhaka"
        }
    ]
    $scope.widthSize = widthSize;
    function widthSize(length) {
        return crudService.widthSize(length);

    }

    $scope.insertData = insertData
    function insertData() {
        $scope.array.unshift($scope.user)
        $scope.user = {
        }
        alert("User Added Successfully");
    }
}