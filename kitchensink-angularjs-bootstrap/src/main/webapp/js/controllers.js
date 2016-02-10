var cpControllers = angular.module('cpControllers', []);

cpControllers.controller( 'cpControllersMain', ['$scope', '$log', '$http', '$filter'
                                       ,function( $scope, $log, $http, $filter )
{
    $http.get('js/links/links.json')
         .then( function( response )
                {
                    $scope.links = response.data;
                },
                function( response )
                {
                    $scope.links = 'http://ngaserverplatform.dev.nextgenassembly.rmnim.qa.walmart.com:8080/CenterpieceMvc/';
                    $log.error( 'GET status: ' + response.status );
                    $scope.status = response.status;
                });
    
    $scope.sortBy = "name";
    
    $log.info( $scope );
}]);

cpControllers.controller( 'cpControllersSecond', ['$scope', '$log', '$http', '$filter', '$routeParams'
                                       ,function( $scope, $log, $http, $filter, $routeParams )
{
    $scope.linkid = $routeParams.linkid;
    
    $http.get('js/links/links.json')
         .then( function( response )
                {
                    $scope.links = response.data;
                },
                function( response )
                {
                    $scope.links = 'http://ngaserverplatform.dev.nextgenassembly.rmnim.qa.walmart.com:8080/CenterpieceMvc/';
                    $log.error( 'GET status: ' + response.status );
                    $scope.status = response.status;
                });
    
    $log.info( $scope );
}]);