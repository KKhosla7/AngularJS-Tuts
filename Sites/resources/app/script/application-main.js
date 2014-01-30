/**
 * Created by karan.khosla on 1/16/14.
 */

angular.module("RedirectApp", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: "<div class='text-center lead'>You're on a main Page.</div>"
        }).when('/hello', {
            templateUrl: "HelloWorld.html"
        }).otherwise({
            template: "Nothing found!"
        })
})

angular.module("SimpleAnimationApp", ["ngAnimate"]).controller('AnimationCtrl', function ($scope) {
    $scope.app = {
        toggle: true,
        message: ""
    }
    $scope.reversedMessage = function (message) {
        return message.split("").reverse().join("");
    }

})

angular.module("DirectivesApp", []).directive('pythonicway', function () {
    return  {
        /*  restrict: can have below values
         ‘A’ – Attribute (You want to use your directive as <div rating>) [Default]
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

angular.module("DirectivesBehaviorsAttributesApp", []).directive('pythonicway', function () {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            element.addClass(attrs.pythonicway);
            console.log("I'm bout to click you.");
        })
        element.bind("mouseleave", function () {
            element.removeClass(attrs.pythonicway);
            console.log("I'll visit again.");
        })
    }
})

angular.module("FiltersApp", []).filter('reverse', function () { // My first Filter to reverse the incoming text.
    return function (text) {
        return text.split("").reverse().join("");
    }
})