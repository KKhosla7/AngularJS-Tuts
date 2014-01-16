/**
 * Created by karan.khosla on 1/16/14.
 */

var myApp = angular.module("myApp", ["ngAnimate"]);

myApp.factory('Data', function() {
    return {message: ""}
})

function ValueUpdateCtrl($scope, Data) {
    $scope.data = Data;

}

function MessageCtrl($scope, Data) {
    $scope.data = Data;
    $scope.reversedMessage = function(message) {
        return message.split("").reverse().join("");
    }
}

myApp.controller("AppCtrl", function () {
    this.toggle = true;
})