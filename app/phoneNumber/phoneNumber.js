/**
 * Created by Noah Gaeta on 9/3/2015.
 */
'use strict';

angular.module('myApp.phoneNumber', ['ngRoute', 'ngPlacesAutocomplete','xeditable','ui.bootstrap']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/phoneNumber', {
        templateUrl: 'phoneNumber/phoneNumber.html',
        controller: 'phoneNumber'
    });
}]).controller('phoneNumber', function($scope) {
    $scope.user = {
        number: ""
    };
    $scope.number = ['202-555-0181']
});
