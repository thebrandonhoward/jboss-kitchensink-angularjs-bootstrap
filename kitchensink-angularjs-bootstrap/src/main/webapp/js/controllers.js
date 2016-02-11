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
    
    $scope.setImage = function( mainImageUrl )
    {
      $scope.mainImageUrl = mainImageUrl;
    };
    
    $log.info( $scope );
}]);

cpControllers.controller( 'cpControllersSecond', ['$scope', '$log', '$http', '$filter', '$routeParams', 'cpServicesLinksData'
                                       ,function( $scope, $log, $http, $filter, $routeParams, cpServicesLinksData )
{
    $scope.linkid = $routeParams.linkid;
    
    $scope.links = cpServicesLinksData.query();
    //$scope.links = cpServicesLinksData.get( function( behowar ){} );
    
    $scope.listData = function( userid )
    {
        $log.info( userid + ": requested data list." );
        $log.info( "Data List: " + $scope );
    }
    
    $log.info( $scope );
}]);