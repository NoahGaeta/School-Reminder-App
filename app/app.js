'strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute','ngMaterial','myApp.addText','myApp.about', 'myApp.version','xeditable','ui.bootstrap','myApp.signUp','myApp.phoneNumber','telstraApi','ysSmsVerification'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]);
