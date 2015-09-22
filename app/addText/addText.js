/**
 * Created by Noah Gaeta on 9/3/2015.
 */
'use strict';

angular.module('myApp.addText', ['ngRoute', 'ngPlacesAutocomplete','xeditable']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/addText', {
        templateUrl: 'addText/addText.html',
        controller: 'editRow'
    });
}]).controller('editRow', function($scope, $filter, $http) {
    $scope.users = [
        {id: 1, class: ''},
        {id: 2, homework: ''},
        {id: 3, notes: ''}
    ];







    $scope.saveUser = function() {
        return $http.get('/addText',$scope.user);
        };
    
    // remove user
    $scope.removeUser = function(index) {
        $scope.users.splice(index, 1);
    };

    // add user
    $scope.addUser = function() {
        $scope.inserted = {
            id: $scope.users.length+1,
            name: ''
        };
        $scope.users.push($scope.inserted);
    };
});