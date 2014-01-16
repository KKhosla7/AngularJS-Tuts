/**
 * Created by karan.khosla on 1/16/14.
 */

var myApp = angular.module("myApp", ["ngAnimate"]);

myApp.controller("AppCtrl", function() {
    this.toggle = true;
})

myApp.factory('Data', function() {
    return {message: ""}
})

function defaultMessageCtrl($scope, Data) {
    $scope.data = Data;
    $scope.reversedMessage = function(message) {
        return message.split("").reverse().join("");
    }
}

function UpdateCtrl($scope, Data) {
    $scope.data = Data;

}
