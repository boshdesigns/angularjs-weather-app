weatherApp.controller('mainController', ['$scope', '$rootScope', '$http', '$resource', '$location', 'weatherService', function($scope, $rootScope, $http, $resource, $location, weatherService) {
    
    $scope.city = weatherService.city;
    $scope.days = weatherService.days;
    
    $scope.$watch('city', function() {
       
        weatherService.city = $scope.city;
        
    });
    $scope.$watch('days', function() {
       
        weatherService.days = $scope.days;
        
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    }
    
    
}]);