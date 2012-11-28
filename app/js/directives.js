'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('s5bContacts', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/contacts.html'
        };
    }).directive('s5bContact', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/contact.html'
        };
    }).directive('chosen', function () {
    var linker = function (scope, element, attr) {
        scope.$watch('recipientsList',function(){
            element.trigger('liszt:updated');
        });
        element.chosen();
    };

    return {
        restrict:'A',
        link: linker
    }
});
