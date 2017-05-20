// run block - *** don't include semi-colon at the end of angular.module

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource'])
    .run(function($rootScope, weatherService) {
        $rootScope.apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=4f5a6fa2ae1f25030eda6cff7c97de4a';
        
    });