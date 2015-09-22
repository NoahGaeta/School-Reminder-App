/**
 * Created by Noah Gaeta on 9/15/2015.
 */
'use strict';


angular.module('myApp.signUp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/me', {
        templateUrl: 'signUp/signUp.html',
        controller: 'noahG'
    });
}]).controller('noahG', [
        '$scope', '$http', function ($scope, $http) {
        }
    ]
);