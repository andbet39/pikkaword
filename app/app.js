// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute','firebase']);


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/admin', {
                templateUrl: 'view/admin.html',
                controller: 'adminController'
            }).
            when('/', {
                templateUrl: 'view/pick.html',
                controller: 'pickController'
            }).
            when('/result', {
                templateUrl: 'view/result.html',
                controller: 'resultController'
            }).
            when('/about', {
                templateUrl: 'view/about.html'
            }).
            when('/cloud', {
                templateUrl: 'view/cloud.html',
                controller: 'cloudController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);