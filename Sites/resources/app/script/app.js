/**
 * Created by karan.khosla on 1/16/14.
 */

var myApp = angular.module("myApp", ["ngAnimate"]);

myApp.factory('Data', function() {
    return {message: ""}
})

function ValueUpdateCtrl($scope, Data) { // Model Value Updater
    $scope.data = Data;

}

function MessageCtrl($scope, Data) {
    $scope.data = Data;
    $scope.reversedMessage = function(message) {
        return message.split("").reverse().join("");
    }
}

myApp.filter('reverse', function () { // My first Filter to reverse the incoming text.
    return function (text) {
        return text.split("").reverse().join("");
    }
})

myApp.controller("AppCtrl", function () { // Control the toggling behavior.
    this.toggle = true;
})