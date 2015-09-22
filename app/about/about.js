'use strict';
/**
 * Created by Ahad on 8/18/2015.
 */


angular.module('myApp.about', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/profile', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl'
    });
}]).controller('AboutCtrl', [
        '$scope', '$http', function ($scope, $http) {
        }
    ]
);