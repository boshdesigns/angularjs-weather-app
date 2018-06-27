weatherApp.controller('forecastController', ['$scope', '$rootScope', '$routeParams', '$resource', 'weatherService', 'GetForecast', function($scope, $rootScope, $routeParams, $resource, weatherService, GetForecast) {

    // Set town name
    $scope.city = weatherService.city;

    // set the number of days. If params:days is set use it, else, use the days set on the maincontroller
    $scope.activeDays = $routeParams.days || weatherService.days;

    // Function to convert
    $scope.convertToCelsius = function(degK) {

        return Math.round((1.8 * (degK)) + 32);

    }

    // function to convert the date
    $scope.convertToDate = function(dt) {

        return new Date(dt * 1000);

    }

    // The forecast results is in a factory which is being injected into this controller. Using a factory for the http callback stores the info plus makes it usable over different controllers instead of just the one. This is a test
    GetForecast.getData(function(result) {
       $scope.da = result;
    });

}]);
