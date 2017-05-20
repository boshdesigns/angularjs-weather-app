weatherApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when (
            '/', {

                templateUrl: 'pages/main.htm',
                controller: 'mainController'

            }
        )

        .when (
            '/forecast', {

                templateUrl: 'pages/forecast.htm',
                controller: 'forecastController'

            }
        )

        .when (
            '/forecast/:days', {

                templateUrl: 'pages/forecast.htm',
                controller: 'forecastController'

            }
        );

});

// Service
weatherApp.service('weatherService', function() {

    this.city = "";
    this.days = "";

})


// Directives
weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.htm',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
})



// Filter
weatherApp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});


// Factory - Using a factory for the http callback stores the info plus makes it usable over different controllers instead of just one.
weatherApp.factory('GetForecast', ['$http', '$rootScope', 'weatherService', function($http, $rootScope, weatherService) {
    
    var promise = $http.get($rootScope.apiUrl + "&q=" + weatherService.city + "&cnt=16");
    
    return {
        getData: function (callback) {
            promise.success(callback);
        }
    };
    
}]);
