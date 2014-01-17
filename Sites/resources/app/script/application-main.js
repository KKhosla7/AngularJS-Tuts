/**
 * Created by karan.khosla on 1/16/14.
 */

/* Appication Loading Context */

var myDirectivesApp = angular.module("DirectivesApp", [])
var myDirectivesBehaviorsAttributesApp = angular.module("DirectivesBehaviorsAttributesApp", [])
var mySimpleAnimationApp = angular.module("SimpleAnimationApp", ["ngAnimate"]);

angular.module("FiltersApp", []).filter('reverse', function () { // My first Filter to reverse the incoming text.
    return function (text) {
        return text.split("").reverse().join("");
    }
})

/* Application Loading Context Ends Here */


myDirectivesApp.directive('pythonicway', function () {
    return  {
        /*  restrict: can have below values
         ‘A’ – Attribute (You want to use your directive as <div rating>)
         ‘E’ – Element (Use it as <rating>)
         ‘C’ – Class. (Use it like <div class=”rating”>)
         ‘M’ – Comment (Use it like <!– directive: rating
         */
        restrict: 'A, E',
        template: "<div class='text-info lead'><a target='_blank' href='http://pythonicway.blogspot.in'>Pythonic Way</a></div>",
        link: function () {
            alert("Pythonic Way All the way. YaY!!");
        }

    }
})

myDirectivesBehaviorsAttributesApp.directive('pythonicway', function () {
    return function(scope, element, attrs)  {
        element.bind("mouseenter", function() {
            element.addClass(attrs.pythonicway);
            console.log("I'm bout to click you.");
        })
        element.bind("mouseleave", function() {
            element.removeClass(attrs.pythonicway);
            console.log("I'll visit again.");
        })
    }
})

mySimpleAnimationApp.factory('Data', function () {
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

mySimpleAnimationApp.filter('reverse', function () { // My first Filter to reverse the incoming text.
    return function (text) {
        return text.split("").reverse().join("");
    }
})

mySimpleAnimationApp.controller("AppCtrl", function () { // Control the toggling behavior.
    this.toggle = true;
})